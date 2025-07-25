import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Applications = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Applications;