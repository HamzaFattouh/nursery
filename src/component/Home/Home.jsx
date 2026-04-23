import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="hero-content">
          <h1>حضانة الأطفال</h1>
          <p>مكان آمن ومحبوب لأطفالكم</p>
          <Link to="/contact" className="cta-button">احجز الآن</Link>
        </div>
      </div>
      
      <div className="home-features">
        <div className="feature">
          <h3>بيئة آمنة</h3>
          <p>نوفر بيئة آمنة ومُراقَبَة لأطفالكم</p>
        </div>
        <div className="feature">
          <h3>تعليم مبكر</h3>
          <p>برامج تعليمية مناسبة لكل عمر</p>
        </div>
        <div className="feature">
          <h3>رعاية متخصصة</h3>
          <p>فريق متخصص من المربيات المؤهلات</p>
        </div>
      </div>
    </div>
  );
}
