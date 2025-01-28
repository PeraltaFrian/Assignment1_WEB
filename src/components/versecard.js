// VerseCard.js
import React from 'react';

function VerseCard({ verse, index, defaultVersesLength, onDelete }) {
  return (
    <div className="verse-card">
      <div className="verse-card-content">
        <p className="verse-text">{verse}</p>
        {index >= defaultVersesLength && (
          <button onClick={() => onDelete(index)} className="delete-button">
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default VerseCard;
