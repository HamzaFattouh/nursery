import { useState } from 'react';
import styles from './Cameras.module.css';

export default function Cameras() {
    const [cameras] = useState([
        { id: '1', name: 'غرفة النوم 1', location: 'الطابق الأول', status: 'نشط', allowedRoles: ['admin', 'teacher', 'parent'] },
        { id: '2', name: 'غرفة النوم 2', location: 'الطابق الأول', status: 'نشط', allowedRoles: ['admin', 'teacher'] },
        { id: '3', name: 'غرفة اللعب', location: 'الطابق الثاني', status: 'نشط', allowedRoles: ['admin', 'teacher', 'parent'] },
        { id: '4', name: 'الساحة الخارجية', location: 'الحديقة', status: 'غير نشط', allowedRoles: ['admin'] },
    ]);

    const getRoleLabel = (role) => {
        switch (role) {
            case 'admin': return 'إدارة';
            case 'teacher': return 'معلم';
            case 'parent': return 'ولي أمر';
            default: return role;
        }
    };

    return (
        <div className={styles.camerasPage}>
            <div className={styles.pageHeader}>
                <h1>إدارة الكاميرات</h1>
                <button className={styles.addBtn}>+ إضافة كاميرا</button>
            </div>

            <div className={styles.camerasGrid}>
                {cameras.map((camera) => (
                    <div key={camera.id} className={styles.cameraCard}>
                        <div className={styles.cameraPreview}>
                            <span className={styles.cameraIcon}>📹</span>
                            <span className={`${styles.statusDot} ${camera.status === 'نشط' ? styles.active : ''}`}></span>
                        </div>
                        <div className={styles.cameraInfo}>
                            <h3>{camera.name}</h3>
                            <p>{camera.location}</p>
                            <div className={styles.cameraRoles}>
                                {camera.allowedRoles.map((role) => (
                                    <span key={role} className={`${styles.roleTag} ${styles[role]}`}>
                                        {getRoleLabel(role)}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.cameraActions}>
                            <button className={styles.actionBtn}>تعديل</button>
                            <button className={`${styles.actionBtn} ${styles.delete}`}>حذف</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}