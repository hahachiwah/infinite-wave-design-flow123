import { Zap, Target, Award, CheckCircle, BarChart3, FlaskConical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TechnologySection = () => {
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

          {/* Foundation and Innovation */}
          <div className="mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6">Foundation and Innovation</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">ZDHC Standard</h4>
                    <p className="text-muted-foreground mb-4">
                      Foundation member of the ZDHC Standard applying to all 2,700 global suppliers of NIKE, Adidas, Puma, Under Armour etc.
                    </p>
                    <p className="text-muted-foreground">
                      IW Proof of concept pilot achieved even the toughest "Aspirational" goal
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Antimony Reduction</h4>
                    <p className="text-muted-foreground mb-4">
                      Antimony (Sb) reduction to 0.01 mg/l, 50% lower than the 2025 "Progressive" goal
                    </p>
                    <p className="text-muted-foreground">
                      Current solutions can only achieve the "Foundational" goal of 0.1 mg/l at very high operational cost. Notionally IW OPEX should be at least 50% better.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SHE CAT Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Technologies of Basic SHE CAT</h3>
            <Card className="p-8">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-6">SHE CAT Catalytic Tank process:</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">1</div>
                    <p className="text-muted-foreground">
                      Feed water with oxygen donor chemical enters the SHE CAT Catalytic Tank packed with catalytic media
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">2</div>
                    <p className="text-muted-foreground">
                      Hydroxyl radical (•OH) is generated during the Advanced Oxidation Process (AOP), which is one of the most powerful oxidant available in nature with a redox potential of 2.8V.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">3</div>
                    <p className="text-muted-foreground">
                      Hydroxyl radical are effective in breaking down a wide range of organic and inorganic contaminants for the degradation of pollutants in drinking water and wastewater treatment.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">4</div>
                    <p className="text-muted-foreground">
                      Organic molecules are broken down to form carbon dioxide (CO₂) & water (H₂O) + Salt
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">5</div>
                    <p className="text-muted-foreground">
                      Treated water leaving the catalytic tank
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disruptive Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Disruptive Benefits - What our Technology Can Do:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Superior disinfection performance, validated under WHO standard',
                'Removal of Phosphorus (up to 99.5%) and reducing algae bloom',
                'Reduction of organics (up to 70%), hence reduction of chlorination disinfection by product or DBP',
                'Degradation of emerging contaminants, e.g., glyphosate, PFAS',
                'Removal of most heavy metals',
                'Improvement in aesthetic properties, such as smell, colour and taste, hence well suited for water reuse',
                'Our disruptive Innovation with remarkable CAPEX & OPEX reduction',
                'High effectiveness in waste water colour removal',
                'A game-changing pre-treatment step prior to RO (Reverse Osmosis)'
              ].map((benefit, index) => (
                <Card key={index} className="p-4 hover:shadow-large transition-smooth">
                  <CardContent className="p-0">
                    <CheckCircle className="h-6 w-6 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Advantage Over Competitors:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Energy Efficiency</h4>
                  <p className="text-muted-foreground">
                    Low energy process (approx. 0.1kWh/m³), therefore lower operation cost vs RO (2.0 - 2.5 kWh/m³)
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Quick Process</h4>
                  <p className="text-muted-foreground">
                    Requires low contact time (3-6 minutes), and hence smaller footprint
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-3">High Water Recovery</h4>
                  <p className="text-muted-foreground">
                    High water recovery (up to 95%) vs RO (50-70%)
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <FlaskConical className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Automated Process</h4>
                  <p className="text-muted-foreground">
                    Highly automated process with backwash and built-in remote access
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Advanced Oxidation Introduction */}
          <div>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6">Advanced Oxidation - Brief Introduction</h3>
                <p className="text-muted-foreground mb-6">
                  The hydroxyl radical is one of the most powerful nonselective oxidants (•OH E°=2.8V, Cl₂ E°=1.36V, NaOCl E°=0.95V). Common ways of degrading organic matter is by hydrogen abstraction and addition at carbon double bond.
                </p>
                <div className="bg-background p-4 rounded-lg font-mono text-sm space-y-2">
                  <p>CH₃-CH₂-CH=CH- ... CH₂-CO₂H</p>
                  <p>CH₃OH + •OH → CH₂OH + H₂O</p>
                  <p>CHCl=CCl₂ + •OH → •CHCl-C(OH)Cl₂</p>
                </div>
                <p className="text-muted-foreground mt-6">
                  The definition of advanced oxidation has been expanded beyond the hydroxyl radical to include other highly reactive species such as chlorine radicals, superoxide radical, singlet oxygen...
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