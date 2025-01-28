import React, { useState } from 'react';
import './verseinput.css';  


function VerseInput() {
  const [newVerse, setNewVerse] = useState('');
  const [error, setError] = useState(null);


  // Handle input change
  const handleInputChange = (e) => {
    setNewVerse(e.target.value);
  };

  // Handle form submit and save the verse
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newVerse.trim()) {
      setError('Please enter a verse before submitting.');
      return;
    }

    saveVerseToLocalStorage(newVerse);
    setNewVerse('');
    setError(null);
  };
  // Save the new verse to localStorage
  const saveVerseToLocalStorage = (verse) => {
      // Get the existing verses from localStorage 
      const savedVerses = JSON.parse(localStorage.getItem('verses')) || [];
      
      // Add the new verse to the saved verses array
      savedVerses.push(newVerse);

      // Save the updated verses to localStorage
      localStorage.setItem('verses', JSON.stringify(savedVerses));
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
        <button type="submit" className="add-button">
          Add Verse
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default VerseInput;
