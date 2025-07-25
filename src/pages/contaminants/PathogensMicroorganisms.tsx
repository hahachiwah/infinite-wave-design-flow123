import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { Droplets } from 'lucide-react';

const PathogensMicroorganisms = () => {
  const contaminantData = {
    icon: Droplets,
    title: 'Pathogens & Microorganisms',
    description: 'Harmful bacteria, viruses, parasites, and other microorganisms that can cause waterborne diseases and pose serious health risks to communities worldwide.',
    details: {
      sources: [
        'Sewage and wastewater discharge',
        'Animal waste from livestock operations',
        'Surface water contamination from wildlife',
        'Failed septic systems and groundwater infiltration',
        'Cross-connections in water distribution systems',
        'Biofilm formation in water infrastructure'
      ],
      healthEffects: [
        'Gastrointestinal illnesses (diarrhea, vomiting)',
        'Waterborne diseases (cholera, typhoid, hepatitis)',
        'Respiratory infections',
        'Skin and eye infections',
        'Severe complications in immunocompromised individuals',
        'Potential for epidemic outbreaks'
      ],
      treatmentMethod: 'Advanced Oxidation Processes (AOP) provide superior disinfection performance, effectively inactivating bacteria, viruses, and resistant pathogens including Cryptosporidium and Giardia.',
      efficiency: '>99.99%'
    },
    technology: 'Advanced Oxidation Processes (AOP)',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Municipal Water Treatment', path: '/applications' },
      { name: 'Disinfection Case Studies', path: '/case-studies' }
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

export default PathogensMicroorganisms;