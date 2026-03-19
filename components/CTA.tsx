import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.ts';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20 fade-in-section">
          {/* Elementos Decorativos */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent opacity-10 -ml-32 -mt-32 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 opacity-10 -mr-32 -mb-32 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Comece a atrair clientes <span className="text-accent">hoje mesmo!</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 font-medium">
              Não deixe sua concorrência dominar o mercado local. Clique no botão abaixo e agende uma consultoria gratuita para transformarmos seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white text-xl font-black py-5 px-12 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Falar no WhatsApp
                <MessageCircle size={24} />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-bold py-5 px-12 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Preencher Formulário
                <ArrowRight size={20} />
              </a>
            </div>
            
            <p className="mt-8 text-blue-300 text-xs font-bold uppercase tracking-[0.2em]">
              ⚡ Resposta em menos de 15 minutos em horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
