import { Button } from '@/components/ui/button';
import { getImagePath } from '@/data/images';
import { contactInfo } from '@/data/contactInfo';

const Footer = () => {

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={getImagePath('infinite-water-logo-footer') || ''} 
                  alt="Infinite Water" 
                  className="h-8 w-auto"
                />
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                {contactInfo.companyDescription}
              </p>

              <div className="space-y-3">
                {contactInfo.contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  let content = detail.content;
                  
                  // Use specific contact info values for consistency
                  if (index === 0) content = contactInfo.email;
                  if (index === 1) content = contactInfo.phone;
                  if (index === 2) content = contactInfo.address;
                  
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="text-background/90">{content}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex space-x-4 mt-6">
                {contactInfo.socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-background/80 hover:text-background hover:bg-background/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-xl font-semibold text-background mb-4">Stay Updated</h3>
              <p className="text-background/80 mb-6">
                Get the latest insights on water treatment technology and industry trends.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © 2024 Infinite Water. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-background/80 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-background/80 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;