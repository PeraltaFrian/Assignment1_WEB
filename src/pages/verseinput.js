import React, { useState } from 'react';
import './verseinput.css';  


function VerseInput() {
  const [newVerse, setNewVerse] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setNewVerse(e.target.value);
  };

  // Handle form submit and save the verse
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newVerse.trim()) {
      // Get the existing verses from localStorage 
      const savedVerses = JSON.parse(localStorage.getItem('verses')) || [];
      
      // Add the new verse to the saved verses array
      savedVerses.push(newVerse);

      // Save the updated verses to localStorage
      localStorage.setItem('verses', JSON.stringify(savedVerses));

      // Clear the input field
      setNewVerse('');
    }
  };

  return (
    <div className="verse-input-container">
      <form onSubmit={handleSubmit} className="verse-form">
        <textarea
          value={newVerse}
          onChange={handleInputChange}
          placeholder="Enter your verse here..."
          className="verse-input"
        />
        <button type="submit" className="add-button">Add Verse</button>
      </form>
    </div>
  );
}

export default VerseInput;
