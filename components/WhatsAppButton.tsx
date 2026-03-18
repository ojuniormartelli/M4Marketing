import React from 'react';
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
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 group-hover:opacity-50"></div>
      <div className="relative transition-transform transform hover:scale-110 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg overflow-hidden p-1 border border-green-100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;