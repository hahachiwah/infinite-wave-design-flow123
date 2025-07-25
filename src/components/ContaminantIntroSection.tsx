import { Droplets } from 'lucide-react';

const ContaminantIntroSection = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Droplets className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Water <span className="text-primary">Contaminants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Understanding the various contaminants that can affect water quality is crucial for implementing effective treatment solutions. Our advanced oxidation technologies target a comprehensive range of pollutants, from heavy metals and organic compounds to emerging contaminants like PFAS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContaminantIntroSection;