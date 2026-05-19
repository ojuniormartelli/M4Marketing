import React from 'react';
import { Search, Target, BarChart3, Users } from 'lucide-react';

const stats = [
  {
    label: "Google & Meta Ads",
    description: "Configurações avançadas de pixel e conversões para garantir que cada centavo seja rastreado e otimizado.",
    icon: Search
  },
  {
    label: "Foco em Negócio Local",
    description: "Abordagem especializada para quem atende por raio de distância, bairro ou cidade específica.",
    icon: Target
  },
  {
    label: "Sem 'Marketês'",
    description: "Você recebe relatórios que mostram o que importa: quantas pessoas chamaram e quanto custou cada contato.",
    icon: BarChart3
  },
  {
    label: "Parceria Direta",
    description: "Você fala direto com quem gerencia sua conta. Sem atendentes que não entendem de tráfego.",
    icon: Users
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Elementos de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Nossa Postura de Trabalho</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-6">
            O que você pode esperar da nossa parceria
          </h3>
          <p className="text-blue-100/80 text-lg md:text-xl font-medium leading-relaxed">
            Atuamos como um parceiro estratégico na aquisição de clientes. Oferecemos transparência total na gestão da sua verba e foco em converter cliques em oportunidades de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:rotate-12 transition-transform duration-300">
                <stat.icon size={32} />
              </div>
              <h4 className="text-xl font-black mb-4 text-white tracking-tight leading-tight">
                {stat.label}
              </h4>
              <p className="text-blue-100/60 text-base leading-relaxed font-medium">
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
