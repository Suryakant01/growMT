'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#page" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
      >
        Skip to Content
      </a>

      <header className="w-full h-48 bg-white border-b flex items-center shadow-sm border-x-[40px] border-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo placeholder - replace with actual logo */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                  <Image
                    src="/stressblacksvg.svg"
                    alt="Serena Blake Logo"
                    width={40}
                    height={40}
                    className="text-gray-700"
                    priority
                  />
                </div>
                
                {/* Title */}
                <div className="flex flex-col">
                  <h1 className="text-lg lg:text-xl  text-gray-800 leading-tight font-serif">
                    Serena Blake, Ph.D.
                  </h1>
                  <p className="text-sm lg:text-base text-gray-600 leading-tight">
                    Psychological Services
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Add your navigation items here */}
              {/* Example:
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <div className={`w-5 h-px bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}></div>
                <div className={`w-5 h-px bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-5 h-px bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-200`}>
          <nav className="px-4 py-4 space-y-4">
            {/* Add your mobile navigation items here */}
            {/* Example:
            <Link 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;