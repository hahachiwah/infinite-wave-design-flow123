export interface Expert {
  id: string;
  name: string;
  title: string;
  bio: string;
  fullBio?: string[];
  specialization: string;
  image: string;
  category: 'preeminent-experts' | 'leadership';
  achievements?: string[];
  expertise?: ExpertiseArea[];
  education?: EducationItem[];
  route: string;
}

export interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  details?: string;
}

export interface ExpertCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  experts: Expert[];
  image: string;
}