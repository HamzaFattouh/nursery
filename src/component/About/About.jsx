import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>من نحن</h1>
        <p>حضانة أطفالنا - حيث ينمو حب التعلم</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>رسالتنا</h2>
          <p>
            نحن ملتزمون بتوفير بيئة آمنة ومحفزة لأطفالكم، حيث يمكنهم النمو والتعلم واللعب بحرية.
            نؤمن بأن كل طفل له قدرات فريدة ونعمل على تنميتها من خلال أنشطة تعليمية ممتعة.
          </p>
        </div>

        <div className="about-section">
          <h2>رؤيتنا</h2>
          <p>
            أن نكون الحضانة الأولى التي يثق بها أولياء الأمور في المنطقة، من خلال تقديم رعاية متميزة
            وتعليم عالي الجودة لأطفالهم في بيئة دافئة ومحبة.
          </p>
        </div>

        <div className="about-values">
          <h2>قيمنا</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">♥</span>
              <h3>الحب والعناية</h3>
              <p>نعامل كل طفل بحب ورعاية فائقة</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📚</span>
              <h3>التعليم</h3>
              <p>نقدم مناهج تعليمية مناسبة لكل عمر</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎨</span>
              <h3>الإبداع</h3>
              <p>نشجع على التعبير الفني والإبداعي</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>التعاون</h3>
              <p>نعلمهم السلوك الحسن والعمل الجماعي</p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <h2>فريقنا</h2>
          <p>
            يتكون فريقنا من مربيات مؤهلات وذات خبرة عالية في التعامل مع الأطفال،
            جميعهن حاصلات على شهادات متخصصة في الطفولة المبكرة.
          </p>
        </div>
      </div>
    </div>
  );
}