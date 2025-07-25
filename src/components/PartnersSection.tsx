import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const PartnersSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const partners = [
    {
      name: 'University of Queensland',
      category: 'Research Institution',
      logo: '/lovable-uploads/477e690f-5885-48a2-b986-85362f3f6caa.png'
    },
    {
      name: 'UNSW Sydney',
      category: 'Research Institution',
      logo: '/lovable-uploads/8bcf1e74-d850-4bde-93d8-690e34e6ba25.png'
    },
    {
      name: 'UTS Sydney',
      category: 'Research Institution',
      logo: '/lovable-uploads/832973b9-ee0e-40f4-ad25-e34dfd42f701.png'
    },
    {
      name: 'Water Corporation',
      category: 'Utility Company',
      logo: '/lovable-uploads/64d79107-03a1-4078-8268-06d438d4e73f.png'
    },
    {
      name: 'Westland Milk Products',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/783d540b-a9cf-4309-ada6-9657d99bd8f9.png'
    },
    {
      name: 'Xstrata',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/feb54366-a8ca-4d04-ba53-76edb8289ece.png'
    },
    {
      name: 'Alano',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/e43bf717-791c-448d-bc4c-cbcb1918d37c.png'
    },
    {
      name: 'Australian Aid',
      category: 'Government',
      logo: '/lovable-uploads/b02c1a37-3c68-4fcc-b5c4-b630929a9a0c.png'
    },
    {
      name: 'Freedom Lifestyle Villages',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/849bf037-c412-438e-95a1-27eaca8cfe5a.png'
    },
    {
      name: 'Fonterra',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/451f66e4-4bd0-4272-911a-f76f62a0be5d.png'
    },
    {
      name: 'Multiplex',
      category: 'Construction',
      logo: '/lovable-uploads/5d9a39f1-cfce-46c3-b940-8a9de2c8e4b8.png'
    },
    {
      name: 'Narromine Shire Council',
      category: 'Government',
      logo: '/lovable-uploads/65f160dc-4c3c-494d-9e80-541bdc3a2a70.png'
    },
    {
      name: 'OJI',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/8be17a64-f64a-40a5-9531-12daa932cd23.png'
    },
    {
      name: 'Schutz',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/82b47e25-afe6-415a-9d49-1a0528920cad.png'
    },
    {
      name: 'Sealed Air',
      category: 'Industrial Partner',
      logo: '/lovable-uploads/ed1767dd-3b17-4219-abac-5ad286652fa4.png'
    },
    {
      name: 'Sydney Water',
      category: 'Utility Company',
      logo: '/lovable-uploads/8d653f41-3935-45c7-a898-8d75231a5350.png'
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
                      src={partner.logo} 
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