import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 fade-in-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black sm:text-5xl font-heading mb-4">Investimento em <span className="text-accent">Gestão</span></h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Confira o valor de gestão de acordo com o seu investimento em anúncios:
          </p>
        </div>

        {/* Nota e Tabela de Referência */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-12">
            <div className="bg-primary/20 p-6 border-b border-white/10">
              <h4 className="text-xl font-black text-center uppercase tracking-widest">Tabela de Referência: Gestão vs Investimento</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { inv: 'R$ 600 – R$ 799', fee: 'R$ 600' },
                { inv: 'R$ 800 – R$ 999', fee: 'R$ 800' },
                { inv: 'R$ 1.000 – R$ 1.999', fee: 'R$ 1.000' },
                { inv: 'R$ 2.000 – R$ 3.999', fee: 'R$ 1.200' },
                { inv: 'R$ 4.000 – R$ 9.999', fee: 'R$ 1.500' },
                { inv: 'Acima de R$ 10.000', fee: '15% do investimento' },
              ].map((row, i) => (
                <div key={i} className="p-6 border-b md:border-r border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                  <span className="text-gray-400 text-xs font-bold uppercase mb-2">Investimento</span>
                  <span className="text-white font-bold mb-3">{row.inv}</span>
                  <div className="w-8 h-px bg-accent/30 mb-3"></div>
                  <span className="text-gray-400 text-xs font-bold uppercase mb-2">Taxa de Gestão</span>
                  <span className="text-accent font-black">{row.fee}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-400 text-sm text-center italic">
            * Os valores de gestão são cobrados por plataforma (Google Ads ou Meta Ads). Exemplo: para gerenciar ambas as plataformas, o valor é duplicado.
          </p>
        </div>
      </div>
    </section>
  );
};
