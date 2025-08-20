import { Expert } from '@/types/expert';

export interface ExpertPageConfig {
  category: 'preeminent-experts' | 'leadership';
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  backLinkText: string;
  backLinkPath: string;
  slideshowConfig: {
    title: string;
    showContactButton: boolean;
    showLearnMoreButton: boolean;
    showExpertiseSection: boolean;
    containerHeight: string;
  };
}

export const expertPageConfigs: Record<string, ExpertPageConfig> = {
  'preeminent-experts': {
    category: 'preeminent-experts',
    title: 'Meet Our Experts',
    subtitle: 'Leading scientists and engineers',
    description: 'Decades of experience at the forefront of water treatment technology, driving innovation and scientific breakthroughs.',
    videoSrc: '/lovable-uploads/infinite-water_header.mp4',
    backLinkText: 'Back to About Us',
    backLinkPath: '/about-us',
    slideshowConfig: {
      title: 'Our Experts',
      showContactButton: true,
      showLearnMoreButton: true,
      showExpertiseSection: true,
      containerHeight: 'h-[800px]'
    }
  },
  'leadership': {
    category: 'leadership',
    title: 'Our Leadership',
    subtitle: 'Experienced leaders driving innovation',
    description: 'Meet the experienced leaders driving innovation and growth in sustainable water treatment solutions.',
    videoSrc: '/lovable-uploads/infinite-water_header.mp4',
    backLinkText: 'Back to About Us',
    backLinkPath: '/about-us',
    slideshowConfig: {
      title: 'Our Leadership',
      showContactButton: false,
      showLearnMoreButton: false,
      showExpertiseSection: false,
      containerHeight: 'h-[800px]'
    }
  }
};

export const getExpertPageConfig = (category: string): ExpertPageConfig | undefined => {
  return expertPageConfigs[category];
};

export const getExpertPageConfigByCategory = (category: 'preeminent-experts' | 'leadership'): ExpertPageConfig | undefined => {
  return Object.values(expertPageConfigs).find(config => config.category === category);
}; 