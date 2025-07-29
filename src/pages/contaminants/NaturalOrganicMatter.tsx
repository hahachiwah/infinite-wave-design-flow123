import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContaminantDetailTemplate from '@/components/ContaminantDetailTemplate';
import { getContaminantById } from '@/data/contaminants';

const NaturalOrganicMatter = () => {
  const contaminantData = getContaminantById('natural-organic-matter');
  
  if (!contaminantData) {
    return <div>Contaminant not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContaminantDetailTemplate {...contaminantData} />
      </main>
      <Footer />
    </div>
  );
};

export default NaturalOrganicMatter;