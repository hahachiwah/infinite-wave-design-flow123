import { FileText, Beaker, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useState } from 'react';

const TechnologySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const patentsTechnologies = [
    {
      icon: FileText,
      title: 'PATENTS',
      description: 'Innovative processes and new technology at the cutting-edge of sustainable water treatment.',
      content: 'Infinite Water holds patents for innovative processes and new technology at the cutting-edge of sustainable water and wastewater treatment. Our team is conducting pure research from our purpose-built laboratory to ensure we are continuously innovating more efficient solutions to complex industry challenges.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    }
  ];

  const technologiesList = [
    {
      icon: Beaker,
      title: 'Advanced Catalytic Oxidation',
      description: 'Pioneering the use of different catalysts in water treatment applications.',
      content: 'Catalysts have been used to aid chemical reactions in various industries, like refineries and petrochemical processes. In water treatment, Infinite Water pioneers the use of different catalysts when treating water. We have developed and tested different types of catalysts for a wide range of applications including AOP.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop'
    },
    {
      icon: Zap,
      title: 'Advanced Oxidation Processes (AOP)',
      description: 'Powerful oxidising intermediates for rapid pollutant degradation.',
      content: 'Advanced Oxidation Processes (AOP) involve the use of powerful oxidising intermediates like the hydroxyl radical – OH, and sulphate radicals SO4 – that can oxidise and degrade pollutants from contaminated water. The term advanced is used because the reactions are much faster compared to normal oxidation.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    },
    {
      icon: Award,
      title: 'Hydroxon™ – our proprietary technology',
      description: 'Comprehensive water treatment solution with validated performance.',
      content: 'Removing metal & metalloids\nMineralisation and removal of organic matter\nValidated disinfection performance\nSignificant reduction of colour\nImproving taste and smell\nRemoval of Total Phosphorus\nRemoval of suspended & colloidal solids',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    {
      id: 'patents',
      title: 'Patents',
      description: 'Innovative processes and cutting-edge technology',
      icon: FileText,
      technologies: patentsTechnologies,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      id: 'technologies',
      title: 'Technologies',
      description: 'Advanced treatment processes and proprietary solutions',
      icon: Zap,
      technologies: technologiesList,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop'
    }
  ];

  const TechnologyCard = ({ technology, index }: { technology: any, index: number }) => (
    <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden h-[500px]">
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={technology.image}
            alt={technology.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
          <div className="mb-6">
            <technology.icon className="h-12 w-12 text-primary mb-4" />
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-3">{technology.title}</h3>
            
            {/* Description */}
            <p className="text-muted-foreground mb-6">{technology.description}</p>
          </div>
          
          {/* Learn More Button */}
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );

  const CategoryCard = ({ category }: { category: any }) => (
    <Card className="group hover:shadow-large transition-smooth overflow-hidden h-[500px] cursor-pointer">
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
          <category.icon className="h-16 w-16 text-primary mb-6" />
          
          {/* Title */}
          <h3 className="text-3xl font-bold text-foreground mb-4">{category.title}</h3>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
          
          {/* Technology Count */}
          <p className="text-sm text-muted-foreground mb-8">
            {category.technologies.length} {category.technologies.length === 1 ? 'Technology' : 'Technologies'} Available
          </p>
          
          {/* Explore Button */}
          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-base">
            Explore Technologies
          </Button>
        </div>
      </div>
    </Card>
  );

  const CategoryCarousel = ({ category }: { category: any }) => (
    <div className="relative">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {category.technologies.map((technology: any, index: number) => (
            <CarouselItem key={index}>
              <TechnologyCard technology={technology} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </div>
  );

  return (
    <section id="technology" className="py-24 gradient-subtle">
      <div className="w-full px-2.5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proprietary technology in <span className="text-primary">water treatment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proprietary technology is being used to solve some of the world's most complex water treatment challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative p-8"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative">
                <div 
                  className={`transition-all duration-1000 ease-in-out ${
                    hoveredCategory === category.id 
                      ? 'opacity-0 scale-95 pointer-events-none' 
                      : 'opacity-100 scale-100'
                  }`}
                >
                  <CategoryCard category={category} />
                </div>
                <div 
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    hoveredCategory === category.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <CategoryCarousel category={category} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;