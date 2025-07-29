import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Terms of Service"
          subtitle="Terms and conditions of use"
          description="Please read these terms carefully before using our services."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Infinite Water's services, you accept and agree to be bound 
                  by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Infinite Water provides advanced water treatment technologies and engineering services 
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Water treatment system design and implementation</li>
                  <li>Catalytic advanced treatment solutions</li>
                  <li>Technical consultation and support</li>
                  <li>Custom engineering services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <p className="text-muted-foreground mb-4">Under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Remove copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  The materials on Infinite Water's website are provided on an 'as is' basis. 
                  Infinite Water makes no warranties, expressed or implied, and hereby disclaims 
                  all other warranties including implied warranties or conditions of merchantability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall Infinite Water or its suppliers be liable for any damages 
                  arising out of the use or inability to use our services or materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms and conditions are governed by and construed in accordance with 
                  the laws of Australia and you irrevocably submit to the exclusive jurisdiction 
                  of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at 
                  legal@infinitewater.com or +61 3 9999 0000.
                </p>
              </section>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;