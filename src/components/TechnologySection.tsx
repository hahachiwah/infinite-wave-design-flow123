import { Zap, Target, Award, CheckCircle, BarChart3, FlaskConical, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const TechnologySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section id="technology" className="py-24 gradient-subtle">
      <div className="w-full px-2.5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A game-changing <span className="text-primary">AOP Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Catalytic Advanced Treatment (CAT) is a water treatment process, an Advanced Oxidation process or AOP, based on Catalytic Advanced Oxidation, Catalytic Oxidation and Co-precipitation with disruptive features.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-large transition-smooth">
              <CardContent className="p-0">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">AOP without Traditional Drawbacks</h3>
                <p className="text-muted-foreground">An AOP without the associated traditional drawbacks</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-large transition-smooth">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Highly Adaptable</h3>
                <p className="text-muted-foreground">Highly adaptable and easily integrated with existing systems</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-large transition-smooth">
              <CardContent className="p-0">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">ESG Compliant</h3>
                <p className="text-muted-foreground">ESG compliant but also with compelling cost advantage</p>
              </CardContent>
            </Card>
          </div>

          {/* Core Concept of CAT */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Core Concept of CAT</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Unique Technological Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Unique Technological Features of Hydroxon™ (Catalytic Advanced Oxidation)</h3>
            
            {/* Feature 1 */}
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-primary mb-4">1. Proprietary Catalytic Mechanism for Radical Generation</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Process Description</h5>
                    <p className="text-muted-foreground mb-4">
                      Hydroxon™ uses a multi-metal oxide granular catalyst in a simple reactor setup (similar to a mixed media filter). Water flows through the bed, where charged sites on the catalyst split water molecules (H₂O → H⁺ + OH⁻) and decompose low-cost oxygen donors (e.g., NaOCl, permanganate, or H₂O₂) to release atomic oxygen and generate highly reactive species like hydroxyl radicals (•OH, redox potential 2.8V).
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">What Makes It Unique</h5>
                    <p className="text-muted-foreground mb-4">
                      Unlike homogeneous AOPs (e.g., Fenton or UV/H₂O₂) that rely on bulk chemical mixing or energy-intensive UV lamps, Hydroxon™ is heterogeneous and catalyst-driven, making it reusable and efficient without external energy sources like electricity for ozone generation or UV.
                    </p>
                    <p className="text-primary font-semibold">
                      Achieves complete mineralization with reaction rates 10⁸–10¹⁰ M⁻¹s⁻¹ for •OH.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-primary mb-4">2. Ultra-Low Energy and Operational Costs</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Key Metric</h5>
                    <p className="text-muted-foreground">
                      Consumes ~0.1 kWh/m³, far below reverse osmosis (RO: 2.0–2.5 kWh/m³), ozonation (0.5–2.5 USD/m³), or UV/H₂O₂ (1.0–4.0 USD/m³).
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Unique Features</h5>
                    <p className="text-muted-foreground">
                      No need for expensive instrumentation, high-pressure pumps (like in membranes), or regeneration (like activated carbon). Contact time is just 3–6 minutes, enabling a smaller footprint and retrofitting into existing systems.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Competitive Advantage</h5>
                    <p className="text-muted-foreground">
                      Combines high efficiency (90–99% removal) with low OPEX, making it ESG-compliant and cost-competitive compared to traditional AOPs that demand high energy for UV or electrodes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-primary mb-4">3. No Sludge or Waste Byproducts</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Process Benefit</h5>
                    <p className="text-muted-foreground">
                      Pollutants are degraded on-site without generating sludge, unlike coagulation-flocculation (high sludge) or Fenton processes (iron sludge disposal costs). Backwash removes minimal solids, and the system is automated with remote access.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Standout Advantage</h5>
                    <p className="text-muted-foreground">
                      True destruction rather than transfer—e.g., no concentrate waste like RO or adsorbed pollutants needing disposal like activated carbon. Supports zero liquid discharge (ZLD) goals, with high water recovery (up to 95% vs. RO's 50–70%).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-primary mb-4">4. Broad-Spectrum Contaminant Removal and Disinfection</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Capabilities</h5>
                    <p className="text-muted-foreground mb-4">
                      Simultaneously removes organics (e.g., 69% DOC reduction), inorganics (e.g., 91–99% for Fe, Mn, Al), turbidity ({'>'}99%), color ({'>'}99%), and emerging contaminants (e.g., PFAS, glyphosate).
                    </p>
                    <p className="text-muted-foreground">
                      Achieves superior disinfection with log reduction values (LRV) exceeding standards: {'>'}5.7 for bacteria, {'>'}8.0 for viruses, ≥4.6 for protozoa (validated by UNSW and WHO standards).
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Multi-functional Process</h5>
                    <p className="text-muted-foreground mb-4">
                      Multi-functional in one process—disinfection, oxidation, and precipitation—without added chlorine (reduces DBPs by up to 70%). Effective for tough applications like algal bloom prevention (99.5% phosphorus removal) and heavy metals (e.g., antimony to 0.01 mg/L, 50% below 2025 goals).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-primary mb-4">5. Validated Performance and Scalability</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Independent Validation</h5>
                    <p className="text-muted-foreground">
                      Third-party tested (e.g., UNSW Global Water Institute, Sydney Water trials for NOM removal), proving it outperforms progressive goals (e.g., ZDHC standards for suppliers like Nike/Adidas).
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Scalable Design</h5>
                    <p className="text-muted-foreground">
                      Modular, scalable design suits diverse applications—from small rural/disaster relief systems to industrial wastewater (e.g., textile, metal plating) and ultrapure water production. Notionally 50% better OPEX than current solutions, with disruptive innovation in CAPEX reduction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* How CAT Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">How CAT Works</h3>
            <Card className="p-8">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-6">Multi-Functionality</h4>
                <p className="text-muted-foreground mb-6">
                  CAT simultaneously performs multiple treatment processes to produce high-quality water from diverse sources:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-3">1</div>
                    <h5 className="font-semibold mb-2">Catalytic Oxidation</h5>
                    <p className="text-sm text-muted-foreground">For inorganic contaminants (e.g., iron removal via oxidation of colloidal iron)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-3">2</div>
                    <h5 className="font-semibold mb-2">Advanced Oxidation-Reduction</h5>
                    <p className="text-sm text-muted-foreground">For organic degradation and contaminant destruction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-3">3</div>
                    <h5 className="font-semibold mb-2">Disinfection</h5>
                    <p className="text-sm text-muted-foreground">Highest log removal credits for pathogens</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Validated Performance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Validated Performance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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

          {/* Advanced Oxidation Principles */}
          <div>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6">Advanced Oxidation Principles</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Hydroxyl Radical Role</h4>
                    <p className="text-muted-foreground mb-4">
                      The hydroxyl radical (•OH) is a powerful nonselective oxidant (redox potential E° = 2.8V, compared to Cl₂ at 1.36V or NaOCl at 0.95V).
                    </p>
                    <p className="text-muted-foreground mb-4">It degrades organics via:</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Hydrogen abstraction (CH₃OH + •OH → CH₂OH + H₂O)</li>
                      <li>• Addition at carbon double bonds (CHCl=CCl₂ + •OH → •CHCl-C(OH)Cl₂)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Degradation Process</h4>
                    <p className="text-muted-foreground mb-4">
                      Converts toxic organics to harmless substances (water, CO₂, salts). Analysis shows raw water with high-molecular-weight organic peaks rapidly degrading to low-molecular-weight mineralization.
                    </p>
                    <div className="bg-background p-4 rounded-lg font-mono text-sm space-y-2">
                      <p>CH₃-CH₂-CH=CH- ... CH₂-CO₂H</p>
                      <p>CH₃OH + •OH → CH₂OH + H₂O</p>
                      <p>CHCl=CCl₂ + •OH → •CHCl-C(OH)Cl₂</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  The definition of advanced oxidation has expanded beyond the hydroxyl radical to include other highly reactive species such as chlorine radicals, superoxide radical, singlet oxygen, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;