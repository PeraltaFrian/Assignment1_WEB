import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { HomeIcon } from '@heroicons/react/24/solid'; 
import { BookmarkIcon } from '@heroicons/react/24/outline'; 
import { PlusIcon } from '@heroicons/react/24/outline'; 
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { InformationCircleIcon } from '@heroicons/react/24/outline';  

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } fixed top-0 right-0 w-64 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg h-full transform transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close button */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold text-white">Spirit Scribe Menu</h2>
        <button onClick={toggleMenu} className="text-white">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Menu links */}
      <ul className="space-y-4 p-4">
        {/* Home Link */}
        <li>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-yellow-300 transition-all duration-300"
            activeClassName="text-yellow-500 font-semibold"
          >
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </NavLink>
        </li>

        {/* Saved Verses Link */}
        <li>
          <NavLink
            to="/saved-verses"
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-yellow-300 transition-all duration-300"
            activeClassName="text-yellow-500 font-semibold"
          >
            <BookmarkIcon className="h-6 w-6 mr-2" />
            Saved Verses
          </NavLink>
        </li>

        {/* Add Verse Link */}
        <li>
          <NavLink
            to="/verse-input"
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-yellow-300 transition-all duration-300"
            activeClassName="text-yellow-500 font-semibold"
          >
            <PlusIcon className="h-6 w-6 mr-2" />
            Add Verse
          </NavLink>
        </li>
        
        {/* About us Link */}
        <li>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-yellow-300 transition-all duration-300"
            activeClassName="text-yellow-500 font-semibold"
          >
            < InformationCircleIcon className="h-6 w-6 mr-2" />
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
