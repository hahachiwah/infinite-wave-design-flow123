import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getImagePath } from '@/data/images';

const Footer = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        'Water Treatment',
        'Wastewater Management',
        'Industrial Solutions',
        'Municipal Systems',
        'Custom Engineering'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Municipal',
        'Mining',
        'Food & Beverage',
        'Manufacturing',
        'Agriculture'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Case Studies',
        'Technical Papers',
        'Documentation',
        'Support',
        'Training'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'News',
        'Partners',
        'Contact'
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={getImagePath('infinite-water-logo') || ''} 
                  alt="Infinite Water" 
                  className="h-8 w-auto"
                />
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                Leading the future of water treatment technology through sustainable innovation and engineering excellence. 
                We develop solutions that protect our most precious resource while driving operational efficiency.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-background/90">info@infinitewater.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-background/90">+61 3 9999 0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-background/90">Melbourne, Australia</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
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

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-background mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-background/80 hover:text-background transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-background mb-2">Stay Updated</h3>
              <p className="text-background/80">
                Get the latest insights on water treatment technology and industry trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Subscribe
              </Button>
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
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
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