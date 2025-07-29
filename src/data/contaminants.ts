import { LucideIcon, Droplets, Shield, AlertTriangle, Zap } from 'lucide-react';

export interface ContaminantOverview {
  icon: LucideIcon;
  title: string;
  description: string;
  technology: string;
  technologyLink: string;
}

export interface ContaminantDetails {
  sources: string[];
  healthEffects: string[];
  treatmentMethod: string;
  efficiency: string;
}

export interface RelatedLink {
  name: string;
  path: string;
}

export interface ContaminantData {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  details: ContaminantDetails;
  technology: string;
  relatedLinks?: RelatedLink[];
  // For the overview section
  overviewDescription: string;
  technologyLink: string;
}

// Centralized contaminant data - easy for non-tech people to edit
export const contaminantsData: ContaminantData[] = [
  {
    id: 'natural-organic-matter',
    icon: Droplets,
    title: 'Natural Organic Matter',
    subtitle: 'NOM',
    description: 'Natural Organic Matter (NOM) consists of dissolved organic compounds that originate from the decomposition of plant and animal materials. These compounds can significantly impact water quality by causing undesirable color, taste, and odor issues.',
    overviewDescription: 'Effective removal of dissolved organic compounds that cause color, taste, and odor issues in water treatment.',
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
    technologyLink: '/contaminants/natural-organic-matter',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Municipal Applications', path: '/applications' }
    ]
  },
  {
    id: 'heavy-metals',
    icon: Shield,
    title: 'Heavy Metals',
    description: 'Heavy metals are toxic metallic elements that can accumulate in biological systems and cause serious health problems. Our advanced treatment technology provides complete removal of these dangerous contaminants.',
    overviewDescription: 'Complete removal of toxic heavy metals including lead, copper, iron, manganese, molybdenum, nickel, zinc, and aluminum.',
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
    technologyLink: '/contaminants/heavy-metals',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Industrial Applications', path: '/applications' },
      { name: 'Case Studies', path: '/case-studies' }
    ]
  },
  {
    id: 'pfas',
    icon: AlertTriangle,
    title: 'PFAS',
    subtitle: 'Per- and Polyfluoroalkyl Substances',
    description: 'PFAS are synthetic chemicals known as "forever chemicals" due to their persistence in the environment and human body. These compounds do not break down naturally and can accumulate over time, posing significant health risks.',
    overviewDescription: 'Breaking down forever chemicals that persist in the environment and bioaccumulate in living organisms.',
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
    technologyLink: '/contaminants/pfas',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Environmental Applications', path: '/applications' },
      { name: 'PFAS Case Studies', path: '/case-studies' }
    ]
  },
  {
    id: 'pesticides-herbicides',
    icon: Zap,
    title: 'Pesticides & Herbicides',
    description: 'Agricultural chemicals including glyphosate and other hydrocarbon-based pesticides that contaminate water sources and pose risks to human health and ecosystem integrity.',
    overviewDescription: 'Removal of agricultural chemicals including glyphosate and other hydrocarbon-based pesticides.',
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
    technologyLink: '/contaminants/pesticides-herbicides',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Agricultural Applications', path: '/applications' },
      { name: 'Treatment Case Studies', path: '/case-studies' }
    ]
  },
  {
    id: 'pathogens-microorganisms',
    icon: Droplets,
    title: 'Pathogens & Microorganisms',
    description: 'Harmful bacteria, viruses, parasites, and other microorganisms that can cause waterborne diseases and pose serious health risks to communities worldwide.',
    overviewDescription: 'Validated disinfection performance against bacteria, viruses, and other harmful microorganisms.',
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
    technologyLink: '/contaminants/pathogens-microorganisms',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Municipal Water Treatment', path: '/applications' },
      { name: 'Disinfection Case Studies', path: '/case-studies' }
    ]
  },
  {
    id: 'total-phosphorus',
    icon: Shield,
    title: 'Total Phosphorus',
    description: 'Phosphorus compounds that contribute to eutrophication in water bodies, leading to algae blooms, oxygen depletion, and ecosystem degradation.',
    overviewDescription: 'Effective removal of phosphorus compounds that contribute to eutrophication in water bodies.',
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
    technologyLink: '/contaminants/total-phosphorus',
    relatedLinks: [
      { name: 'Technology Overview', path: '/technology' },
      { name: 'Environmental Remediation', path: '/applications' },
      { name: 'Phosphorus Removal Studies', path: '/case-studies' }
    ]
  }
];

// Helper functions for easy data access
export const getContaminantById = (id: string): ContaminantData | undefined => {
  return contaminantsData.find(contaminant => contaminant.id === id);
};

export const getContaminantByRoute = (route: string): ContaminantData | undefined => {
  const id = route.replace('/contaminants/', '');
  return getContaminantById(id);
};

// For the overview section (ContaminantsSection component)
export const getContaminantsOverview = (): ContaminantOverview[] => {
  return contaminantsData.map(contaminant => ({
    icon: contaminant.icon,
    title: contaminant.title,
    description: contaminant.overviewDescription,
    technology: contaminant.technology,
    technologyLink: contaminant.technologyLink
  }));
};