import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/navbar';
import SideMenu from './components/sidemenu';
import MainContent from './components/maincontent';
import Footer from './components/footer'; 
import Home from './pages/home';
import SavedVerses from './pages/savedverses';
import VerseInput from './pages/verseinput';
import AboutUs from './pages/aboutus'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to update search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to add new verse and save it to localStorage
  const addVerse = (newVerse) => {
    const existingVerses = JSON.parse(localStorage.getItem('verses')) || [];
    existingVerses.push(newVerse);
    localStorage.setItem('verses', JSON.stringify(existingVerses));
  };

  return (
    <Router> {/* Router to enable client-side routing */}
    {/* Navbar Component */}
      <Navbar toggleMenu={toggleMenu} handleSearch={handleSearch} searchQuery={searchQuery} />
      {/* SideMenu Component */}
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* The MainContent component serves as a container for the active page content */}
      <MainContent>
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />
          {/* Route for Saved Verses Page */}
          <Route path="/saved-verses" element={<SavedVerses searchQuery={searchQuery} />} />
          {/* Route for Verse Input Page */}
          <Route path="/verse-input" element={<VerseInput onAddVerse={addVerse} />} />
          {/* Route for About Us Page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </MainContent>
      
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
