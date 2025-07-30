import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Cookie Policy"
          subtitle="How we use cookies"
          description="Learn about how we use cookies to improve your experience on our website."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your computer or mobile device 
                  when you visit our website. They help us provide you with a better experience 
                  by remembering your preferences and analyzing how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. 
                      They enable basic functions like page navigation and access to secure areas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground">
                      We use these cookies to understand how visitors interact with our website. 
                      This helps us improve our site and services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies enable enhanced functionality and personalization, 
                      such as remembering your preferences and settings.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We may use third-party services that place cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing content</li>
                  <li>Customer support tools</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Cookie preferences: Use our cookie preference center when available</li>
                  <li>Third-party tools: Use browser extensions or privacy tools</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Retention</h2>
                <p className="text-muted-foreground mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Session cookies: Deleted when you close your browser</li>
                  <li>Persistent cookies: Remain for a set period or until manually deleted</li>
                  <li>Third-party cookies: Controlled by the respective third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of 
                  any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us at 
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

export default CookiePolicy;