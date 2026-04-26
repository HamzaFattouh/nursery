import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function AdminDashboard() {
  const [stats] = useState([
    { title: 'إجمالي المستخدمين', value: 156, icon: '👥' },
    { title: 'أولياء الأمور', value: 89, icon: '👨‍👩‍👧' },
    { title: 'المعلمون', value: 12, icon: '👨‍🏫' },
    { title: 'عدد الكاميرات', value: 8, icon: '📹' },
  ]);

  const actions = [
    { href: '/admin/users', icon: '👥', label: 'إدارة المستخدمين' },
    { href: '/admin/cameras', icon: '📹', label: 'إدارة الكاميرات' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>لوحة تحكم الإدارة</h1>
        <p>مرحباً بك في نظام إدارة الحضانة</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles.admin}`}>
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