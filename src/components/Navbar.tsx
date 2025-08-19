'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-xl font-semibold">Blessing & Uyi</span>
        <div className="hidden md:flex space-x-6">
          <a href="#our-story" onClick={e => { e.preventDefault(); document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' }); }}>Our Story</a>
          <a href="#wedding-day" onClick={e => { e.preventDefault(); document.getElementById('wedding-day')?.scrollIntoView({ behavior: 'smooth' }); }}>Schedule</a>
          <a href="#registry" onClick={e => { e.preventDefault(); document.getElementById('registry')?.scrollIntoView({ behavior: 'smooth' }); }}>Registry</a>
          <a href="#rsvp" onClick={e => { e.preventDefault(); document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' }); }}>RSVP</a>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <a
          href="#our-story"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={e => {
            e.preventDefault();
            document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          Our Story
        </a>
        <a
          href="#wedding-day"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={e => {
            e.preventDefault();
            document.getElementById('wedding-day')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          Schedule
        </a>
        <a
          href="#registry"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={e => {
            e.preventDefault();
            document.getElementById('registry')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          Registry
        </a>
        <a
          href="#rsvp"
          className="block px-4 py-2 hover:bg-gray-700"
          onClick={e => {
            e.preventDefault();
            document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          RSVP
        </a>
        </div>
      )}
    </nav>
  );
}
