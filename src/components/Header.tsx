import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">LI Prestige</span>
            <span className="logo-subtitle">STROY</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Начало</a>
          <a href="#" className="nav-link">Услуги</a>
          <a href="#" className="nav-link">Проекти</a>
          <a href="#" className="nav-link">За Нас</a>
          <a href="#" className="nav-link">Контакти</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;