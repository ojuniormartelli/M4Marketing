import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants.ts';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const segment = formData.get('segment') as string;
    const message = formData.get('message') as string;

    // Formatação da mensagem para o WhatsApp
    const text = `*Novo Contato - M4 Digital*%0A%0A` +
                 `*Nome:* ${name}%0A` +
                 `*WhatsApp:* ${phone}%0A` +
                 `*E-mail:* ${email}%0A` +
                 `*Segmento:* ${segment}%0A%0A` +
                 `*Objetivo:* ${message}`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    
    // Simula um pequeno loading para feedback visual
    setTimeout(() => {
      window.open(waLink, '_blank');
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="font-heading text-4xl font-black text-primary mb-6 leading-tight">
                Pronto para o próximo nível?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Preencha o formulário e você será redirecionado para o meu WhatsApp com todos os detalhes prontos para iniciarmos.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "WhatsApp", value: "(19) 99630-1433" },
                { icon: Mail, title: "E-mail", value: "juniormartelli.m4@gmail.com" },
                { icon: MapPin, title: "Localização", value: "Itapira, SP" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.title}</p>
                    <p className="text-gray-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Seu Nome</label>
                    <input name="name" type="text" required placeholder="Ex: João Silva" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Seu WhatsApp</label>
                    <input name="phone" type="tel" required placeholder="(00) 00000-0000" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">E-mail</label>
                    <input name="email" type="email" required placeholder="voce@empresa.com" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Segmento do Negócio</label>
                    <select name="segment" required className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                      <option value="">Selecione...</option>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Saúde e Beleza">Saúde e Beleza</option>
                      <option value="Construção Civil">Construção Civil</option>
                      <option value="Educação">Educação</option>
                      <option value="Varejo">Varejo</option>
                      <option value="Serviços Locais">Serviços Locais</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Como posso te ajudar?</label>
                  <textarea name="message" rows={4} placeholder="Conte um pouco sobre seu negócio..." className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accentHover text-white font-black py-5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-xl"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : (
                    <>
                      Enviar via WhatsApp
                      <MessageCircle size={22} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;