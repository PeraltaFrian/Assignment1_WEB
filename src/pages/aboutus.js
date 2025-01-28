import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200">
      {/* Hero Image Section */}
      <div className="mb-8">
        <img
          src="/images/background.jpg" 
          alt="About Us"
          className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* About Us Text Section */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 transition-all duration-300 ease-in-out hover:text-yellow-500">
        About Us
      </h1>
      <p className="text-lg text-gray-700 transition-all duration-300 ease-in-out hover:text-gray-800">
        Welcome to Spirit Scribe, a platform designed to help you grow in faith. Our mission is to empower users by providing a space to save, reflect on, and share meaningful verses from the Bible. 
        We aim to inspire and support individuals on their spiritual journey.
      </p>
      <p className="mt-4 text-lg text-gray-700 transition-all duration-300 ease-in-out hover:text-gray-800">
        Whether you're seeking guidance, comfort, or motivation, Spirit Scribe is here to accompany you in exploring the word of God. 
        Join us in connecting with the Bible and strengthening your spiritual life.
      </p>
    </div>
  );
};

export default AboutUs;
