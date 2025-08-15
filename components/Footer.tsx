
import React from 'react';
import { PerfumeBottleIcon } from './icons';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex flex-col items-center mb-8">
            <a href="#home" className="flex items-center gap-2 mb-4">
                <PerfumeBottleIcon className="h-8 w-8 text-brand-gold" />
                <span className="text-2xl font-serif font-bold text-white tracking-wider">
                    MELOCENTS
                </span>
            </a>
            <p className="font-serif text-lg text-gray-300">Smell Like Your Worth</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
            <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 2.8 5.5 0 3.1-2.2 5.4-5 5.4a.6.6 0 0 1-.6-.6V12c0-2 2-3.5 4.5-3.8A5.4 5.4 0 0 1 22 4Z"/><path d="M15.6 9.4c-1 .6-2.2 1-3.6 1-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6 1.4 0 2.6.5 3.6 1.3"/><path d="M2 22s.7-2.1 2-3.4c-1.6-1.4-2.8-3.2-2.8-5.5 0-3.1 2.2-5.4 5-5.4a.6.6 0 0 0 .6.6V12c0 2-2 3.5-4.5 3.8A5.4 5.4 0 0 0 2 22Z"/></svg>
            </SocialIcon>
        </div>

        <div className="border-t border-gray-800 pt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Melocents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
