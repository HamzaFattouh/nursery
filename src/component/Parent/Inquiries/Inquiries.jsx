import { useState } from 'react';
import styles from './Inquiries.module.css';

export default function Inquiries() {
  const [inquiries] = useState([
    { id: '1', studentName: 'أحمد', message: 'ما هي الأنشطة التي قام بها ابني اليوم؟', status: 'answered', response: 'شارك أحمد في نشاط الرسم والتلوين', date: '2024-01-15' },
    { id: '2', studentName: 'سارة', message: 'هل تناولت ابنتي الغداء بشكل صحيح؟', status: 'pending', date: '2024-01-16' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [selectedChild, setSelectedChild] = useState('أحمد');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      alert(`تم إرسال الاستفسار: ${newMessage}`);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.inquiriesPage}>
      <div className={styles.pageHeader}><h1>استفساراتي</h1></div>
      <div className={styles.newInquiry}>
        <h2>إرسال استفسار جديد</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>اختر الطفل</label>
            <select value={selectedChild} onChange={(e) => setSelectedChild(e.target.value)}>
              <option value="أحمد">أحمد</option>
              <option value="سارة">سارة</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>الاستفسار</label>
            <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="اكتب استفسارك هنا..." required />
          </div>
          <button type="submit" className={styles.submitBtn}>إرسال</button>
        </form>
      </div>
      <div className={styles.inquiriesList}>
        <h2>سجل الاستفسارات</h2>
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className={styles.inquiryCard}>
            <div className={styles.inquiryHeader}>
              <div className={styles.inquiryInfo}>
                <h3>{inquiry.studentName}</h3>
                <span className={styles.date}>{inquiry.date}</span>
              </div>
              <span className={`${styles.statusBadge} ${inquiry.status === 'pending' ? '' : styles.answered}`}>
                {inquiry.status === 'pending' ? 'معلق' : 'تم الرد'}
              </span>
            </div>
            <div className={styles.inquiryMessage}><p>{inquiry.message}</p></div>
            {inquiry.response && (
              <div className={styles.responseBox}><strong>رد المعلم:</strong><p>{inquiry.response}</p></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}