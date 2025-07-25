import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { Shield } from 'lucide-react';

const HeavyMetals = () => {
  const contaminantData = {
    icon: Shield,
    title: 'Heavy Metals',
    description: 'Heavy metals are toxic metallic elements that can accumulate in biological systems and cause serious health problems. Our advanced treatment technology provides complete removal of these dangerous contaminants.',
    details: {
      sources: [
        'Industrial discharge and manufacturing processes',
        'Mining operations and mine drainage',
        'Corroded plumbing systems (lead, copper)',
        'Agricultural pesticides and fertilizers',
        'Atmospheric deposition from combustion',
        'Electronic waste and battery disposal'
      ],
      healthEffects: [
        'Neurological damage and developmental disorders',
        'Kidney and liver damage',
        'Cardiovascular problems',
        'Cancer and carcinogenic effects',
        'Immune system dysfunction',
        'Reproductive and developmental issues'
      ],
      treatmentMethod: 'Advanced Catalytic Oxidation technology transforms heavy metals into less harmful forms and enables their complete removal through precipitation and filtration. The process is highly selective and efficient.',
      efficiency: '>99%'
    },
    technology: 'Advanced Catalytic Oxidation',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Industrial Applications', path: '/applications' },
      { name: 'Case Studies', path: '/case-studies' }
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

export default HeavyMetals;