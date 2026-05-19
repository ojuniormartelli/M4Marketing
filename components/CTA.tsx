import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.ts';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 border-y border-white/5 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center fade-in-section">
        <div className="bg-gradient-to-br from-white/10 to-white/5 p-12 md:p-20 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
            Vale analisar se sua empresa já tem <br className="hidden md:block" />
            <span className="text-accent">cenário para crescer com anúncios?</span>
          </h2>
          
          <p className="text-blue-100/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Nossa primeira conversa serve para entendermos sua operação e sermos honestos sobre o potencial de resultado. Sem pressão comercial, apenas análise estratégica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white text-xl font-black py-6 px-14 rounded-full shadow-2xl shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Iniciar Diagnóstico Estratégico
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200/40 font-bold uppercase tracking-widest text-xs">
            <span className="flex items-center gap-2">✓ Sem fidelidade obrigatória</span>
            <span className="flex items-center gap-2">✓ Transparência total</span>
            <span className="flex items-center gap-2">✓ Foco em retorno e eficiência</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
