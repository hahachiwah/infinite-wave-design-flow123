import { Badge } from '@/components/ui/badge';

interface TagFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
  className?: string;
}

export const TagFilter = ({ tags, onTagClick, className = "" }: TagFilterProps) => {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Badge 
          key={index} 
          variant="secondary"
          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-base"
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};