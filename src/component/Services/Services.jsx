import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'التعليم المبكر',
      description: 'نقدم مناهج تعليمية مصممة خصيصاً لتنمية مهارات الأطفال الفكرية والاجتماعية'
    },
    {
      title: 'أنشطة الفنون',
      description: 'ورش رسم وصنع工艺品 لتنمية الإبداع والتعبير الفني عند الأطفال'
    },
    {
      title: 'الموسيقى والغناء',
      description: 'دروس موسيقى تفاعلية تساعد على تطوير الحواس والإيقاع'
    },
    {
      title: 'الأنشطة الرياضية',
      description: 'ألعاب رياضية متنوعة لتنمية اللياقة البدنية والتعاون'
    },
    {
      title: 'قراءة القصص',
      description: 'جلسات قراءة ممتعة لتغذية خيال الأطفال وتعزيز اللغة'
    },
    {
      title: 'العلوم والتجارب',
      description: 'تجارب علمية بسيطة وآمنة لإثارة فضول الأطفال'
    },
    {
      title: 'التغذية السليمة',
      description: 'وجبات صحية ومتوازنة مصممة خصيصاً لأطفالنا'
    },
    {
      title: 'خدمة النقل',
      description: 'خدمة نقل آمنة ومريحة من وإلى الحضانة'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>خدماتنا</h1>
        <p>نقدم أفضل الخدمات لأطفالكم</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="services-info">
        <h2>أوقات العمل</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="day">الأحد - الخميس</span>
            <span className="time">7 صباحاً - 5 مساءً</span>
          </div>
        </div>
      </div>
    </div>
  );
}