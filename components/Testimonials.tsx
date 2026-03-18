import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types.ts';

const testimonials: TestimonialItem[] = [
  { name: "Willian", company: "Oficina Mecânica", text: "Minha oficina nunca esteve tão cheia. O trabalho no Google funcionou!", image: "https://ui-avatars.com/api/?name=Willian&background=0D8ABC&color=fff" },
  { name: "Tato", company: "Loja de Piscinas", text: "O tráfego pago ajudou demais na venda de acessórios. Excelente!", image: "https://ui-avatars.com/api/?name=Tato&background=0D8ABC&color=fff" },
  { name: "Ronan", company: "Farmácia", text: "Estamos aparecendo para todo o bairro. Muita gente nos acha no Google.", image: "https://ui-avatars.com/api/?name=Ronan&background=0D8ABC&color=fff" },
  { name: "Ricardo", company: "Construtora Itapira", text: "Os anúncios pagos trouxeram leads extremamente qualificados. O ROI foi imediato e superou nossas expectativas!", image: "https://ui-avatars.com/api/?name=Ricardo&background=0D8ABC&color=fff" }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-8 fade-in-section">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">O que nossos parceiros dizem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white/10 text-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-200 mb-6 italic min-h-[80px]">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-accent" />
                <div>
                  <h4 className="font-bold text-white leading-tight">{item.name}</h4>
                  <p className="text-sm text-gray-400 font-semibold">{item.company}</p>
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