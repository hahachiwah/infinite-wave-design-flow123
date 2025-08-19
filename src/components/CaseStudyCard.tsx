import { ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CaseStudy } from '@/data/caseStudies';
import { getCategoryColor } from '@/lib/categoryUtils';
import { getImagePath } from '@/data/images';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => {
  const imagePath = getImagePath(study.imageName, 'default-case-study');
  const imageUrl = imagePath || `https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=600&h=400`;
  
  return (
    <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(study.category)}>
            {study.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {study.location}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Challenge</h4>
          <p className="text-sm text-muted-foreground">{study.challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Solution</h4>
          <p className="text-sm text-muted-foreground">{study.solution}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border/50">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Capacity</span>
            <span className="text-sm font-semibold text-primary">{study.results.capacity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Efficiency</span>
            <span className="text-sm font-semibold text-primary">{study.results.efficiency}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Savings</span>
            <span className="text-sm font-semibold text-primary">{study.results.savings}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};