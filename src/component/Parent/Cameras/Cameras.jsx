import { useState } from 'react';
import styles from './Cameras.module.css';

export default function Cameras() {
    const [cameras] = useState([
        { id: '1', name: 'غرفة النوم 1', location: 'الطابق الأول' },
        { id: '2', name: 'غرفة اللعب', location: 'الطابق الثاني' },
        { id: '3', name: 'الساحة الخارجية', location: 'الحديقة' },
    ]);

    const [activeCamera, setActiveCamera] = useState(null);

    return (
        <div className={styles.camerasPage}>
            <div className={styles.pageHeader}>
                <h1>كاميرات الحضانة</h1>
                <p>شاهد أطفالك في أي وقت</p>
            </div>
            <div className={styles.camerasGridSelectable}>
                {cameras.map((camera) => (
                    <div key={camera.id} className={`${styles.cameraCardSelectable} ${activeCamera === camera.id ? styles.active : ''}`} onClick={() => setActiveCamera(camera.id)}>
                        <div className={styles.cameraPreviewSelectable}>
                            <span className={styles.cameraIcon}>📹</span>
                            {activeCamera === camera.id && <div className={styles.liveIndicator}>● مباشر</div>}
                        </div>
                        <div className={styles.cameraInfoSelectable}>
                            <h3>{camera.name}</h3>
                            <p>{camera.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            {activeCamera && (
                <div className={styles.videoPlayer}>
                    <div className={styles.playerHeader}>
                        <h2>{cameras.find(c => c.id === activeCamera)?.name}</h2>
                        <span className={styles.liveBadge}>بث مباشر</span>
                    </div>
                    <div className={styles.videoContainer}>
                        <div className={styles.placeholderVideo}>
                            <span>📹</span>
                            <p>جاري تحميل البث المباشر...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}