import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { Droplets } from 'lucide-react';

const NaturalOrganicMatter = () => {
  const contaminantData = {
    icon: Droplets,
    title: 'Natural Organic Matter',
    subtitle: 'NOM',
    description: 'Natural Organic Matter (NOM) consists of dissolved organic compounds that originate from the decomposition of plant and animal materials. These compounds can significantly impact water quality by causing undesirable color, taste, and odor issues.',
    details: {
      sources: [
        'Decomposition of leaves, wood, and other plant materials',
        'Algae and other aquatic organisms',
        'Soil organic matter leaching',
        'Agricultural runoff containing organic compounds',
        'Wetlands and marshy areas'
      ],
      healthEffects: [
        'Unpleasant taste and odor in drinking water',
        'Water discoloration (yellow to brown tint)',
        'Potential formation of disinfection byproducts',
        'Interference with water treatment processes',
        'Reduced effectiveness of chlorine disinfection'
      ],
      treatmentMethod: 'Our Hydroxon™ technology employs advanced oxidation processes specifically designed to break down complex organic molecules. The process mineralizes organic compounds into harmless byproducts, effectively removing color, taste, and odor issues.',
      efficiency: '>95%'
    },
    technology: 'Hydroxon™',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Municipal Applications', path: '/applications' }
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

export default NaturalOrganicMatter;