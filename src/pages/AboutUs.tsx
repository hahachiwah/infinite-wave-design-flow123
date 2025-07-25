import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Users, Award } from 'lucide-react';
import { getExpertsByCategory } from '@/data/experts';
import { Expert } from '@/types/expert';

const AboutUs = () => {
  const location = useLocation();
  const isNestedRoute = location.pathname !== '/about-us';
  
  // If we're on a nested route, just render the Outlet
  if (isNestedRoute) {
    return <Outlet />;
  }
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const preeminentExperts = getExpertsByCategory('preeminent-experts');
  const steadfastLeaders = getExpertsByCategory('leadership');

  const categories = [
    {
      id: 'preeminent-experts',
      title: 'Preeminent Experts',
      description: 'Leading scientists and engineers with decades of experience',
      icon: Users,
      experts: preeminentExperts,
      image: '/lovable-uploads/1c20599a-af33-4f8f-a707-f6f3de27a32e.png'
    },
    {
      id: 'our-leadership',
      title: 'Our Leadership',
      description: 'Experienced leaders driving innovation and sustainability',
      icon: Award,
      experts: steadfastLeaders,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop'
    }
  ];

  const ExpertCard = ({ expert, index, category }: { expert: Expert, index: number, category: string }) => {
    const linkTo = category === 'our-leadership' ? '/about-us/leadership' : '/about-us/preeminent-experts';
    const buttonText = category === 'our-leadership' ? 'View All Leadership' : 'View All Experts';
    
    return (
      <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden h-[500px]">
        <div className="relative h-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{expert.name}</h3>
              <p className="text-primary font-medium mb-2">{expert.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{expert.specialization}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{expert.bio}</p>
            </div>
            
            <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base">
              <Link to={linkTo}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  const CategoryCard = ({ category }: { category: any }) => {
    const linkTo = category.id === 'preeminent-experts' ? '/about-us/preeminent-experts' : '/about-us/leadership';
    
    return (
      <Link to={linkTo}>
        <Card className="group hover:shadow-large transition-smooth overflow-hidden h-[500px] cursor-pointer">
          <div className="relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:object-[center_10%] transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
              <category.icon className="h-16 w-16 text-primary mb-6" />
              
              <h3 className="text-3xl font-bold text-foreground mb-4">{category.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
              <p className="text-sm text-muted-foreground mb-8">
                {category.experts.length} Expert{category.experts.length > 1 ? 's' : ''} Available
              </p>
            </div>
          </div>
        </Card>
      </Link>
    );
  };

  const CategoryCarousel = ({ category }: { category: any }) => (
    <div className="relative">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {category.experts.map((expert: Expert, index: number) => (
            <CarouselItem key={index}>
              <ExpertCard expert={expert} index={index} category={category.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Exceptional people. Exceptional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Main Categories Section */}
        <section className="py-24 bg-background">
          <div className="w-full px-2.5">

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

        <PartnersSection />
      </main>
      <Footer />
      <Outlet />
    </div>
  );
};

export default AboutUs;