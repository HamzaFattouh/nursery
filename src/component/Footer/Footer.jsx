import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>حضانة الأطفال</h3>
          <p>نوفر بيئة آمنة ومحفزة لأطفالكم حيث يمكنهم النمو والتعلم واللعب بحرية.</p>
        </div>
        
        <div className="footer-section links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/about">من نحن</a></li>
            <li><a href="/services">الخدمات</a></li>
            <li><a href="/contact">تواصل معنا</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h4>معلومات التواصل</h4>
          <p>دوار نابلس الجديدة</p>
          <p>0123456789</p>
          <p>info@nursery.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 حضانة الأطفال. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}