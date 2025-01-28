import React from 'react';
import './hero.css';  

function Hero({ title, subtitle, backgroundImage }) {
  
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    position: 'relative',
  };

  return (
    <div className="hero-bg" style={heroStyle}>
      <div className="hero-overlay"></div>  {/* Overlay to enhance text visibility */}
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtext">{subtitle}</p>
    </div>
  );
}

Hero.defaultProps = {
  title: 'Spirit Scribe',
  subtitle: 'Your collection of meaningful Bible verses',
  backgroundImage: '/images/background.jpg', 
};

export default Hero;
