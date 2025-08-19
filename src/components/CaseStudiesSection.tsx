import { useState } from 'react';
import { SearchBar } from '@/components/ui/search-bar';
import { TagFilter } from '@/components/ui/tag-filter';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudiesData, caseStudyTags } from '@/data/caseStudies';
import { filterItems } from '@/lib/categoryUtils';

const CaseStudiesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = filterItems(
    caseStudiesData, 
    searchTerm, 
    ['title', 'location', 'category', 'challenge', 'solution']
  );

  return (
    <section id="case-studies" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search case studies..."
              className="max-w-md mx-auto mb-8"
            />
            
            <TagFilter 
              tags={caseStudyTags}
              onTagClick={setSearchTerm}
              className="mb-8"
            />
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
        </div>
      </section>
  );
};

export default CaseStudiesSection;