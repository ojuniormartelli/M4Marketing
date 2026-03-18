import React from 'react';
import { DRIVE_IDS, getDriveUrl } from '../constants.ts';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = (DRIVE_IDS.LOGO && !DRIVE_IDS.LOGO.includes('SEU_ID')) 
    ? getDriveUrl(DRIVE_IDS.LOGO) 
    : null;

  return (
    <footer className="bg-secondary text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-10">
          {logoUrl ? (
            <div className="h-16 flex items-center justify-center">
              <img
                src={logoUrl}
                alt="M4 Marketing Digital"
                className="h-full w-auto opacity-70 grayscale hover:grayscale-0 transition-all object-contain duration-500 brightness-0 invert"
              />
            </div>
          ) : (
            <div className="text-2xl font-black text-white italic tracking-tighter">M4 DIGITAL</div>
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