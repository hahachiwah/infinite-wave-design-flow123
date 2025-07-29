export interface CaseStudy {
  title: string;
  location: string;
  category: 'Municipal' | 'Industrial' | 'Mining';
  challenge: string;
  solution: string;
  results: {
    capacity: string;
    efficiency: string;
    savings: string;
  };
  technology: string;
  technologyLink: string;
  image: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    title: 'Copper Mine, Townsville',
    location: 'Townsville, Australia',
    category: 'Mining',
    challenge: 'Very high pH level of 10.9, high turbidity and heavy metals including lead, aluminium, copper, iron, manganese, molybdenum, nickel, and zinc',
    solution: 'Infinite Water successfully removed all heavy metals and achieved exceptional water clarification',
    results: {
      capacity: 'Industrial Scale',
      efficiency: 'Turbidity: 87 → <0.5',
      savings: 'Lead: 1.7 → 0.0009 mg/L'
    },
    technology: 'Advanced Catalytic Oxidation',
    technologyLink: '/technology',
    image: 'photo-1581092795360-fd1ca04f0952'
  },
  {
    title: 'Reusable Packaging Manufacturer, Australia',
    location: 'Australia',
    category: 'Industrial',
    challenge: 'Treating 25,000 litres/day of industrial effluent high in organics, glyphosate, and hydrocarbon-based herbicides',
    solution: 'Implemented HYDROXON™ process to treat the effluent',
    results: {
      capacity: '25,000 L/day',
      efficiency: '>95% glyphosate reduction',
      savings: '<50% of evaporator costs'
    },
    technology: 'Hydroxon™',
    technologyLink: '/technology',
    image: 'photo-1498050108023-c5249f4df085'
  },
  {
    title: 'Recycle Water for the Dairy Industry',
    location: 'Australia',
    category: 'Industrial',
    challenge: 'COW water produced during milk concentration process is costly and difficult to recycle for reuse',
    solution: 'Achieved 30% reduction in CAPEX and OPEX for water recycling',
    results: {
      capacity: 'Global Top 10 Dairy',
      efficiency: '30% CAPEX reduction',
      savings: '30% OPEX reduction'
    },
    technology: 'Advanced Oxidation Processes (AOP)',
    technologyLink: '/technology',
    image: 'photo-1506744038136-46273834b3fb'
  },
  {
    title: 'Drinking water at Meherpur District',
    location: 'Southern Bangladesh',
    category: 'Municipal',
    challenge: 'High arsenic levels in groundwater causing 43,000 annual deaths. Arsenic levels at 0.178 mg/L exceeding safe limits',
    solution: 'Implementation of SHE CAT technology to reduce arsenic concentration to WHO standards',
    results: {
      capacity: '10,000 L/day',
      efficiency: 'Arsenic: 0.178 → 0.003 mg/L',
      savings: 'Meets WHO standards'
    },
    technology: 'Advanced Catalytic Oxidation',
    technologyLink: '/technology',
    image: 'photo-1519389950473-47ba0277781c'
  }
];

export const caseStudyTags = [
  "drinking water",
  "groundwater", 
  "Heavy Metal Removal",
  "Reduction in CAPEX and OPEX",
  "Removal of Glyphosate"
];