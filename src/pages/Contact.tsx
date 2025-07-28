import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Contact Us"
          subtitle="Let's discuss your water treatment needs"
          description="Ready to transform your water treatment operations? Our team of experts is here to help with comprehensive consultation and custom engineering services."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;