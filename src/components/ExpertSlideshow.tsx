import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Expert } from '@/types/expert';

interface ExpertSlideshowProps {
  experts: Expert[];
  title: string;
  showContactButton?: boolean;
  showLearnMoreButton?: boolean;
  showExpertiseSection?: boolean;
  containerHeight?: string;
  onExpertChange?: (expert: Expert, index: number) => void;
}

const ExpertSlideshow: React.FC<ExpertSlideshowProps> = ({
  experts,
  title,
  showContactButton = true,
  showLearnMoreButton = true,
  showExpertiseSection = true,
  containerHeight = "h-[800px]",
  onExpertChange
}) => {
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const currentExpert = experts[currentExpertIndex];

  const handlePrevious = () => {
    const newIndex = (currentExpertIndex - 1 + experts.length) % experts.length;
    setCurrentExpertIndex(newIndex);
    onExpertChange?.(experts[newIndex], newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentExpertIndex + 1) % experts.length;
    setCurrentExpertIndex(newIndex);
    onExpertChange?.(experts[newIndex], newIndex);
  };

  const handleExpertSelect = (index: number) => {
    setCurrentExpertIndex(index);
    onExpertChange?.(experts[index], index);
  };

  if (!experts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No experts available.</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-0">
              {/* Navigation Sidebar */}
              <div className="xl:col-span-1 bg-muted/30 p-6 flex flex-col justify-center">
                <div className="text-center xl:text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
                  
                  {/* Expert List */}
                  <div className="space-y-3 mb-8">
                    {experts.map((expert, index) => (
                      <button
                        key={index}
                        onClick={() => handleExpertSelect(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          index === currentExpertIndex
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-background hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="font-medium text-sm">{expert.name}</div>
                        <div className="text-xs opacity-80">{expert.specialization}</div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-center xl:justify-start gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handlePrevious}
                      className="rounded-full w-10 h-10 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
                      {currentExpertIndex + 1} of {experts.length}
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

              {/* Main Content */}
              <div className="xl:col-span-3">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${containerHeight}`}>
                  {/* Image Section */}
                  <div className="relative h-full lg:h-auto overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-500"
                      style={{ backgroundImage: `url(${currentExpert.image})` }}
                    />
                    <img
                      src={currentExpert.image}
                      alt={`${currentExpert.name} - ${currentExpert.title}`}
                      className="w-full h-full object-cover relative z-10 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-20" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="text-white">
                        <h2 className="text-3xl font-bold mb-2 transition-all duration-300">{currentExpert.name}</h2>
                        <p className="text-xl text-white/90 mb-4 transition-all duration-300">{currentExpert.title}</p>
                        <div className="flex items-center space-x-4 text-sm text-white/80">
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {currentExpert.category === 'preeminent-experts' ? '35+ Years Experience' : 'Leadership Excellence'}
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
                  <div className="p-12 lg:p-16 flex flex-col justify-center h-full overflow-y-auto">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4 transition-all duration-300">{currentExpert.specialization}</h3>
                      <div className="space-y-6 text-muted-foreground leading-relaxed">
                        {currentExpert.fullBio ? (
                          currentExpert.fullBio.slice(0, 2).map((paragraph, index) => (
                            <p key={index} className="transition-all duration-300">{paragraph}</p>
                          ))
                        ) : (
                          <p className="transition-all duration-300">{currentExpert.bio}</p>
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
                              <p className="text-muted-foreground transition-all duration-300">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    {(showContactButton || showLearnMoreButton) && (
                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        {showContactButton && (
                          <Button size="lg" className="flex-1">
                            <Users className="h-4 w-4 mr-2" />
                            Contact Expert
                          </Button>
                        )}
                        {showLearnMoreButton && (
                          <Button variant="outline" size="lg" className="flex-1">
                            Learn More
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Related Expertise Section */}
      {showExpertiseSection && currentExpert.expertise && (
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
    </section>
  );
};

export default ExpertSlideshow; 