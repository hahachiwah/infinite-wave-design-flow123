import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { Shield } from 'lucide-react';

const TotalPhosphorus = () => {
  const contaminantData = {
    icon: Shield,
    title: 'Total Phosphorus',
    description: 'Phosphorus compounds that contribute to eutrophication in water bodies, leading to algae blooms, oxygen depletion, and ecosystem degradation.',
    details: {
      sources: [
        'Agricultural fertilizer runoff',
        'Municipal wastewater discharge',
        'Industrial process water',
        'Urban stormwater runoff',
        'Natural weathering of phosphate rocks',
        'Detergents and cleaning products'
      ],
      healthEffects: [
        'Algae bloom toxins in drinking water',
        'Reduced oxygen levels affecting aquatic life',
        'Fish kills and ecosystem disruption',
        'Recreational water safety concerns',
        'Economic impacts on fishing and tourism',
        'Long-term environmental degradation'
      ],
      treatmentMethod: 'Hydroxon™ technology effectively removes both soluble and particulate phosphorus through advanced oxidation and precipitation processes, preventing eutrophication.',
      efficiency: '>96%'
    },
    technology: 'Hydroxon™',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Environmental Remediation', path: '/applications' },
      { name: 'Phosphorus Removal Studies', path: '/case-studies' }
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

export default TotalPhosphorus;