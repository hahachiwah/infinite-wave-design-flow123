import { Droplets, Shield, AlertTriangle, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ContaminantsSection = () => {
  const contaminants = [
    {
      icon: Droplets,
      title: 'Natural Organic Matter (NOM)',
      description: 'Effective removal of dissolved organic compounds that cause color, taste, and odor issues in water treatment.',
      technology: 'Hydroxon™',
      technologyLink: '/contaminants/natural-organic-matter'
    },
    {
      icon: Shield,
      title: 'Heavy Metals',
      description: 'Complete removal of toxic heavy metals including lead, copper, iron, manganese, molybdenum, nickel, zinc, and aluminum.',
      technology: 'Advanced Catalytic Oxidation',
      technologyLink: '/contaminants/heavy-metals'
    },
    {
      icon: AlertTriangle,
      title: 'PFAS (Per- and Polyfluoroalkyl Substances)',
      description: 'Breaking down forever chemicals that persist in the environment and bioaccumulate in living organisms.',
      technology: 'Advanced Oxidation Processes (AOP)',
      technologyLink: '/contaminants/pfas'
    },
    {
      icon: Zap,
      title: 'Pesticides & Herbicides',
      description: 'Removal of agricultural chemicals including glyphosate and other hydrocarbon-based pesticides.',
      technology: 'Hydroxon™',
      technologyLink: '/contaminants/pesticides-herbicides'
    },
    {
      icon: Droplets,
      title: 'Pathogens & Microorganisms',
      description: 'Validated disinfection performance against bacteria, viruses, and other harmful microorganisms.',
      technology: 'Advanced Oxidation Processes (AOP)',
      technologyLink: '/contaminants/pathogens-microorganisms'
    },
    {
      icon: Shield,
      title: 'Total Phosphorus',
      description: 'Effective removal of phosphorus compounds that contribute to eutrophication in water bodies.',
      technology: 'Hydroxon™',
      technologyLink: '/contaminants/total-phosphorus'
    }
  ];

  return (
    <section id="contaminants" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contaminants We <span className="text-primary">Remove</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proprietary technology effectively removes a wide range of contaminants from water, ensuring safe and clean water for various applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contaminants.map((contaminant, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <contaminant.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{contaminant.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{contaminant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{contaminant.technology}</span>
                  <Link 
                    to={contaminant.technologyLink} 
                    className="text-sm text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContaminantsSection;