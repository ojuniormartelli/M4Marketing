import { NavLink } from './types.ts';

// Caminhos dos Assets Locais (Pasta public)
export const ASSETS = {
  LOGO: '/branding/logo.png',
  ABOUT_IMAGE: '/images/ads.png',
  HERO_BG: '/images/hero-bg.png',
};

// Mantido apenas para compatibilidade legada se necessário
export const getDriveUrl = (id: string) => {
  if (!id || id.includes('SEU_ID')) return '';
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
};

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Metodologia', href: '#methodology' },
  { label: 'Valores', href: '#pricing' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const WHATSAPP_NUMBER = "5519996301433";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma consultoria gratuita.`;
