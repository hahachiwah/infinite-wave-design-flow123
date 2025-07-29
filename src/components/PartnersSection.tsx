import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { getImagePath } from '@/data/images';

const PartnersSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const partners = [
    {
      name: 'University of Queensland',
      category: 'Research Institution',
      imageName: 'partner-university-queensland'
    },
    {
      name: 'UNSW Sydney',
      category: 'Research Institution',
      imageName: 'partner-unsw-sydney'
    },
    {
      name: 'UTS Sydney',
      category: 'Research Institution',
      imageName: 'partner-uts-sydney'
    },
    {
      name: 'Water Corporation',
      category: 'Utility Company',
      imageName: 'partner-water-corporation'
    },
    {
      name: 'Westland Milk Products',
      category: 'Industrial Partner',
      imageName: 'partner-westland-milk'
    },
    {
      name: 'Xstrata',
      category: 'Industrial Partner',
      imageName: 'partner-xstrata'
    },
    {
      name: 'Alano',
      category: 'Industrial Partner',
      imageName: 'partner-alano'
    },
    {
      name: 'Australian Aid',
      category: 'Government',
      imageName: 'partner-australian-aid'
    },
    {
      name: 'Freedom Lifestyle Villages',
      category: 'Industrial Partner',
      imageName: 'partner-freedom-lifestyle'
    },
    {
      name: 'Fonterra',
      category: 'Industrial Partner',
      imageName: 'partner-fonterra'
    },
    {
      name: 'Multiplex',
      category: 'Construction',
      imageName: 'partner-multiplex'
    },
    {
      name: 'Narromine Shire Council',
      category: 'Government',
      imageName: 'partner-narromine-shire'
    },
    {
      name: 'OJI',
      category: 'Industrial Partner',
      imageName: 'partner-oji'
    },
    {
      name: 'Schutz',
      category: 'Industrial Partner',
      imageName: 'partner-schutz'
    },
    {
      name: 'Sealed Air',
      category: 'Industrial Partner',
      imageName: 'partner-sealed-air'
    },
    {
      name: 'Sydney Water',
      category: 'Utility Company',
      imageName: 'partner-sydney-water'
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to drive innovation in water treatment technology.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="group bg-card rounded-lg p-6 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img 
                      src={getImagePath(partner.imageName, 'default-partner') || ''} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {partner.category}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;