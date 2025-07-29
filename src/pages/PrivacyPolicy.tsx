import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Privacy Policy"
          subtitle="Your privacy matters to us"
          description="We are committed to protecting your personal information and your right to privacy."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  request information, or contact us for support.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Project details and technical requirements</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical updates and industry insights</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to access, update, or delete your personal information. 
                  Contact us at privacy@infinitewater.com to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@infinitewater.com or +61 3 9999 0000.
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

export default PrivacyPolicy;