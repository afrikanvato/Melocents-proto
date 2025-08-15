
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, PerfumeBottleIcon } from './icons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#scents', label: 'Scents' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = '27720438809';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2">
          <PerfumeBottleIcon className="h-8 w-8 text-brand-gold" />
          <span className="text-2xl font-serif font-bold text-white tracking-wider">
            MELOCENTS
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-brand-gold transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-dark font-bold py-2 px-5 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Order Now
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-xl text-gray-300 hover:text-brand-gold transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
