import React, { useState } from 'react';
import { WHATSAPP_LINK, DRIVE_IDS, getDriveUrl } from '../constants.ts';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(!DRIVE_IDS.ABOUT_IMAGE || DRIVE_IDS.ABOUT_IMAGE.includes('SEU_ID'));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 fade-in-section">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Background Decorativo */}
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-2 scale-105"></div>
            
            {/* Moldura da Imagem - Ajustada para exibir tudo */}
            <div className="relative rounded-[1.5rem] shadow-2xl w-full max-w-md bg-gray-50 flex items-center justify-center overflow-hidden border-8 border-white z-10 p-2 min-h-[400px]">
              {!imgError ? (
                <img 
                  src={getDriveUrl(DRIVE_IDS.ABOUT_IMAGE)} 
                  alt="M4 Digital Consultoria" 
                  className="max-w-full max-h-full w-auto h-auto object-contain z-20 hover:scale-[1.02] transition-transform duration-500 rounded-lg"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-center p-6 text-gray-400">
                  <div className="bg-gray-200 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-black">M4</span>
                  </div>
                  <p className="font-bold uppercase tracking-tighter text-sm">Imagem não configurada</p>
                </div>
              )}
            </div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-2xl shadow-xl z-30 hidden md:block border border-gray-100">
              <p className="text-primary font-black text-3xl">4+</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Anos de Experiência</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Especialista</span>
            <h2 className="font-heading text-4xl font-black text-gray-900 mb-6">Especialista em Negócios Locais de Itapira e Região.</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A M4 Marketing Digital é focada em resultados concretos para empresas que querem dominar sua região. 
              Somos especialistas em <span className="text-primary font-bold">Google Ads, Meta Ads e SEO Local</span>, 
              colocando seu negócio no mapa literal e digital para atrair quem realmente quer comprar.
            </p>
            <ul className="space-y-4 mb-10">
              {["Consultoria focada em ROI", "Relatórios fáceis de entender", "Suporte rápido via WhatsApp", "Estratégias para sua cidade"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-bold">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto">Falar com Consultor</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;