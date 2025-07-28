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

          {/* Core Concept of CAT */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Core Concept of CAT</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold mb-4">Catalyst Mechanism</h4>
                  <p className="text-muted-foreground mb-4">
                    The catalyst accelerates reactions without being consumed. It features a surface with positive metal sites and negative oxygen sites.
                  </p>
                  <p className="text-muted-foreground">
                    Water molecules attach to these sites in a viscous laminar layer, splitting into H⁺ and OH⁻ (H₂O → H⁺ + OH⁻). Injected oxygen donors decompose at the surface, releasing atomic oxygen for oxidation.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold mb-4">Reactor Setup</h4>
                  <p className="text-muted-foreground mb-3">
                    Uses a catalytic reactor with multi-metal oxide granules:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• <strong>Normal flow:</strong> Downward through catalytic bed</li>
                    <li>• <strong>Backwash flow:</strong> Upward to remove retained solids</li>
                    <li>• <strong>Rinse flow:</strong> Same direction as normal, with filtered water reprocessing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4 text-primary">Enhancements for Performance</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Pre-treat with ozonation to fragment organic molecules, creating charged fragments easier to degrade</p>
                  <p>• Add potassium permanganate or hydrogen peroxide to raise oxidation-reduction potential (ORP) above +400 mV</p>
                  <p>• Catalytic metals (Mn, Fe) in bulk water enhance disinfection by attaching to microbes and triggering reactions</p>
                  <p>• Ozone/H₂O₂/permanganate decompose in reactor, releasing oxygen and precipitating manganese dioxide</p>
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