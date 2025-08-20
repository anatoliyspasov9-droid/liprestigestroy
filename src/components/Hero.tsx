import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          Нашите <span className="hero-title-accent">Услуги</span>
        </h1>
        <p className="hero-description">
          Предлагаме пълен спектър от строителни услуги - от проектиране до<br />
          завършване, с гаранция за качество и професионализъм във всеки етап.
        </p>
      </div>
    </section>
  );
};

export default Hero;