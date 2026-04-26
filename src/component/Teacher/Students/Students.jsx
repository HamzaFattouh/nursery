import { useState } from 'react';
import styles from './Students.module.css';

export default function Students() {
  const [students] = useState([
    { id: '1', name: 'أحمد', age: 3, parentName: 'خالد محمد', parentPhone: '0551234567' },
    { id: '2', name: 'سارة', age: 4, parentName: 'علي أحمد', parentPhone: '0551234568' },
    { id: '3', name: 'محمد', age: 3, parentName: 'يوسف علي', parentPhone: '0551234569' },
  ]);

  return (
    <div className={styles.studentsPage}>
      <div className={styles.pageHeader}><h1>أطفالي</h1></div>
      <div className={styles.studentsGrid}>
        {students.map((student) => (
          <div key={student.id} className={styles.studentCard}>
            <div className={styles.studentAvatar}>{student.name.charAt(0)}</div>
            <div className={styles.studentInfo}>
              <h3>{student.name}</h3>
              <p>العمر: {student.age} سنوات</p>
              <div className={styles.parentInfo}>
                <strong>ولي الأمر:</strong> {student.parentName}<br />
                <strong>الهاتف:</strong> {student.parentPhone}
              </div>
            </div>
            <div className={styles.studentActions}>
              <button className={styles.actionBtn}>📝 ملاحظات</button>
              <button className={styles.actionBtn}>💬 استفسارات</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}