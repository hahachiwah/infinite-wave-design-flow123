import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantIntroSection from '@/components/ContaminantIntroSection';
import ContaminantsSection from '@/components/ContaminantsSection';

const Contaminants = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ContaminantIntroSection />
        <ContaminantsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contaminants;