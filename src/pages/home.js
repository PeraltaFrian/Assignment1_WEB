import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <h1 className="hero-title fade-in">Welcome to Spirit Scribe</h1>
        <p className="hero-subtext fade-in">A place to grow in faith, explore the word of God, and save meaningful verses.</p>
      </div>
    </div>
  );
};

export default Home;
