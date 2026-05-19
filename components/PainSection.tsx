import React from 'react';
import { AlertCircle, TrendingDown, Users, Search, Target } from 'lucide-react';

const PainSection: React.FC = () => {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Concentração de mercado nos grandes",
      description: "As pessoas não pararam de precisar do seu serviço, elas apenas estão encontrando outras opções primeiro. Se você não aparece no momento da busca, sua empresa torna-se gradualmente invisível."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Visibilidade da concorrência",
      description: "Muitas vezes o seu concorrente não tem o melhor serviço, mas ele está presente onde o cliente está olhando. Isso cria uma vantagem que afeta diretamente o seu faturamento mensal."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Instabilidade em indicações",
      description: "O 'boca a boca' é excelente, mas é imprevisível. O tráfego pago traz controle: você passa a saber exatamente quanto precisa investir para atrair um novo interessado."
    },
    {
      icon: <Search className="w-8 h-8 text-purple-500" />,
      title: "Ausência na jornada de decisão",
      description: "O cliente moderno pesquisa no Google antes de sair de casa ou fechar um pedido. Se sua empresa não está lá no momento da dúvida, a venda acontece com outra pessoa."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <AlertCircle size={18} className="text-red-500" />
            Diagnóstico de Mercado
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter mb-6">
            Sinais de que sua empresa está <span className="text-red-600">perdendo espaço</span> na sua cidade
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Entender o comportamento do seu cliente local é o primeiro passo para retomar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group fade-in-section"
            >
              <div className="mb-6 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-black text-primary mb-4 leading-tight">
                {point.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <p className="text-gray-500 font-medium mb-8">
            Identificou sua empresa em algum desses pontos? <br className="hidden md:block" /> 
            Isso é o sinal de que sua estratégia atual chegou ao limite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
