import React from 'react';
import { Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones, Search } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Foco em Geração de Contatos',
    description: 'Nossa gestão é orientada para que você receba mensagens de quem realmente demonstra interesse no seu serviço. Priorizamos contatos reais em vez de métricas de curtidas.',
    iconName: 'Target'
  },
  {
    title: 'Anúncios Geocalizados',
    description: 'Sua empresa aparece apenas para quem está no seu raio de atendimento. Otimizamos sua verba concentrando os anúncios onde o seu negócio realmente atua.',
    iconName: 'Globe'
  },
  {
    title: 'Visibilidade na Hora da Busca',
    description: 'Trabalhamos para que sua empresa seja encontrada no Google no momento exato em que o cliente procura pela solução que você oferece.',
    iconName: 'Search'
  },
  {
    title: 'Acompanhamento Frequente',
    description: 'O tráfego pago exige atenção constante. Monitoramos suas campanhas regularmente para buscar o melhor custo por contato e manter a qualidade dos anúncios.',
    iconName: 'BarChart'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones, Search
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Vantagens</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-primary">
            Presença digital para conectar sua empresa ao cliente local
          </h3>
          <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
            Enquanto você cuida da operação do seu negócio, a M4 cuida da inteligência dos anúncios para atrair pessoas com mais intenção de contratar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div key={index} className="group p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-black text-primary mb-4 leading-tight">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};