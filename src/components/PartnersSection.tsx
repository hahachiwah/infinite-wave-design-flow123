const PartnersSection = () => {
  const partners = [
    {
      name: 'University of Queensland',
      category: 'Research Institution',
      logo: 'UQ'
    },
    {
      name: 'UNSW Sydney',
      category: 'Research Institution', 
      logo: 'UNSW'
    },
    {
      name: 'UTS Sydney',
      category: 'Research Institution',
      logo: 'UTS'
    },
    {
      name: 'Water Corporation',
      category: 'Utility Company',
      logo: 'WC'
    },
    {
      name: 'Fonterra',
      category: 'Industrial Partner',
      logo: 'FON'
    },
    {
      name: 'Multiplex',
      category: 'Construction',
      logo: 'MUL'
    },
    {
      name: 'Australian Aid',
      category: 'Government',
      logo: 'AUS'
    },
    {
      name: 'Westland',
      category: 'Industrial Partner',
      logo: 'WES'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research Institution':
        return 'text-blue-600';
      case 'Utility Company':
        return 'text-green-600';
      case 'Industrial Partner':
        return 'text-purple-600';
      case 'Construction':
        return 'text-orange-600';
      case 'Government':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading institutions, corporations, and government organizations to drive innovation in water treatment technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 hover:shadow-medium transition-smooth text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-base">
                <span className="text-lg font-bold text-primary">{partner.logo}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className={`text-sm ${getCategoryColor(partner.category)}`}>
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm">Global Partners</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm">Years Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;