export type CategoryType = 'Municipal' | 'Industrial' | 'Mining';

export const getCategoryColor = (category: CategoryType): string => {
  const categoryColors: Record<CategoryType, string> = {
    Municipal: 'bg-blue-500/10 text-blue-600 border-blue-200',
    Industrial: 'bg-green-500/10 text-green-600 border-green-200',
    Mining: 'bg-orange-500/10 text-orange-600 border-orange-200'
  };
  
  return categoryColors[category] || 'bg-primary/10 text-primary border-primary/20';
};

export const filterItems = <T>(
  items: T[],
  searchTerm: string,
  searchFields: (keyof T)[]
): T[] => {
  if (!searchTerm.trim()) return items;
  
  const lowercaseSearch = searchTerm.toLowerCase();
  
  return items.filter(item =>
    searchFields.some(field => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowercaseSearch);
      }
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).some(v => 
          typeof v === 'string' && v.toLowerCase().includes(lowercaseSearch)
        );
      }
      return false;
    })
  );
};