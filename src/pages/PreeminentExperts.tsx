import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Star, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expertsData } from '@/data/experts';

const PreeminentExperts = () => {
  const preeminentExperts = expertsData.filter(expert => expert.category === 'preeminent-experts');
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const currentExpert = preeminentExperts[currentExpertIndex];

  const handlePrevious = () => {
    setCurrentExpertIndex((prev) => (prev - 1 + preeminentExperts.length) % preeminentExperts.length);
  };

  const handleNext = () => {
    setCurrentExpertIndex((prev) => (prev + 1) % preeminentExperts.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Meet Our Experts"
          subtitle="Leading scientists and engineers"
          description="Decades of experience at the forefront of water treatment technology, driving innovation and scientific breakthroughs."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-muted/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="mb-8">
                <Link to="/about-us" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to About Us
                </Link>
              </div>
              
              {/* Expert Navigation */}
              <div className="flex items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handlePrevious}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  {currentExpertIndex + 1} of {preeminentExperts.length}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleNext}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Bio Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                   <div className="relative h-[600px] lg:h-auto">
                     <div 
                       className="absolute inset-0 bg-cover bg-center opacity-20"
                       style={{ backgroundImage: `url(${currentExpert.image})` }}
                     />
                     <img
                       src={currentExpert.image}
                       alt={`${currentExpert.name} - ${currentExpert.title}`}
                       className="w-full h-auto object-contain relative z-10"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-20" />
                     <div className="absolute bottom-8 left-8 right-8">
                       <div className="text-white">
                         <h2 className="text-3xl font-bold mb-2">{currentExpert.name}</h2>
                         <p className="text-xl text-white/90 mb-4">{currentExpert.title}</p>
                         <div className="flex items-center space-x-4 text-sm text-white/80">
                           <div className="flex items-center">
                             <Award className="h-4 w-4 mr-1" />
                             {currentExpert.category === 'preeminent-experts' ? '35+ Years Experience' : 'Expert Leader'}
                           </div>
                           <div className="flex items-center">
                             <Star className="h-4 w-4 mr-1" />
                             {currentExpert.specialization}
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                  {/* Content Section */}
                   <div className="p-12 lg:p-16 flex flex-col justify-center">
                     <div className="mb-8">
                       <h3 className="text-2xl font-bold text-foreground mb-4">{currentExpert.specialization}</h3>
                       <div className="space-y-6 text-muted-foreground leading-relaxed">
                         {currentExpert.fullBio ? (
                           currentExpert.fullBio.slice(0, 2).map((paragraph, index) => (
                             <p key={index}>{paragraph}</p>
                           ))
                         ) : (
                           <p>{currentExpert.bio}</p>
                         )}
                       </div>
                     </div>

                     {/* Key Achievements */}
                     {currentExpert.achievements && (
                       <div className="space-y-4 mb-8">
                         <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                         <div className="space-y-3">
                           {currentExpert.achievements.slice(0, 4).map((achievement, index) => (
                             <div key={index} className="flex items-start space-x-3">
                               <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                               <p className="text-muted-foreground">{achievement}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                     )}

                     <div className="flex flex-col sm:flex-row gap-4">
                       <Button size="lg" className="flex-1">
                         <Users className="h-4 w-4 mr-2" />
                         Contact Expert
                       </Button>
                       <Button variant="outline" size="lg" className="flex-1">
                         Learn More
                       </Button>
                     </div>
                   </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Expertise Section */}
        {currentExpert.expertise && (
          <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Areas of <span className="text-primary">Expertise</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentExpert.expertise.map((expertise, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{expertise.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{expertise.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PreeminentExperts;