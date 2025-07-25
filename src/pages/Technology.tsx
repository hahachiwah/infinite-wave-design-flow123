import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TechnologySection from '@/components/TechnologySection';

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;