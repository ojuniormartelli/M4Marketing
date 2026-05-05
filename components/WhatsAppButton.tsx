import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants.ts';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:opacity-50"></div>
      <div className="relative transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppButton;