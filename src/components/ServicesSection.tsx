import { Droplets, Factory, Leaf, Settings, Zap, Shield, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const portableWaterServices = [
    {
      icon: Droplets,
      title: 'Desalination',
      description: 'Advanced seawater and brackish water desalination systems for pure drinking water.',
      features: ['Reverse Osmosis', 'Multi-Stage Flash', 'Energy Recovery'],
      image: 'https://images.unsplash.com/photo-1569163139707-de2daa3e3cd3?w=600&h=400&fit=crop'
    },
    {
      icon: Building,
      title: 'Municipal',
      description: 'Comprehensive water treatment solutions for municipal applications across remote communities, regional councils, and urban utilities.',
      features: ['Remote Communities', 'Regional Councils', 'Urban Utilities'],
      image: 'https://images.unsplash.com/photo-1516627145497-ae4099ea6365?w=600&h=400&fit=crop',
      redirectTo: '/municipal'
    }
  ];

  const wastewaterServices = [
    {
      icon: Factory,
      title: 'Cow Water',
      description: 'Specialized treatment systems for agricultural and dairy wastewater management.',
      features: ['Organic Matter Removal', 'Nutrient Recovery', 'Effluent Reuse'],
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop'
    },
    {
      icon: Leaf,
      title: 'Leachate',
      description: 'Advanced leachate treatment solutions for landfill and waste management facilities.',
      features: ['Chemical Treatment', 'Membrane Filtration', 'Heavy Metal Removal'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    {
      id: 'portable',
      title: 'Portable Water',
      description: 'Clean, safe drinking water solutions',
      icon: Droplets,
      services: portableWaterServices,
      image: 'https://images.unsplash.com/photo-1569163139707-de2daa3e3cd3?w=600&h=400&fit=crop'
    },
    {
      id: 'wastewater',
      title: 'Wastewater Treatment',
      description: 'Advanced wastewater processing and recovery',
      icon: Factory,
      services: wastewaterServices,
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop'
    }
  ];

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden h-[500px]">
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
          <div className="mb-6">
            <service.icon className="h-12 w-12 text-primary mb-4" />
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
            
            {/* Tagline */}
            <p className="text-muted-foreground mb-6">{service.description}</p>
          </div>
          
          {/* Learn More Button */}
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base"
            onClick={() => service.redirectTo && navigate(service.redirectTo)}
          >
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
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
          <category.icon className="h-16 w-16 text-primary mb-6" />
          
          {/* Title */}
          <h3 className="text-3xl font-bold text-foreground mb-4">{category.title}</h3>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
          
          {/* Service Count */}
          <p className="text-sm text-muted-foreground mb-8">
            {category.services.length} Services Available
          </p>
          
          {/* Explore Button */}
          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-base">
            Explore Services
          </Button>
        </div>
      </div>
    </Card>
  );

  const CategoryCarousel = ({ category }: { category: any }) => (
    <div className="relative">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {category.services.map((service: any, index: number) => (
            <CarouselItem key={index}>
              <ServiceCard service={service} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </div>
  );

  return (
    <section className="py-24 bg-background">
      <div className="w-full px-2.5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive water treatment applications designed for every need.
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

export default ServicesSection;