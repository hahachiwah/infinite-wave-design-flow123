import { Droplets, Factory, Leaf, Settings, Zap, Shield, Building, HardHat, Palette, FileText, Cpu, Recycle, Beaker, Server, Sprout, Waves, Gamepad2 } from 'lucide-react';
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
      icon: Building,
      title: 'Municipal',
      description: 'Comprehensive water treatment solutions for municipal applications across remote communities, regional councils, and urban utilities.',
      features: ['Remote Communities', 'Regional Councils', 'Urban Utilities'],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop',
      redirectTo: '/municipal'
    },
    {
      icon: Shield,
      title: 'Disaster Relief Water Treatment',
      description: 'Rapid deployment water treatment systems for emergency and disaster relief situations.',
      features: ['Portable Systems', 'Emergency Response', 'Rapid Deployment'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    },
    {
      icon: Zap,
      title: 'PFAS Degradation',
      description: 'Advanced treatment systems for PFAS degradation in drinking water sources.',
      features: ['PFAS Removal', 'Advanced Oxidation', 'Drinking Water Safety'],
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop'
    },
    {
      icon: Leaf,
      title: 'Glyphosate Degradation',
      description: 'Specialized treatment for glyphosate degradation in drinking water sources.',
      features: ['Pesticide Removal', 'CAT Technology', 'Water Purification'],
      image: 'https://images.unsplash.com/photo-1574263867128-ed92a33e7da7?w=600&h=400&fit=crop'
    },
    {
      icon: Settings,
      title: 'Packaged Desalination Plants',
      description: 'Medium size desalinating plants for inhabited islands and coastal areas.',
      features: ['Coastal Solutions', 'Island Communities', 'Modular Design'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
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
      icon: HardHat,
      title: 'Industrial Parks & Landfill Leachate',
      description: 'Treatment of wastewater from industrial parks and landfill leachate.',
      features: ['Industrial Wastewater', 'Leachate Treatment', 'Heavy Metal Removal'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    },
    {
      icon: Shield,
      title: 'Metal Plating Wastewater',
      description: 'Treatment of wastewater from metal plating operations.',
      features: ['Heavy Metal Removal', 'Electroplating Waste', 'Surface Treatment'],
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop'
    },
    {
      icon: Palette,
      title: 'Textile Industry Wastewater',
      description: 'Treatment of wastewater from textile industry operations.',
      features: ['Dye Removal', 'Color Treatment', 'Fiber Processing'],
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop'
    },
    {
      icon: FileText,
      title: 'Pulp & Paper Industry',
      description: 'Treatment of wastewater from pulp and paper industry processes.',
      features: ['Lignin Removal', 'Bleaching Chemicals', 'Fiber Recovery'],
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop'
    },
    {
      icon: Cpu,
      title: 'Microelectronics & Semiconductor',
      description: 'Treatment of wastewater from microelectronics and semiconductor industry.',
      features: ['Chemical Cleaning', 'Ultra-pure Requirements', 'Process Water'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
    },
    {
      icon: Recycle,
      title: 'Municipal Secondary Effluent',
      description: 'Treatment of utility municipal wastewater, secondary effluent for reuse.',
      features: ['Effluent Polishing', 'Water Reuse', 'Municipal Treatment'],
      image: 'https://images.unsplash.com/photo-1572254465217-6758a7f8b0e4?w=600&h=400&fit=crop'
    },
    {
      icon: Beaker,
      title: 'High Purity & Ultrapure Water',
      description: 'Production of high purity and ultrapure water for industrial applications.',
      features: ['Ultrapure Production', 'Industrial Grade', 'Process Water'],
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop'
    },
    {
      icon: Server,
      title: 'Cooling Towers & Data Centers',
      description: 'Treatment of water for cooling towers & data center applications.',
      features: ['Cooling Systems', 'Data Center Water', 'Temperature Control'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      icon: Sprout,
      title: 'Irrigation Water Treatment',
      description: 'Treatment of water for irrigation and agricultural applications.',
      features: ['Agricultural Water', 'Crop Irrigation', 'Soil Health'],
      image: 'https://images.unsplash.com/photo-1574263867128-ed92a33e7da7?w=600&h=400&fit=crop'
    },
    {
      icon: Waves,
      title: 'Nutrient Removal & Algal Bloom Prevention',
      description: 'Treatment of water for nutrient removal – prevention and remediation of algal blooms.',
      features: ['Phosphorus Removal', 'Nitrogen Control', 'Algae Prevention'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    },
    {
      icon: Gamepad2,
      title: 'Recreational Water & Features',
      description: 'Treatment of water for recreational water and water features.',
      features: ['Swimming Pools', 'Water Features', 'Recreation Safety'],
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    {
      id: 'portable',
      title: 'Portable Water',
      description: 'Clean, safe drinking water solutions',
      icon: Droplets,
      services: portableWaterServices,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop'
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