import React, { useState } from 'react';
import { DRIVE_IDS, getDriveUrl } from '../constants.ts';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(!DRIVE_IDS.LOGO || DRIVE_IDS.LOGO.includes('SEU_ID'));

  return (
    <footer className="bg-secondary text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-10">
          {!imgError ? (
            <div className="h-10 md:h-14 flex items-center justify-center">
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
              <div className="text-white font-bold text-lg leading-tight text-left">
                MARKETING<br/><span className="text-accent text-xs tracking-[0.2em] uppercase">Digital</span>
              </div>
            </div>
          )}
        </div>
        <p className="mb-6 max-w-md mx-auto text-sm leading-relaxed text-gray-500">
          Estratégias digitais personalizadas para fazer seu negócio local crescer com solidez e previsibilidade através de tráfego pago e SEO local.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={16} className="text-accent" />
            <span className="text-sm font-medium">Itapira, São Paulo - BR</span>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com/ojuniormartelli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-12 text-xs font-black flex-wrap uppercase tracking-[0.2em] text-gray-300">
          <a href="#home" className="hover:text-accent transition-colors">Início</a>
          <a href="#services" className="hover:text-accent transition-colors">Serviços</a>
          <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
        </div>
        <div className="w-12 h-1 bg-primary/30 mx-auto mb-10 rounded-full"></div>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} M4 Marketing Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;