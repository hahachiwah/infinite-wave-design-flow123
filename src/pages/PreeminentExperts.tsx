import React from 'react';
import ExpertPageTemplate from '@/components/ExpertPageTemplate';
import { getExpertsByCategory } from '@/data/experts';
import { getExpertPageConfig } from '@/data/expertPageConfig';

const PreeminentExperts = () => {
  const config = getExpertPageConfig('preeminent-experts');
  const experts = getExpertsByCategory('preeminent-experts');

  if (!config) {
    return <div>Configuration not found</div>;
  }

  return <ExpertPageTemplate config={config} experts={experts} />;
};

export default PreeminentExperts;