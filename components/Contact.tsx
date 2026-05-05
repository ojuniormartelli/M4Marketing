import React from 'react';
import { MessageCircle, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-white shadow-2xl relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="fade-in-section">
              <span className="text-accent font-black tracking-widest uppercase text-sm mb-6 block">Próximo Passo</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-8">
                Pronto para atrair mais clientes para o seu negócio local?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 opacity-90">
                Se você quer parar de depender só de indicação e começar a ter um fluxo constante de contatos pelo Google e pelas redes, o próximo passo é simples. Vamos fazer uma conversa rápida para entender seu negócio, ver se a M4 é a parceira certa e qual é o melhor plano para começar.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Atendimento direto com especialista" },
                  { icon: Zap, text: "Foco 100% em ROI e faturamento" },
                  { icon: Clock, text: "Sem contratos abusivos ou burocracia" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-blue-100/80">
                    <item.icon size={20} className="text-accent" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end fade-in-section">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] w-full max-w-md text-center">
                <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-accent/20">
                  <MessageCircle size={40} />
                </div>
                
                <h4 className="text-2xl font-black mb-6">Inicie sua consultoria gratuita agora</h4>
                
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent hover:bg-accentHover text-white text-xl font-black py-6 px-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 block mb-4 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Falar com o especialista agora
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <p className="text-blue-200/60 text-sm font-medium">
                  Atendimento direto pelo WhatsApp, em horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;