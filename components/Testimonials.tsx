import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types.ts';

const testimonials: TestimonialItem[] = [
  { 
    name: "William", 
    company: "Oficina Mecânica em Itapira", 
    text: "Desde que começamos com a M4, o telefone não para de tocar. O que mais gostamos é que os contatos são pessoas realmente interessadas no serviço, o que facilita muito o fechamento aqui na oficina.", 
    image: "https://ui-avatars.com/api/?name=William&background=FFD700&color=000" 
  },
  { 
    name: "Ana", 
    company: "Espaço de Estética Local", 
    text: "Eu já tinha tentado fazer anúncios sozinha, mas só gastava dinheiro. Com a gestão da M4, minha agenda está sempre lotada e o melhor: com clientes aqui da minha região.", 
    image: "https://ui-avatars.com/api/?name=Ana&background=FFD700&color=000" 
  },
  { 
    name: "Mauricio", 
    company: "Distribuidor de Gás", 
    text: "O relatório que eles mandam é muito claro. Consigo ver exatamente quanto investi e quantos orçamentos chegaram no meu WhatsApp. Parceria que trouxe resultado real para a loja.", 
    image: "https://ui-avatars.com/api/?name=Mauricio&background=FFD700&color=000" 
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 fade-in-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Empresas Reais</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tighter">
            Relatos de empresários locais atendidos
          </h3>
          <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed">
            Estes são relatos reais de empresários locais que decidiram profissionalizar sua presença digital e hoje mantêm uma presença digital mais estruturada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 relative hover:shadow-xl transition-all duration-300">
              <Quote className="text-accent/20 absolute top-8 right-8" size={60} />
              
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-md" 
                />
                <div>
                  <h4 className="font-black text-primary text-lg leading-tight">{item.name}</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;