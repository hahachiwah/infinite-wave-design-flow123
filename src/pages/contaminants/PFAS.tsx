import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { AlertTriangle } from 'lucide-react';

const PFAS = () => {
  const contaminantData = {
    icon: AlertTriangle,
    title: 'PFAS',
    subtitle: 'Per- and Polyfluoroalkyl Substances',
    description: 'PFAS are synthetic chemicals known as "forever chemicals" due to their persistence in the environment and human body. These compounds do not break down naturally and can accumulate over time, posing significant health risks.',
    details: {
      sources: [
        'Industrial manufacturing and chemical production',
        'Firefighting foam (AFFF) used at airports and military bases',
        'Non-stick cookware and food packaging',
        'Stain-resistant fabrics and carpets',
        'Cosmetics and personal care products',
        'Landfill leachate and waste disposal sites'
      ],
      healthEffects: [
        'Increased risk of kidney and testicular cancer',
        'Liver damage and elevated cholesterol',
        'Immune system suppression',
        'Reproductive and developmental problems',
        'Hormonal disruption',
        'Bioaccumulation in tissues and organs'
      ],
      treatmentMethod: 'Our Advanced Oxidation Processes (AOP) technology breaks the strong carbon-fluorine bonds in PFAS molecules, completely mineralizing these persistent compounds into harmless end products.',
      efficiency: '>99.9%'
    },
    technology: 'Advanced Oxidation Processes (AOP)',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Environmental Applications', path: '/applications' },
      { name: 'PFAS Case Studies', path: '/case-studies' }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContaminantDetailTemplate {...contaminantData} />
      </main>
      <Footer />
    </div>
  );
};

export default PFAS;