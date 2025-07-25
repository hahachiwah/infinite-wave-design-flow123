import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, MapPin } from 'lucide-react';

const Municipal = () => {
  const municipalData = [
    {
      title: "Remote Communities",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=500&fit=crop",
      content: "Remote communities face additional and unique challenges to solving water and waste water treatment challenges.\n\nOur team considers the following five factors in designing a tailored solution:\n\n• Budget\n• System reliability and robustness\n• Ability to handle source water variability\n• Ease of operation\n• Ease of ongoing maintenance and serviceability\n\nWe offer decentralised standalone solutions for:\n\n• Potable water treatment of groundwater and surface water sources\n• Sewage treatment and recycling to improve sustainability"
    },
    {
      title: "Regional Councils",
      icon: Building,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop",
      content: "We understand that budget and reliability are key to regional councils when making water treatment decisions.\n\nWe work in collaboration with regional councils to address their challenges and often run a series of tests and analyses in our laboratory to ensure our methods and solutions attaining the best results prior to implementation of onsite pilots or full scale projects.\n\nImproving potable water quality\n\nInfinite water offers cutting edge technology to improve water quality in existing infrastructure or standalone processes. Our solutions address challenges including:\n\n• High turbidity and suspended solids\n• Spikes in THM's, HAA's and disinfection by-products (DBP's)\n• Pathogens (viruses, bacteria, protozoa)\n• Heavy metals\n• High colour\n• High phosphorous\n• Bad taste and odour\n\nSee our potable use application page for more details.\n\nImproving wastewater quality\n\nOur Hydroxon™ technology serves as an excellent advanced treatment process used to polish secondary effluent and achieve high quality wastewater that can be safely discharged into water bodies or recycled for unrestricted use including irrigation of local parks and gardens.\n\nThe Hydroxon™ process:\n\n• Degrades pathogens and provides independently verified high level disinfection\n• Significant improvement in aesthetic properties including colour, odour and turbidity\n• Significant improvement in chemical properties (e.g. reduction in metals, organic matter, total phosphorus and organic nitrogen)\n\nOur technology selection is specifically targeted and optimised our clients' challenges to deliver the best outcome.\n\nSee our sewage treatment and recycling page for more details."
    },
    {
      title: "Urban Utilities",
      icon: Users,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=500&fit=crop",
      content: "Our technologies are easily retrofitted into existing infrastructure to improve overall drinking water and wastewater quality.\n\nWe work with urban utilities to address their challenges and often run a series of tests and analyses in our laboratory to ensure our methods and solutions are attaining the best results prior to implementation of onsite pilots or full scale integration of our solutions.\n\nOur technology selection is specifically targeted and optimised our clients' specific challenges to deliver the best outcome.\n\nImproving potable water quality\n\nInfinite water offers cutting edge technology to improve water quality in existing infrastructure. Our solutions address challenges including:\n\n• High turbidity and suspended solids\n• Spikes in THM's, HAA's and disinfection by-products (DBP's)\n• Pathogens (viruses, bacteria, protozoa)\n• Heavy metals\n• High colour\n• High phosphorous\n• Bad taste and odour\n\nSee our potable use application page for more details.\n\nImproving wastewater quality\n\nOur Hydroxon™ technology serves as an excellent advanced treatment process used to polish secondary effluent and achieve high quality wastewater that can be safely discharged into water bodies or recycled for unrestricted use including irrigation of local parks and gardens.\n\nThe Hydroxon™ process:\n\n• Degrades pathogens and provides independently verified high level disinfection\n• Significant improvement in aesthetic properties including colour, odour and turbidity\n• Significant improvement in chemical properties (e.g. reduction in metals, organic matter, total phosphorus and organic nitrogen)\n\nOur technology selection is specifically targeted and optimised our clients' challenges to deliver the best outcome.\n\nSee our sewage treatment and recycling page for more details."
    }
  ];

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className={line.trim() === '' ? 'mb-4' : 'mb-2 text-muted-foreground leading-relaxed'}>
        {line.startsWith('•') ? (
          <span className="flex items-start gap-2">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            {line.substring(1).trim()}
          </span>
        ) : (
          line
        )}
      </p>
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=800&fit=crop')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Municipal Water <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Comprehensive water treatment solutions for municipal applications across remote communities, regional councils, and urban utilities.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 max-w-7xl mx-auto">
              {municipalData.map((section, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <section.icon className="h-12 w-12 mb-2" />
                        <h3 className="text-2xl font-bold">{section.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full">
                      <section.icon className="h-5 w-5" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      {formatText(section.content)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Municipal Water Systems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your specific municipal water treatment needs and discover how our innovative solutions can benefit your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Consultation
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Municipal;