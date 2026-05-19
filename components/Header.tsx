import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, WHATSAPP_LINK, DRIVE_IDS, getDriveUrl } from '../constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(!DRIVE_IDS.LOGO || DRIVE_IDS.LOGO.includes('SEU_ID'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center group decoration-none">
          {!imgError ? (
            <div className="h-10 md:h-14 flex items-center">
              <img
                src={getDriveUrl(DRIVE_IDS.LOGO)}
                alt="M4 Marketing Digital"
                className="h-full w-auto object-contain object-left max-w-[200px] md:max-w-[280px]"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white font-black px-2 py-1 rounded italic text-2xl">M4</div>
              <div className="hidden sm:block text-primary font-bold text-lg leading-tight">
                MARKETING<br/><span className="text-accent text-xs tracking-[0.2em] uppercase">Digital</span>
              </div>
            </div>
          )}
        </a>

        <nav className="hidden md:flex items-center space-x-12">
          <a 
            href="#pricing"
            className="font-bold text-sm uppercase tracking-widest text-gray-700 hover:text-accent transition-colors"
          >
            Investimento
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accentHover text-white font-black py-3 px-8 rounded-full shadow-lg shadow-accent/25 transition-all transform hover:-translate-y-1"
          >
            Diagnóstico Estratégico
          </a>
        </nav>

        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col py-6">
            <a 
              href="#pricing"
              className="px-8 py-4 text-gray-800 font-bold uppercase tracking-widest text-sm hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Investimento
            </a>
            <div className="px-8 pt-4">
               <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-accent text-white font-black py-4 rounded-xl shadow-lg"
              >
                Diagnóstico Estratégico
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;