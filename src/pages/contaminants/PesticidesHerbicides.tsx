import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { Zap } from 'lucide-react';

const PesticidesHerbicides = () => {
  const contaminantData = {
    icon: Zap,
    title: 'Pesticides & Herbicides',
    description: 'Agricultural chemicals including glyphosate and other hydrocarbon-based pesticides that contaminate water sources and pose risks to human health and ecosystem integrity.',
    details: {
      sources: [
        'Agricultural crop spraying and field applications',
        'Residential lawn and garden treatments',
        'Golf course and turf management',
        'Forest management and vegetation control',
        'Industrial vegetation control along railways and utilities',
        'Surface water runoff from treated areas'
      ],
      healthEffects: [
        'Endocrine system disruption',
        'Increased cancer risk (particularly lymphomas)',
        'Neurological disorders and cognitive impairment',
        'Reproductive health problems',
        'Skin and eye irritation',
        'Potential links to autism and ADHD in children'
      ],
      treatmentMethod: 'Hydroxon™ technology effectively breaks down complex pesticide molecules through advanced oxidation, converting them into harmless byproducts while maintaining treatment efficiency.',
      efficiency: '>98%'
    },
    technology: 'Hydroxon™',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Agricultural Applications', path: '/applications' },
      { name: 'Treatment Case Studies', path: '/case-studies' }
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

export default PesticidesHerbicides;