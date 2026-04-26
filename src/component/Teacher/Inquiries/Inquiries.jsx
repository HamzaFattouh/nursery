import { useState } from 'react';
import styles from './Inquiries.module.css';

export default function Inquiries() {
    const [inquiries] = useState([
        { id: '1', parentName: 'خالد محمد', studentName: 'أحمد', message: 'ما هي الأنشطة التي قام بها ابني اليوم؟', status: 'pending', date: '2024-01-15' },
        { id: '2', parentName: 'علي أحمد', studentName: 'سارة', message: 'هل تناولت ابنتي الغداء بشكل صحيح؟', status: 'answered', date: '2024-01-14' },
    ]);

    const [responses, setResponses] = useState({});

    const handleRespond = (id) => {
        const response = responses[id];
        if (response) {
            alert(`تم إرسال الرد: ${response}`);
        }
    };

    return (
        <div className={styles.inquiriesPage}>
            <div className={styles.pageHeader}><h1>استفسارات أولياء الأمور</h1></div>
            <div className={styles.inquiriesList}>
                {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className={styles.inquiryCard}>
                        <div className={styles.inquiryHeader}>
                            <div className={styles.inquiryInfo}>
                                <h3>{inquiry.parentName}</h3>
                                <p>عن الطفل: {inquiry.studentName}</p>
                            </div>
                            <span className={`${styles.statusBadge} ${inquiry.status === 'pending' ? '' : styles.answered}`}>
                                {inquiry.status === 'pending' ? 'معلق' : 'تم الرد'}
                            </span>
                        </div>
                        <div className={styles.inquiryMessage}>
                            <p>{inquiry.message}</p>
                            <span className={styles.date}>{inquiry.date}</span>
                        </div>
                        {inquiry.status === 'pending' ? (
                            <div className={styles.responseForm}>
                                <textarea placeholder="اكتب ردك هنا..." value={responses[inquiry.id] || ''} onChange={(e) => setResponses({ ...responses, [inquiry.id]: e.target.value })} />
                                <button onClick={() => handleRespond(inquiry.id)} className={styles.respondBtn}>إرسال الرد</button>
                            </div>
                        ) : (
                            <div className={styles.responseText}><strong>ردك:</strong> تم الرد سابقاً</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}