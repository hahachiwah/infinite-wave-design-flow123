import { LucideIcon } from 'lucide-react';

export interface Contaminant {
  icon: LucideIcon;
  title: string;
  description: string;
  technology: string;
  technologyLink: string;
}

// This data should be extracted from ContaminantsSection.tsx when refactoring that component
export const contaminantsData: Contaminant[] = [];