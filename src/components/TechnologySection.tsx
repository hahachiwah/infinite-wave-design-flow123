import { Zap, Target, Award, CheckCircle, BarChart3, FlaskConical, ChevronLeft, ChevronRight, Shield, DollarSign, Recycle, Activity, Award as Award2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const TechnologySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const catFeatures = [
    {
      title: "Proprietary Catalytic Mechanism for Radical Generation",
      icon: FlaskConical,
      overview: "CAT employs a multi-metal oxide granular catalyst in a simple reactor setup (similar to a mixed media filter). Charged sites on the catalyst split water molecules (H₂O → H⁺ + OH⁻) and decompose low-cost oxygen donors (e.g., NaOCl, permanganate, or H₂O₂) to release atomic oxygen and generate highly reactive hydroxyl radicals (•OH, redox potential 2.8V), enabling rapid oxidation of organics into CO₂, water, and salts, while also oxidizing inorganics and disinfecting pathogens.",
      unique: "Unlike homogeneous AOPs (e.g., Fenton or UV/H₂O₂) that rely on bulk chemical mixing or energy-intensive UV lamps, CAT is heterogeneous and catalyst-driven, offering reusability and efficiency without external energy sources like electricity for ozone generation or UV, avoiding issues like short oxidant half-life or pH sensitivity.",
      comparison: "CAT is hundred times more powerful and energy efficient in terms of oxidating contaminants without drawbacks in traditional AOPs like photocatalysis (TiO₂/UV) or electrochemical AOPs, while biological treatments are ineffective against recalcitrant pollutants.",
      advantage: "Achieves complete mineralization of pollutants faster than conventional oxidants (e.g., chlorine at 1.36V or NaOCl at 0.95V), with reaction rates 10^8–10^10 M⁻¹s⁻¹ for •OH."
    },
    {
      title: "Ultra-Low Energy and Operational Costs",
      icon: DollarSign,
      overview: "The system operates with minimal energy input, consuming approximately 0.1 kWh/m³, and requires only 3–6 minutes of contact time for effective treatment, eliminating the need for expensive instrumentation or high-pressure pumps.",
      unique: "Unlike systems requiring regeneration (e.g., activated carbon) or complex setups, CAT offers a smaller footprint and easy retrofitting into existing systems without the need for high-energy processes.",
      comparison: "Far below reverse osmosis (RO: 2.0–2.5 kWh/m³), ozonation (0.5–2.5 USD/m³), or UV/H₂O₂ (1.0–4.0 USD/m³). Biological treatments (0.2–0.8 USD/m³) are cheaper but offer lower efficiency (only 10–40% removal for dyes/organics).",
      advantage: "Combines high efficiency (90–99% contaminant removal) with low OPEX, making it ESG-compliant and cost-competitive, with notionally 50% better OPEX than current solutions."
    },
    {
      title: "No Sludge or Waste Byproducts",
      icon: Recycle,
      overview: "Pollutants are degraded on-site through catalytic oxidation, with minimal solids removed via automated backwash, resulting in no sludge or concentrate generation.",
      unique: "Provides true destruction of contaminants rather than mere transfer, supporting zero liquid discharge (ZLD) goals without the disposal challenges typical of other methods.",
      comparison: "Unlike coagulation-flocculation (high sludge production) or Fenton processes (iron sludge disposal costs), and avoids concentrate waste from RO or adsorbed pollutants from activated carbon that require regeneration.",
      advantage: "Achieves high water recovery (up to 95% vs. RO's 50–70%), reducing environmental impact and operational hassles."
    },
    {
      title: "Broad-Spectrum Contaminant Removal and Disinfection",
      icon: Shield,
      overview: "The technology simultaneously removes organics (e.g., 69% DOC reduction), inorganics (e.g., 91–99% for Fe, Mn, Al), turbidity (>99%), color (>99%), and emerging contaminants (e.g., PFAS, glyphosate), while providing disinfection with log reduction values (LRV) exceeding standards: >5.7 for bacteria, >8.0 for viruses, ≥4.6 for protozoa.",
      unique: "Multi-functional in one process—disinfection, oxidation, and precipitation—without added chlorine, reducing disinfection byproducts (DBPs) by up to 70%, and effective for tough issues like algal bloom prevention (99.5% phosphorus removal) and heavy metals (e.g., antimony to 0.01 mg/L).",
      comparison: "Membrane filtration (UF/NF/RO: 80–99% efficiency but prone to fouling and high maintenance) or activated carbon (70–95% but limited scope) handle fewer contaminants per step. Standard AOPs like ozonation produce more byproducts and cost more.",
      advantage: "Validated by third parties (e.g., UNSW, WHO standards) for superior performance across diverse applications, from rural water supply to industrial wastewater."
    },
    {
      title: "Validated Performance and Scalability",
      icon: Award2,
      overview: "The modular and scalable design suits applications from small community systems to large industrial setups, with independent validations confirming its efficacy through third-party tests (e.g., UNSW, Sydney Water trials).",
      unique: "Designed for easy integration and automation, with remote access and disruptive innovations in CAPEX reduction, tailored for diverse needs.",
      comparison: "Outperforms progressive industry goals (e.g., ZDHC standards for global suppliers like Nike/Adidas), where current solutions fall short in cost and efficiency.",
      advantage: "Positions Infinite Water as a leader in sustainable treatment, especially for emerging contaminants and water reuse, with real-world reliability proven through trials."
    }
  ];

  const carouselContent = [
    {
      title: "Overall Process Overview",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold mb-2">Core Mechanism</h5>
            <p className="text-muted-foreground text-sm">
              Water flows through a series of tanks where proprietary chemicals and catalysts facilitate oxidation. The catalyst (multi-metal oxide granules) is not consumed but accelerates reactions by splitting water (H₂O → H⁺ + OH⁻) and decomposing oxygen donors (e.g., NaOCl → NaCl + O, or H₂O₂/permanganate) to release atomic oxygen, forming ·OH radicals (redox potential 2.8V).
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Key Features</h5>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Energy/Cost Efficiency: ~0.1 kWh/m³ (vs. 2–5 kWh/m³ for RO or UV-based AOPs)</li>
              <li>• Validation: Independently tested (UNSW Global Water Institute)</li>
              <li>• Scalability: Modular design from small communities to industrial wastewater</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Stage 1: Conditioning",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold mb-2">Components</h5>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• <strong>Pump:</strong> Raw water pumped into Conditioning Tank</li>
              <li>• <strong>Chemicals:</strong> Proprietary reagents for pH adjustment</li>
              <li>• <strong>Conditioning Tank:</strong> Mixing vessel where reactions begin</li>
              <li>• <strong>Drainage:</strong> Bottom settling and disposal of large solids</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">How It Works</h5>
            <p className="text-muted-foreground text-sm">
              Raw water is dosed with chemicals to correct pH (6–8) and initiate preliminary oxidation. Large suspended solids settle via gravity, reducing turbidity and preventing clogging. Residence time: 3–6 minutes with mixing for homogeneity.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Stage 2: Catalytic Advanced Oxidation",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold mb-2">CAO Reactor</h5>
            <p className="text-muted-foreground text-sm">
              Main vessel containing the catalyst bed where conditioned water flows through multi-metal oxide granules (Mn/Fe-based catalysts) in a fixed bed setup similar to a filter.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Key Reactions</h5>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Radical generation: Catalyst sites split H₂O and donors</li>
              <li>• Pathogen destruction: {'>'}6 log reduction for viruses</li>
              <li>• Heavy metal precipitation: Fe²⁺ → Fe³⁺ oxidation</li>
              <li>• Chemical/organic degradation: 69–99% reduction in DOC, color, turbidity</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <section id="technology" className="py-24 bg-background">
        <div className="w-full px-2.5">

        <div className="max-w-7xl mx-auto">

          {/* Core Concept of CAT */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-8">Core Concept of CAT</h2>
          </div>
          <div className="bg-background py-16 -mx-[calc(50vw-50%)] px-[calc(50vw-50%)] mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Image taking full card area */}
                <Card className="p-0 overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity">
                          <img 
                            src="/lovable-uploads/5c360a7b-0769-46b4-a4cc-0eba0ec52e9a.png" 
                            alt="CAT Process Diagram showing Stage 1 Conditioning and Stage 2 Catalytic Advanced Oxidation"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0">
                        <img 
                          src="/lovable-uploads/5c360a7b-0769-46b4-a4cc-0eba0ec52e9a.png" 
                          alt="CAT Process Diagram showing Stage 1 Conditioning and Stage 2 Catalytic Advanced Oxidation"
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
                
                {/* Right side - Carousel */}
                <Card className="p-6 relative">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold">{carouselContent[currentSlide].title}</h4>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevSlide}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextSlide}
                          className="h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="min-h-[300px]">
                      {carouselContent[currentSlide].content}
                    </div>
                    
                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {carouselContent.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors border ${
                            index === currentSlide 
                              ? 'bg-primary border-primary' 
                              : 'bg-primary/40 border-primary/60 hover:bg-primary/60'
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Unique Technological Features */}
          <div className="bg-primary/10 py-16 -mx-[calc(50vw-50%)] px-[calc(50vw-50%)] mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Unique Technological Features of CAT (Catalytic Advanced Oxidation)
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Infinite Water's CAT process, based on Catalytic Advanced Oxidation, stands out in the water treatment industry by addressing key limitations of conventional and other advanced methods. Unlike traditional technologies that often transfer pollutants to another phase (e.g., sludge or concentrate) or require high energy/chemical inputs, CAT destroys contaminants in situ through a low-energy catalytic reaction.
                </p>
              </div>

              {/* CAT Features Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentFeature * 100}%)` }}
                  >
                    {catFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="h-full">
                          <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                <feature.icon className="w-6 h-6 text-primary" />
                              </div>
                              <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                            </div>
                            
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Feature Overview:</h4>
                                <p className="text-muted-foreground leading-relaxed">{feature.overview}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">What Makes It Unique:</h4>
                                <p className="text-muted-foreground leading-relaxed">{feature.unique}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Comparison to Competitors:</h4>
                                <p className="text-muted-foreground leading-relaxed">{feature.comparison}</p>
                              </div>
                              
                              <div className="bg-primary/5 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-2 text-primary">Standout Advantage:</h4>
                                <p className="text-muted-foreground leading-relaxed">{feature.advantage}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={() => setCurrentFeature(currentFeature === 0 ? catFeatures.length - 1 : currentFeature - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={() => setCurrentFeature((currentFeature + 1) % catFeatures.length)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {catFeatures.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors border ${
                      index === currentFeature 
                        ? 'bg-primary border-primary' 
                        : 'bg-primary/40 border-primary/60 hover:bg-primary/60'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Validated Performance */}
          <div className="bg-muted/40 py-16 -mx-[calc(50vw-50%)] px-[calc(50vw-50%)]">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">Validated Performance</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold mb-4">Disinfection Performance</h4>
                    <p className="text-muted-foreground mb-4">
                      Independently validated by UNSW Global Water Institute and others. Log Reduction Values (LRV) exceed standards:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Drinking Water (vs. ADWG):</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Bacteria (E. coli): {'>'}4.1 (exceeds 4)</li>
                          <li>• Viruses (MS2): {'>'}6.3 (exceeds 5)</li>
                          <li>• Protozoa (Cryptosporidium): {'>'}4.2 (exceeds 4)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Recycled Water (vs. AGWR/QLD A+):</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Bacteria: {'>'}5.7 (exceeds 5.0)</li>
                          <li>• Viruses: {'>'}8.0 (exceeds 6.5)</li>
                          <li>• Protozoa: ≥4.6 (meets/exceeds 5.0)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold mb-4">Surface Water Treatment Results</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Parameter</th>
                            <th className="text-left py-2">Raw</th>
                            <th className="text-left py-2">Treated</th>
                            <th className="text-left py-2">Reduction</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b">
                            <td className="py-1">DOC (mg/L)</td>
                            <td>8.7</td>
                            <td>2.7</td>
                            <td className="text-primary font-medium">69.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-1">Turbidity (NTU)</td>
                            <td>24.7</td>
                            <td>&lt;0.1</td>
                            <td className="text-primary font-medium">99.6%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-1">Colour (PCU)</td>
                            <td>100</td>
                            <td>&lt;1</td>
                            <td className="text-primary font-medium">99.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-1">Manganese (mg/L)</td>
                            <td>0.08</td>
                            <td>0.02</td>
                            <td className="text-primary font-medium">75.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-1">Iron (mg/L)</td>
                            <td>0.96</td>
                            <td>0.08</td>
                            <td className="text-primary font-medium">91.7%</td>
                          </tr>
                          <tr>
                            <td className="py-1">Aluminium (mg/L)</td>
                            <td>0.87</td>
                            <td>&lt;0.01</td>
                            <td className="text-primary font-medium">98.9%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default TechnologySection;