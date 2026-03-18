import { NavLink } from './types.ts';

// O formato 'thumbnail' com sz=w1000 é o mais confiável atualmente para exibir imagens do Drive em sites externos.
export const getDriveUrl = (id: string) => {
  if (!id || id.includes('SEU_ID')) return '';
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
};

// IDs das Imagens no Google Drive
export const DRIVE_IDS = {
  LOGO: '1FnU95sOHlgm2XLpnRHgaOduLldQOUewg', // ID atualizado conforme seu print
  ABOUT_IMAGE: '11N17wBnHfEuBDg_qvShrcNakr93Fxbs4', 
  HERO_BG: '19H30G7vjiurvfXOcaLmQ2FvGLORe0AAF',
};

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const WHATSAPP_NUMBER = "5519996301433";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma consultoria gratuita.`;
