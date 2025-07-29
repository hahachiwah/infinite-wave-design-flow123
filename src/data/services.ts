import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  redirectTo?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: Service[];
  image: string;
}

// This data should be extracted from ServicesSection.tsx when refactoring that component
export const serviceCategories: ServiceCategory[] = [];