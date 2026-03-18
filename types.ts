
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// Added missing Feature interface used in Features component
export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

// Added missing PricingTier interface used in Pricing component
export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}
