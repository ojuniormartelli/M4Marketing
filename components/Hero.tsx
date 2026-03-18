import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DRIVE_IDS, getDriveUrl } from '../constants.ts';

const Hero: React.FC = () => {
  const bgUrl = getDriveUrl(DRIVE_IDS.HERO_BG);

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a192f] text-white overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Container da Imagem de Fundo */}
      {bgUrl && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0a192f]">
          {/* Fundo base muito escuro */}
          <div className="absolute inset-0 bg-[#060d1a]"></div>
          
          {/* Imagem com Opacidade e Brilho Equilibrados */}
          {/* Estava em 40% (muito forte) e depois 10% (sumiu). Agora vamos para 25%. */}
          <img 
            src={bgUrl} 
            alt="Background" 
            className="relative w-full h-full object-contain z-0 opacity-25 md:opacity-20 transition-opacity duration-1000"
            style={{ filter: 'brightness(0.5) contrast(1.1) grayscale(0.2)' }}
          />
          
          {/* Overlay gradiente para garantir contraste do texto branco */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/90"></div>
          
          {/* Overlay radial central para suavizar a imagem atrás do texto */}
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(10,25,47,0.7)_100%)]"></div>
        </div>
      )}
      
      {!bgUrl && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-blue-900 to-secondary"></div>
      )}

      {/* Elementos Decorativos sutis */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-30 text-center fade-in-section">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-accent/20 border border-accent/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 text-accent backdrop-blur-md shadow-sm">
            Especialista em Negócios Locais
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            Transforme seu Negócio Local em <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Referência na Região</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Pare de gastar dinheiro com curtidas. Implemente estratégias de marketing digital validadas para atrair clientes reais e aumentar suas vendas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white text-xl font-bold py-5 px-12 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Quero Vender Mais
              <ArrowRight size={24} />
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xl font-semibold py-5 px-12 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
            >
              Conhecer Serviços
            </a>
          </div>

          {/* Contador de Resultados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-white/10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-accent text-3xl md:text-4xl font-black mb-1">R$ 20 Mil+</span>
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Gerenciados</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10 px-4">
              <span className="text-accent text-3xl md:text-4xl font-black mb-1">100 Mil+</span>
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Oportunidades Geradas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-accent text-3xl md:text-4xl font-black mb-1">98%</span>
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Satisfação</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[10px] md:text-xs text-blue-200 font-black uppercase tracking-[0.3em]">
            <div className="flex items-center gap-2 opacity-80">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Google Partner
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Meta Ads Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;