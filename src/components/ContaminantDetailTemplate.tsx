import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface ContaminantDetailTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  details: {
    sources: string[];
    healthEffects: string[];
    treatmentMethod: string;
    efficiency: string;
  };
  technology: string;
  relatedLinks?: {
    name: string;
    path: string;
  }[];
}

const ContaminantDetailTemplate = ({
  icon: Icon,
  title,
  subtitle,
  description,
  details,
  technology,
  relatedLinks = []
}: ContaminantDetailTemplateProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-primary font-medium mb-6">{subtitle}</p>
            )}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sources */}
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Common Sources</h3>
                  <ul className="space-y-3">
                    {details.sources.map((source, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{source}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Health Effects */}
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Health Effects</h3>
                  <ul className="space-y-3">
                    {details.healthEffects.map((effect, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Treatment Information */}
            <Card className="shadow-soft mt-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Technology</h3>
                    <p className="text-primary font-semibold text-lg mb-2">{technology}</p>
                    <p className="text-muted-foreground leading-relaxed">{details.treatmentMethod}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Removal Efficiency</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{details.efficiency}</p>
                    <p className="text-muted-foreground">Proven effectiveness in real-world applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            {relatedLinks.length > 0 && (
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-8">Learn More</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {relatedLinks.map((link, index) => (
                    <Button key={index} asChild variant="outline">
                      <Link to={link.path}>{link.name}</Link>
                    </Button>
                  ))}
                  <Button asChild>
                    <Link to="/contaminants">View All Contaminants</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContaminantDetailTemplate;