import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 left-0 h-screen w-72 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Hamburger Button*/}
        <div className="absolute top-1 right-1">
          <label 
            className="w-10 h-8 block cursor-pointer transition-all duration-300 transform scale-55"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <input 
              type="checkbox" 
              className="hidden" 
              checked={isOpen}
              readOnly
            />
            <div className="relative w-full h-full flex flex-col justify-center gap-2">
              <div className={`h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[11px]' : ''
              }`} />
              <div className={`h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <div className={`h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[11px]' : ''
              }`} />
            </div>
          </label>
        </div>

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 pt-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              That Sky Mod
            </h2>
          </div>

          {/* Navigation */}
          <nav className="px-2">
            <Link 
              to="/" 
              className="block relative group py-3 px-4 mb-2"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-lg" />
              <div className="relative flex items-center">
                <span className="text-xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                  Home
                </span>
                <div className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 -bottom-1 opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
            
            <Link 
              to="/creations" 
              className="block relative group py-3 px-4"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-lg" />
              <div className="relative flex items-center">
                <span className="text-xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                  Community Creations
                </span>
                <div className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 -bottom-1 opacity-0 group-hover:opacity-100" />
              </div>
            </Link>

            <Link 
              to="/faq" 
              className="block relative group py-3 px-4"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-lg" />
              <div className="relative flex items-center">
                <span className="text-xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                  FAQ
                </span>
                <div className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 -bottom-1 opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          </nav>

          {/* Footer */}
          <div className="mt-auto p-6">
            <p className="text-sm text-gray-400 text-center">
              Made with 💗 by XeTrinityz
            </p>
          </div>
        </div>
      </div>

      {/* Closed Menu Button */}
      {!isOpen && (
        <label 
          className="fixed top-6 left-6 w-10 h-8 block cursor-pointer z-[60] transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <input 
            type="checkbox" 
            className="hidden" 
            checked={isOpen}
            readOnly
          />
          <div className="relative w-full h-full flex flex-col justify-center gap-2">
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
          </div>
        </label>
      )}
    </>
  );
};

export default HamburgerMenu;