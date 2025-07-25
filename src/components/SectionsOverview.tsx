import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SectionsOverview = () => {
  const sections = [
    {
      title: 'Case Studies',
      description: 'Real-world applications of our technology solving complex water treatment challenges across mining, industrial, and municipal sectors.',
      image: 'https://images.unsplash.com/photo-1581092582187-db9c84842cbb?w=800&h=400&fit=crop',
      link: '/case-studies'
    },
    {
      title: 'Proprietary Technology',
      description: 'Our patented water treatment innovations including Hydroxon™, Advanced Catalytic Oxidation, and Advanced Oxidation Processes.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop',
      link: '/technology'
    },
    {
      title: 'Applications',
      description: 'Versatile water treatment solutions for drinking water, industrial processes, wastewater treatment, and environmental remediation.',
      image: 'https://images.unsplash.com/photo-1569163139707-de2daa3e3cd3?w=800&h=400&fit=crop',
      link: '/applications'
    },
    {
      title: 'Contaminants We Remove',
      description: 'Comprehensive removal of challenging contaminants including heavy metals, PFAS, pesticides, and natural organic matter.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop',
      link: '/contaminants'
    },
    {
      title: 'About Us',
      description: 'Discover our competitive advantages, proven results, cost-effectiveness, and commitment to sustainable water treatment solutions.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
      link: '/about-us'
    },
    {
      title: 'Contact & Consultation',
      description: 'Get in touch with our experts for customized water treatment solutions and technical consultations for your specific needs.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      link: '/contact'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Water Treatment Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete range of proprietary technologies, proven case studies, and innovative solutions.
          </p>
        </div>
      </div>

      <div className="space-y-2.5">{/* 10px margin between banners */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className="group relative overflow-hidden hover:shadow-large transition-smooth w-full"
            >
              <div className="relative h-96 md:h-80">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                
                {/* Overlay - Different gradient direction for alternating effect */}
                <div className={`absolute inset-0 ${
                  isEven 
                    ? 'bg-gradient-to-r from-background/95 via-background/80 to-background/30' 
                    : 'bg-gradient-to-l from-background/95 via-background/80 to-background/30'
                }`} />
                
                {/* Content - Alternating left/right alignment */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-8">
                    <div className={`max-w-2xl ${isEven ? 'ml-0' : 'ml-auto text-right'}`}>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {section.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {section.description}
                      </p>
                      
                      <Link to={section.link}>
                        <Button 
                          size="lg" 
                          className="shadow-medium group-hover:shadow-glow transition-smooth"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to solve your water treatment challenges?
            </h3>
            <p className="text-muted-foreground mb-8">
              Contact our experts for a consultation and discover how our proprietary technology 
              can provide the optimal solution for your specific water treatment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="shadow-medium">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionsOverview;