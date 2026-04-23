import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً لتواصلكم! سنقوم بالرد عليكم قريباً');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>تواصل معنا</h1>
        <p>نحن هنا لمساعدتك دائماً</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>معلومات التواصل</h2>
          
          <div className="info-item">
            <div className="text">
              <h3>العنوان</h3>
              <p>نابلس, دوار نابلس الجديدة</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="text">
              <h3>الهاتف</h3>
              <p>0123456789</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="icon">📧</span>
            <div className="text">
              <h3>البريد الإلكتروني</h3>
              <p>info@nursery.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="icon">💬</span>
            <div className="text">
              <h3>واتساب</h3>
              <p>0123456789</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>أرسل لنا رسالة</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>الاسم</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="أدخل اسمك"
                required
              />
            </div>
            
            <div className="form-group">
              <label>رقم الهاتف</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="أدخل رقم هاتفك"
                required
              />
            </div>
            
            <div className="form-group">
              <label>الرسالة</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="أدخل رسالتك..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
}