import { useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tags = [
    "drinking water",
    "groundwater", 
    "Heavy Metal Removal",
    "Reduction in CAPEX and OPEX",
    "Removal of Glyphosate"
  ];

  const caseStudies = [
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

  const filteredCaseStudies = caseStudies.filter(study =>
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.solution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Municipal':
        return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'Industrial':
        return 'bg-green-500/10 text-green-600 border-green-200';
      case 'Mining':
        return 'bg-orange-500/10 text-orange-600 border-orange-200';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Your Cases Here
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome! Use the search bar to find relevant cases easily. Simply type in keywords related to your query. Make sure to check your spelling for best results!
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-base"
                onClick={() => setSearchTerm(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=600&h=400`}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(study.category)}>
                    {study.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {study.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Capacity</span>
                    <span className="text-sm font-semibold text-primary">{study.results.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Efficiency</span>
                    <span className="text-sm font-semibold text-primary">{study.results.efficiency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Savings</span>
                    <span className="text-sm font-semibold text-primary">{study.results.savings}</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-2">Patented Technology Used:</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium">{study.technology}</span>
                    <Link 
                      to={study.technologyLink} 
                      className="text-sm text-primary hover:text-primary/80 transition-colors underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="shadow-medium">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;