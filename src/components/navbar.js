import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';  
import { HomeIcon } from '@heroicons/react/24/solid';  
import { BookmarkIcon } from '@heroicons/react/24/outline';  
import { PlusIcon } from '@heroicons/react/24/outline';  
import { InformationCircleIcon } from '@heroicons/react/24/outline';  
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 
import { Link } from 'react-router-dom';  
import './navbar.css';
import SideMenu from './sidemenu'; // Import the SideMenu component

const Navbar = ({ toggleMenu, handleSearch, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    handleSearch(event.target.value); // Update the global search query in App.js
  };

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the side menu visibility
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex items-center justify-between">
      {/* Home icon and title */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center hover:text-gray-200 transition-colors duration-300">
          <img src="/images/logo.png" alt="Home" className="h-6 w-6 text-white" />
        </Link>

        <div className="ml-4">
          <h1 className="text-2xl font-bold">Spirit Scribe</h1>
        </div>
      </div>

      {/* Desktop - Search Input */}
      <div className="flex items-center ml-auto space-x-4">
        {/* Search Input on Desktop */}
        <div className="relative flex items-center w-48">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-md text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {/* Magnifying Glass Icon Inside the Search Input (for Desktop and Mobile) */}
          <div className="absolute right-3 top-2 ">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Horizontal Navbar links (visible only on large screens) */}
      <div className="hidden lg:flex items-center space-x-4 ml-6">
        <Link to="/" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300">
          <HomeIcon className="h-6 w-6 mr-2" /> Home
        </Link>
        <Link to="/saved-verses" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300">
          <BookmarkIcon className="h-6 w-6 mr-2" /> Saved Verses
        </Link>
        <Link to="/verse-input" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300">
          <PlusIcon className="h-6 w-6 mr-2" /> Add Verse
        </Link>
        <Link to="/about" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300">
          <InformationCircleIcon className="h-6 w-6 mr-2" /> About Us
        </Link>
      </div>

      {/* Burger menu button (only visible on mobile) */}
      <button onClick={toggleSideMenu} className="lg:hidden">
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Side Menu */}
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleSideMenu} />
    </nav>
  );
};

export default Navbar;