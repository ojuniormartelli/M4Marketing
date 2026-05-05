import React from 'react';
import { Search, Settings, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.ts';

const steps = [
  {
    number: "01",
    title: 'Diagnóstico e Estratégia Local',
    description: 'Analisamos sua oferta, quem são seus concorrentes diretos e como as pessoas buscam pelo seu serviço na sua cidade ou bairro. A partir disso, criamos o plano de ataque ideal para o seu orçamento.',
    icon: Search,
    color: 'bg-blue-500'
  },
  {
    number: "02",
    title: 'Configuração e Ativação',
    description: 'Colocamos a mão na massa na parte técnica. Montamos seus anúncios no Google e na Meta Ads com foco total em converter o clique em mensagem no WhatsApp ou em uma ligação para sua empresa.',
    icon: Settings,
    color: 'bg-accent'
  },
  {
    number: "03",
    title: 'Gestão e Otimização Diária',
    description: 'Anúncio bom é anúncio acompanhado. Monitoramos suas campanhas diariamente, ajustando públicos, palavras-chave e verbas para garantir que você não jogue dinheiro fora e atraia apenas leads qualificados.',
    icon: TrendingUp,
    color: 'bg-indigo-500'
  },
  {
    number: "04",
    title: 'Relatórios e Ajustes Estratégicos',
    description: 'Apresentamos o que realmente importa: quantos contatos chegaram e qual foi o custo por oportunidade. Com base nisso, definimos juntos os próximos passos para escalar seus resultados conforme o seu negócio cresce.',
    icon: BarChart3,
    color: 'bg-green-500'
  }
];

const Services: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Metodologia</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tighter mb-6">
            Como vamos fazer sua empresa vender mais
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Um processo simples e direto, desenhado para o empresário local que não quer complicação técnica, apenas contatos reais no balcão e no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-accent font-black text-xl opacity-40">{step.number}</span>
                  <h4 className="text-2xl font-black text-primary tracking-tight leading-tight">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decoração sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-10 leading-relaxed italic opacity-90">
              "Se fizer sentido para você, o próximo passo é uma conversa rápida para entender seu negócio e ver se a M4 é a parceira certa."
            </h4>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accentHover text-white text-xl font-black py-6 px-12 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 gap-3 group"
            >
              Falar com o Especialista Agora
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

