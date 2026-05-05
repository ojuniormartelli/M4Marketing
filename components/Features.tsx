import React from 'react';
import { Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Anúncios para quem quer comprar',
    description: 'Chega de aparecer para curiosos. Configuramos suas campanhas no Google e na Meta para alcançar pessoas que já estão buscando pelo seu serviço ou produto na sua região agora mesmo.',
    iconName: 'Target'
  },
  {
    title: 'Relatórios sem "marketês"',
    description: 'Nada de termos técnicos que você não entende. Você acompanha o desempenho através de dados claros: quantos orçamentos chegaram e qual o seu retorno real.',
    iconName: 'BarChart'
  },
  {
    title: 'Suas campanhas nunca param',
    description: 'O mercado digital muda rápido. Fazemos otimizações frequentes para garantir que seu investimento esteja sempre gerando o máximo de contatos pelo menor custo.',
    iconName: 'Zap'
  },
  {
    title: 'Parceria direta e estratégica',
    description: 'Você não fala com robôs ou estagiários. Aqui você tem contato direto com quem planeja e executa suas campanhas, garantindo agilidade e foco no seu resultado.',
    iconName: 'Headphones'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Zap, Shield, Smartphone, Globe, BarChart, Layers, Target, Headphones
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Vantagens</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-primary">
            Tudo o que você precisa para atrair clientes todos os dias
          </h3>
          <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
            Enquanto você cuida da operação do seu negócio, a M4 cuida da inteligência dos anúncios para trazer orçamentos qualificados.
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