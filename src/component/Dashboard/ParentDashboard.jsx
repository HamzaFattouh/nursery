import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function ParentDashboard() {
  const [stats] = useState([
    { title: 'أبنائي', value: 2, icon: '👶' },
    { title: 'ملاحظات جديدة', value: 5, icon: '📝' },
    { title: 'استفساراتي', value: 3, icon: '💬' },
  ]);

  const actions = [
    { href: '/parent/cameras', icon: '📹', label: 'مشاهدة الكاميرات' },
    { href: '/parent/inquiries', icon: '💬', label: 'استفساراتي' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>لوحة تحكم ولي الأمر</h1>
        <p>مرحباً بك في صفحة أبنائك</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles.parent}`}>
            <span className={styles.statIcon}>{stat.icon}</span>
            <div className={styles.statInfo}>
              <h3>{stat.title}</h3>
              <p className={styles.statValue}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.quickActions}>
        <h2>إجراءات سريعة</h2>
        <div className={styles.actionsGrid}>
          {actions.map((action, index) => (
            <Link key={index} to={action.href} className={styles.actionCard}>
              <span className={styles.actionIcon}>{action.icon}</span>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}