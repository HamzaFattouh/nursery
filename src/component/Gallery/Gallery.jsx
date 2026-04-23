import React from 'react';
import './Gallery.css';

export default function Gallery() {
  const images = [
    { id: 1, title: 'ركن اللعب', desc: 'مساحة آمنة ومجهزة للأطفال' },
    { id: 2, title: 'ركن القراءة', desc: 'مكتبة متنوعة لتنمية الفكر' },
    { id: 3, title: 'ركن الرسم', desc: 'أنشطة فنية لتنمية الإبداع' },
    { id: 4, title: 'الألعاب التعليمية', desc: 'ألعاب تنموية مناسبة' },
    { id: 5, title: 'الساحة الخارجية', desc: 'مساحات مفتوحة للعب' },
    { id: 6, title: 'وجبات صحية', desc: 'تغذية متوازنة ومخصصة' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>معرض الصور</h1>
        <p>لحظات سعيدة من حياتنا اليومية</p>
      </div>
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <div className="image-placeholder">
              <span className="placeholder-icon">📷</span>
            </div>
            <h3>{image.title}</h3>
            <p>{image.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="gallery-note">
        <p>سيتم إضافة صور حقيقية قريباً</p>
      </div>
    </div>
  );
}