import React from 'react';
import { Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Relatórios Semanais',
    description: 'Transparência total com dados claros sobre o desempenho das suas campanhas toda semana.',
    iconName: 'BarChart'
  },
  {
    title: 'Atendimento via WhatsApp',
    description: 'Suporte direto e rápido. Estamos a uma mensagem de distância para tirar suas dúvidas.',
    iconName: 'Smartphone'
  },
  {
    title: 'Estratégia Personalizada',
    description: 'Não acreditamos em fórmulas prontas. Criamos estratégias específicas para o seu segmento.',
    iconName: 'Target'
  },
  {
    title: 'Foco em Negócios Locais',
    description: 'Especialistas em atrair clientes que estão fisicamente perto da sua empresa.',
    iconName: 'Globe'
  },
  {
    title: 'Otimização Contínua',
    description: 'Melhoramos seus anúncios diariamente para garantir o melhor custo por clique possível.',
    iconName: 'Zap'
  },
  {
    title: 'Suporte Dedicado',
    description: 'Você tem um consultor dedicado que conhece o seu negócio e está sempre disponível para orientar as decisões.',
    iconName: 'Headphones'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Recursos</h2>
          <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que você precisa para crescer
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tudo o que você precisa para atrair mais clientes para o seu negócio local todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div key={index} className="flex flex-col p-8 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-transparent hover:border-indigo-100 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
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