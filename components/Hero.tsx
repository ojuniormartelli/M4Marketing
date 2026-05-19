import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants.ts';

const Hero: React.FC = () => {
  const bgUrl = ASSETS.HERO_BG;

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
            onError={(e) => (e.currentTarget.style.display = 'none')}
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

      <div className="max-w-6xl mx-auto px-6 relative z-30 text-center fade-in-section">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white border border-accent/30 px-4 py-1.5 rounded-full text-lg font-bold mb-6 text-accent backdrop-blur-md shadow-sm">
            Estratégias de anúncios para conectar sua empresa ao cliente local.
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] text-balance">
            Seja encontrado por quem já está <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">buscando pelo seu serviço.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Gerenciamos seus anúncios no Google e Meta Ads com o objetivo de aproximar sua empresa de pessoas da sua região que já buscam pelo seu serviço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white text-xl font-black py-6 px-14 rounded-full shadow-xl shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
            >
              Diagnóstico Estratégico Gratuito
              <ArrowRight size={24} />
            </a>
            <a 
              href="#methodology"
              className="text-white/70 hover:text-white font-bold text-lg border-b border-white/20 hover:border-white transition-all pb-1"
            >
              Como funciona nossa estratégia
            </a>
          </div>

          <p className="text-blue-200/60 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-16">
            Gestão estratégica de anúncios • Foco em geração de contatos
          </p>

          {/* Indicadores de Confiança */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-white/10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-accent text-lg md:text-xl font-black mb-1 uppercase tracking-tighter">Investimento Estratégico</span>
              <span className="text-blue-200/60 text-[10px] font-bold uppercase tracking-[0.2em]">Foco em Contatos</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10 px-4">
              <span className="text-accent text-lg md:text-xl font-black mb-1 uppercase tracking-tighter">Suporte Direto</span>
              <span className="text-blue-200/60 text-[10px] font-bold uppercase tracking-[0.2em]">Sem intermediários</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-accent text-lg md:text-xl font-black mb-1 uppercase tracking-tighter">Relatórios Claros</span>
              <span className="text-blue-200/60 text-[10px] font-bold uppercase tracking-[0.2em]">Desempenho Comercial</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[10px] md:text-xs text-blue-200 font-black uppercase tracking-[0.3em]">
            <div className="flex items-center gap-2 opacity-80">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Google Partner
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Gestão Especializada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;