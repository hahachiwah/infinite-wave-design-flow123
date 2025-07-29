import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { getContaminantsOverview } from '@/data/contaminants';

const ContaminantsSection = () => {
  const contaminants = getContaminantsOverview();

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
                  {/* <span className="text-sm font-medium text-primary">{contaminant.technology}</span> */}
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