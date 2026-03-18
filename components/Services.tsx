import React, { useState } from 'react';
import { MapPin, BarChart3, Smartphone, TrendingUp, Search, Target, X, PenTool } from 'lucide-react';
import { ServiceItem } from '../types.ts';
import { WHATSAPP_LINK } from '../constants.ts';

const services = [
  {
    title: 'Google Meu Negócio',
    description: 'Otimizamos seu perfil no Google Business Profile para aparecer no topo das buscas locais de forma orgânica, sem pagar por anúncios.',
    detailedDescription: 'O Google Meu Negócio (agora chamado Google Business Profile) é o perfil gratuito que aparece nas buscas do Google e no Maps quando alguém procura por uma empresa na sua cidade. Ter um perfil bem otimizado é essencial para aparecer antes da concorrência sem precisar pagar por anúncios. Na M4, fazemos a otimização completa do seu perfil: preenchemos todas as informações da empresa (endereço, horários, telefone, site, categoria e descrição), adicionamos palavras-chave estratégicas e garantimos que os dados estejam sempre corretos e atualizados. Nosso foco é posicionamento orgânico — colocar seu negócio no top das buscas locais. Não fazemos gerenciamento de fotos nem respondemos avaliações; entregamos a base sólida e otimizada para que o Google entenda exatamente o que você oferece e para quem.',
    icon: MapPin,
    color: 'bg-blue-500'
  },
  {
    title: 'Anúncios (Google & Meta)',
    description: 'Campanhas diretas ao ponto. Colocamos seu anúncio na frente de quem já quer comprar de você.',
    detailedDescription: 'Nossas campanhas de tráfego pago são desenhadas para trazer retorno rápido. No Google Ads, capturamos a demanda de quem já está procurando pelo que você oferece. No Meta Ads (Instagram e Facebook), criamos desejo e alcançamos seu público-alvo ideal com criativos de alta conversão. Foco total em gerar leads qualificados para o seu WhatsApp.',
    icon: Target,
    color: 'bg-red-500'
  },
  {
    title: 'Sites & Landing Pages',
    description: 'Desenvolvimento de páginas ultra-rápidas e otimizadas para converter visitantes em clientes no WhatsApp.',
    detailedDescription: 'Sua presença digital começa com uma página que converte. Desenvolvemos Landing Pages ultra-rápidas, focadas em um único objetivo: transformar o visitante em um contato no seu WhatsApp. Design moderno, carregamento otimizado e copy persuasiva para garantir que seu investimento em anúncios não seja desperdiçado.',
    icon: Smartphone,
    color: 'bg-purple-500'
  },
  {
    title: 'SEO Local',
    description: 'Estratégias para que seu site ganhe autoridade orgânica e apareça gratuitamente nas buscas.',
    detailedDescription: 'SEO Local é o jogo de longo prazo para dominar as buscas orgânicas. Trabalhamos a autoridade do seu site e do seu perfil no Google para que você seja a autoridade máxima no seu segmento dentro da sua cidade. Menos dependência de anúncios pagos e mais tráfego qualificado chegando de forma gratuita todos os meses.',
    icon: Search,
    color: 'bg-green-500'
  },
  {
    title: 'Gestão de Tráfego Pago',
    description: 'Gerenciamos seu orçamento de anúncios no Google e Meta para maximizar o ROI e trazer clientes qualificados todos os dias.',
    detailedDescription: 'A gestão profissional de tráfego envolve análise diária, testes A/B e otimização constante do seu orçamento. Não apenas "subimos anúncios", nós analisamos o funil completo do seu negócio para garantir que cada real investido traga o máximo de retorno possível (ROI). Relatórios claros e estratégia baseada em dados reais.',
    icon: TrendingUp,
    color: 'bg-orange-500'
  },
  {
    title: 'Criação de Criativos',
    description: 'Desenvolvemos artes e copies para seus anúncios com foco em conversão, sem custo adicional no plano.',
    detailedDescription: 'A criação de criativos é fundamental para o sucesso de qualquer campanha. Desenvolvemos artes e copies persuasivas, focadas em chamar a atenção do seu público-alvo e levá-lo à ação. Testamos diferentes abordagens para encontrar a que melhor performa para o seu negócio, garantindo que sua mensagem seja clara e impactante.',
    icon: PenTool,
    color: 'bg-pink-500'
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 fade-in-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Expertise</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Como vou fazer sua empresa <span className="text-primary">vender mais</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            Estratégias de quem entende o dia a dia do pequeno e médio empresário brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-3xl bg-gray-50 hover:bg-primary transition-all duration-500 border border-gray-100 relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <service.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-blue-100 transition-colors">{service.description}</p>
              
              <div className="mt-8 flex items-center gap-2 text-primary group-hover:text-white font-bold">
                <span>Saber mais</span>
                <TrendingUp size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-scale-up">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <selectedService.icon className="text-primary" size={40} />
              </div>

              <h3 className="font-heading text-3xl md:text-4xl font-black text-gray-900 mb-6">{selectedService.title}</h3>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
                {selectedService.detailedDescription.split('. ').map((paragraph, i) => (
                  <p key={i}>{paragraph}.</p>
                ))}
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-800 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-xl hover:-translate-y-1 w-full gap-3 text-xl"
              >
                Falar com especialista
                <Smartphone size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
