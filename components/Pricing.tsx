import React from 'react';
import { CircleDollarSign, Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  const tiers = [
    { inv: 'R$ 600 – R$ 799', fee: 'R$ 600' },
    { inv: 'R$ 800 – R$ 999', fee: 'R$ 800' },
    { inv: 'R$ 1.000 – R$ 1.999', fee: 'R$ 1.000' },
    { inv: 'R$ 2.000 – R$ 3.999', fee: 'R$ 1.200' },
    { inv: 'R$ 4.000 – R$ 9.999', fee: 'R$ 1.500' },
    { inv: 'Acima de R$ 10.000', fee: '15% do investimento' },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 fade-in-section">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Investimento Transparente</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tighter mb-6">
            Estrutura de custos simples
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Transparência é a base da nossa parceria. O seu investimento mensal divide-se em duas partes: a verba que você paga diretamente às plataformas (Google/Meta) e a taxa de serviço da M4 pela gestão estratégica.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-primary p-8 text-white flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <CircleDollarSign size={24} className="text-accent" />
                <h4 className="text-xl font-bold tracking-tight">
                  Tabela de Referência Mensal
                </h4>
              </div>
              <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest text-center mt-2">
                Valores de mídia (Google/Meta) + Taxa de Trabalho da M4
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier, i) => (
                <div 
                  key={i} 
                  className="p-10 border-b border-gray-200 md:border-r last:border-r-0 flex flex-col items-center text-center hover:bg-white transition-colors duration-300"
                >
                  <div className="mb-6">
                    <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                      Verba para Google/Meta
                    </span>
                    <span className="text-gray-900 text-xl font-black">
                      {tier.inv}
                    </span>
                  </div>
                  
                  <div className="w-12 h-1 bg-accent/20 rounded-full mb-6"></div>
                  
                  <div>
                    <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                      Taxa de Gestão M4
                    </span>
                    <span className="text-primary text-2xl font-black">
                      {tier.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-start gap-3 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 max-w-3xl mx-auto">
            <Info size={20} className="text-primary mt-1 flex-shrink-0" />
            <p className="text-gray-500 text-sm md:text-base italic leading-relaxed">
              Estes valores servem como referência inicial. Em casos específicos, podemos ajustar o plano conforme a estrutura do seu negócio, região atendida e objetivos das campanhas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
