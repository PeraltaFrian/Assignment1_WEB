import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 lg:px-8">
      {/* Page content passed in as children */}
      {children}
    </div>
  );
};

export default MainContent;
