import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Municipal = () => {
  const municipalData = {
    "Remote Communities": "Remote communities face additional and unique challenges to solving water and waste water treatment challenges.\n\nOur team considers the following five factors in designing a tailored solution:\n\nBudget\nSystem reliability and robustness\nAbility to handle source water variability\nEase of operation\nEase of ongoing maintenance and serviceability\n\nWe offer decentralised standalone solutions for\n\nPotable water treatment of groundwater and surface water sources\nSewage treatment and recycling to improve sustainability",
    "Regional Councils": "We understand that budget and reliability are key to regional councils when making water treatment decisions.\n\nWe work in collaboration with regional councils to address their challenges and often run a series of tests and analyses in our laboratory to ensure our methods and solutions attaining the best results prior to implementation of onsite pilots or full scale projects.\n\nImproving potable water quality\n\nInfinite water offers cutting edge technology to improve water quality in existing infrastructure or standalone processes. Our solutions address challenges including:\n\nHigh turbidity and suspended solids\nSpikes in THM's, HAA's and disinfection by-products (DBP's)\nPathogens (viruses, bacteria, protozoa)\nHeavy metals\nHigh colour\nHigh phosphorous\nBad taste and odour\n\nSee our potable use application page for more details.\n\nImproving wastewater quality\n\nOur Hydroxon™ technology serves as an excellent advanced treatment process used to polish secondary effluent and achieve high quality wastewater that can be safely discharged into water bodies or recycled for unrestricted use including irrigation of local parks and gardens.\n\nThe Hydroxon™ process\n\nDegrades pathogens and provides independently verified high level disinfection\nSignificant improvement in aesthetic properties including colour, odour and turbidity\nSignificant improvement in chemical properties (e.g. reduction in metals, organic matter, total phosphorus and organic nitrogen)\n\nOur technology selection is specifically targeted and optimised our clients' challenges to deliver the best outcome.\n\nSee our sewage treatment and recycling page for more details.",
    "Urban Utilities": "Our technologies are easily retrofitted into existing infrastructure to improve overall drinking water and wastewater quality.\n\nWe work with urban utilities to address their challenges and often run a series of tests and analyses in our laboratory to ensure our methods and solutions are attaining the best results prior to implementation of onsite pilots or full scale integration of our solutions.\n\nOur technology selection is specifically targeted and optimised our clients' specific challenges to deliver the best outcome.\n\nImproving potable water quality\n\nInfinite water offers cutting edge technology to improve water quality in existing infrastructure. Our solutions address challenges including:\n\nHigh turbidity and suspended solids\nSpikes in THM's, HAA's and disinfection by-products (DBP's)\nPathogens (viruses, bacteria, protozoa)\nHeavy metals\nHigh colour\nHigh phosphorous\nBad taste and odour\n\nSee our potable use application page for more details.\n\nImproving wastewater quality\n\nOur Hydroxon™ technology serves as an excellent advanced treatment process used to polish secondary effluent and achieve high quality wastewater that can be safely discharged into water bodies or recycled for unrestricted use including irrigation of local parks and gardens.\n\nThe Hydroxon™ process\n\nDegrades pathogens and provides independently verified high level disinfection\nSignificant improvement in aesthetic properties including colour, odour and turbidity\nSignificant improvement in chemical properties (e.g. reduction in metals, organic matter, total phosphorus and organic nitrogen)\n\nOur technology selection is specifically targeted and optimised our clients' challenges to deliver the best outcome.\n\nSee our sewage treatment and recycling page for more details."
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className={line.trim() === '' ? 'mb-4' : 'mb-2'}>
        {line}
      </p>
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Municipal Water Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive water treatment solutions for municipal applications across remote communities, regional councils, and urban utilities.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 max-w-6xl mx-auto">
              {Object.entries(municipalData).map(([title, content], index) => (
                <Card key={index} className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl text-primary">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    {formatText(content)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Municipal;