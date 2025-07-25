import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Lightbulb, Briefcase, GraduationCap, Building2, Leaf, Target, Globe, BookOpen, Microscope, Users, Award } from "lucide-react";
import { Expert } from "@/types/expert";

interface ExpertPageTemplateProps {
  expert: Expert;
  backLink?: string;
  backText?: string;
}

const iconMap = {
  Heart,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Building2,
  Leaf,
  Target,
  Globe,
  BookOpen,
  Microscope,
  Users,
  Award
};

const ExpertPageTemplate = ({ expert, backLink = "/about-us/preeminent-experts", backText = "Back to Experts" }: ExpertPageTemplateProps) => {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : <Heart className="h-6 w-6" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <Link to={backLink}>
                <Button variant="ghost" size="sm" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {backText}
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">{expert.title}</Badge>
                <h1 className="text-4xl font-bold mb-6 text-foreground">{expert.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {expert.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{expert.specialization}</Badge>
                  {expert.expertise?.slice(0, 2).map((area, index) => (
                    <Badge key={index} variant="outline">{area.title}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <Card className="overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${expert.image})` }}
                  />
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-auto object-contain relative z-10"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        {expert.fullBio && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Biography</h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  {expert.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Areas of Expertise */}
        {expert.expertise && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expert.expertise.map((area, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="text-primary mb-2">{renderIcon(area.icon)}</div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Achievements */}
        {expert.achievements && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
                
                <div className="grid gap-4">
                  {expert.achievements.map((achievement, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-foreground">{achievement}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Education */}
        {expert.education && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Education & Qualifications</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {expert.education.map((edu, index) => (
                    <Card key={index} className="p-6">
                      <div className="text-primary mb-4">
                        <GraduationCap className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                        {edu.details && <><br />{edu.details}</>}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ExpertPageTemplate;