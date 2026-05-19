import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Meu negócio é pequeno. Ainda assim vale anunciar?",
    answer: "Sim. O Google e o Meta permitem que você controle exatamente quanto quer gastar por dia. Para negócios locais, muitas vezes um orçamento pequeno bem direcionado para o seu bairro ou cidade traz mais resultado do que grandes verbas mal gerênciadas."
  },
  {
    question: "E se eu já tiver impulsionado posts e não funcionou?",
    answer: "O botão 'impulsionar' é desenhado para gerar curtidas, não necessariamente orçamentos. Nós trabalhamos com o Gerenciador de Anúncios profissional, usando estratégias de busca e conversão que são muito mais precisas e focadas em vendas."
  },
  {
    question: "Quanto preciso investir para começar?",
    answer: "Trabalhamos com faixas que começam em R$ 600 de investimento em mídia por mês. O valor ideal depende da sua meta de crescimento e da concorrência na sua região, algo que avaliamos no nosso diagnóstico estratégico inicial."
  },
  {
    question: "Funciona para minha cidade? É pequena.",
    answer: "Cidades menores costumam ter uma concorrência menor no digital. Isso significa que, com um investimento estratégico, sua empresa ganha mais visibilidade no Google e nas redes sociais da sua região."
  },
  {
    question: "Preciso ter uma equipe ou estrutura pronta?",
    answer: "Não. Você só precisa de alguém para atender os contatos que chegarem no WhatsApp. Todo o processo de criação de anúncios, configuração técnica e otimização das campanhas fica por nossa conta."
  },
  {
    question: "Em quanto tempo começo a ver resultados?",
    answer: "As campanhas costumam estar ativas em até 48h após a configuração técnica. O objetivo é estabelecer o fluxo de contatos de forma gradual e sustentável, focando em quem já busca pela sua solução."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <HelpCircle size={18} className="text-accent" />
            Transparência
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter mb-6">
            Dúvidas frequentes de <br className="hidden md:block" />
            empresários locais
          </h3>
          <p className="text-gray-600 text-lg font-medium">
            Entendemos os receios de quem está começando a anunciar agora. Aqui estão as respostas para os principais questionamentos.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-accent/30 fade-in-section"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-lg md:text-xl font-black text-primary group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-accent text-white' : ''}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out px-8 overflow-hidden ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
              >
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
