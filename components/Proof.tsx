import React from 'react';
import { Award, BarChart3, MessageSquare, ShieldCheck } from 'lucide-react';

const stats = [
  {
    label: "4+ Anos de Experiência",
    description: "Focados exclusivamente em gerar resultados para quem tem porta aberta e conta com clientes da região.",
    icon: Award
  },
  {
    label: "R$ 20 Mil+ em Verba Gerenciada",
    description: "Investidos com inteligência em campanhas de Google e Meta Ads para maximizar cada centavo do seu orçamento.",
    icon: BarChart3
  },
  {
    label: "100 Mil+ Leads e Contatos",
    description: "Qualificados via WhatsApp e telefone, que se transformaram em orçamentos, visitas e vendas reais para nossos parceiros.",
    icon: MessageSquare
  },
  {
    label: "Atendimento Exclusivo",
    description: "Trabalhamos com um número limitado de clientes para garantir que sua conta tenha atenção máxima e acompanhamento de perto.",
    icon: ShieldCheck
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Elementos de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Credibilidade</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-6">
            Por que negócios locais confiam na M4 Marketing Digital
          </h3>
          <p className="text-blue-100 text-lg md:text-xl font-medium opacity-90">
            Já ajudamos dezenas de empresários a transformar investimento em anúncios em faturamento real, com estratégias validadas e transparência total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <stat.icon size={28} />
              </div>
              <h4 className="text-2xl font-black mb-3 text-white tracking-tight leading-tight">
                {stat.label}
              </h4>
              <p className="text-blue-200 text-base leading-relaxed opacity-80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-section">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 mb-6">
            <div className="bg-primary px-8 py-4 rounded-full border border-white/10">
              <p className="text-lg md:text-xl font-bold italic text-blue-50">
                "A M4 é para o empresário local que quer resultado claro e acompanhamento de perto, não promessas bonitas no papel."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
