import React, { useState, useEffect } from 'react';
import './savedverses.css';
import Hero from '../components/hero'; 
import VerseCard from '../components/versecard'; // New component

function SavedVerses({ searchQuery }) {
  const [verses, setVerses] = useState([]);
  
  // Default verses
  const defaultVerses = [
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. — Jeremiah 29:11",
    "The Lord is my shepherd; I shall not want. — Psalm 23:1",
    "I can do all things through him who strengthens me. — Philippians 4:13",
  ];

  // Load saved verses from localStorage (user-added verses)
  useEffect(() => {
    const savedVerses = JSON.parse(localStorage.getItem('verses')) || [];
    setVerses([...defaultVerses, ...savedVerses]); // Combine default verses with saved user verses
  }, []);

  // Handle deleting a verse
  const handleDelete = (index) => {
    if (index < defaultVerses.length) return;

    const updatedVerses = verses.filter((_, i) => i !== index);
    setVerses(updatedVerses);
    localStorage.setItem('verses', JSON.stringify(updatedVerses)); // Save to localStorage
  };

  // Filter verses based on search query
  const filteredVerses = verses.filter((verse) =>
    verse.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="saved-verses-container">
      <Hero 
        title="Spirit Scribe"
        subtitle="Your collection of meaningful Bible verses"
        heroStyle={{ height: '400px' }} 
      />

      {/* Display saved verses */}
      <div className="saved-verses-content">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Saved Verses'}
        </h2>
        
        {filteredVerses.length > 0 ? (
          <div className="verses-list">
            {filteredVerses.map((verse, index) => (
              <VerseCard
                key={index}
                verse={verse}
                index={index}
                defaultVersesLength={defaultVerses.length}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p>No verses found. Try a different search term!</p>
        )}
      </div>
    </div>
  );
}

export default SavedVerses;
