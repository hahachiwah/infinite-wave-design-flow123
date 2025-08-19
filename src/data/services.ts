// This file can be removed as services are now handled directly in ServicesSection component
// Keeping minimal structure for potential future use

export interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}