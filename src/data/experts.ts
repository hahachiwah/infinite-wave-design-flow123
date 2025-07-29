import { Expert } from '@/types/expert';
import { getImagePath } from '@/data/images';

export const expertsData: Expert[] = [
  {
    id: 'gheorghe',
    name: 'Gheorghe',
    title: 'Lead Scientist & Engineer',
    bio: 'Gheorghe has worked as a scientist and engineer in fluid engineering, manufacturing engineering, process engineering (water), plant and equipment design and new technology and application development for over 35 years. Gheorghe has been engaged as an advisor on water treatment solutions by various reputable organisations and government agencies including CSIRO, Water Corporation of Western Australia, WA Department of Water and Energy Resources Australia Limited.',
    specialization: 'CAT Process Pioneer',
    imageName: 'expert-gheorghe',
    image: getImagePath('expert-gheorghe', 'default-expert') || '',
    category: 'preeminent-experts',
    achievements: [
      '35+ years in fluid and process engineering',
      'Advisor to CSIRO and Water Corporation of Western Australia',
      'Pioneer of patented CAT process',
      '12+ years leading Catalytic Advanced Oxidation research'
    ],
    expertise: [
      {
        icon: 'Droplets',
        title: 'Fluid Engineering',
        description: 'Advanced fluid dynamics and engineering solutions for complex water treatment systems.'
      },
      {
        icon: 'Settings',
        title: 'Process Engineering',
        description: 'Optimization of water treatment processes for maximum efficiency and effectiveness.'
      },
      {
        icon: 'Zap',
        title: 'CAT Technology',
        description: 'Pioneering the patented Catalytic Advanced Oxidation process for water treatment.'
      },
      {
        icon: 'Building',
        title: 'Plant Design',
        description: 'Complete water treatment plant and equipment design for industrial applications.'
      },
      {
        icon: 'Lightbulb',
        title: 'Technology Development',
        description: 'Research and development of innovative water treatment technologies and applications.'
      },
      {
        icon: 'Leaf',
        title: 'Sustainable Solutions',
        description: 'Environmentally conscious water treatment solutions for a sustainable future.'
      }
    ],
    route: '/expert/gheorghe'
  },
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Senior Research Scientist',
    bio: 'Dr. Sarah Chen is a distinguished research scientist with over 20 years of experience in advanced water purification technologies. She holds a Ph.D. in Chemical Engineering from MIT and has published over 50 peer-reviewed papers on catalytic oxidation processes and membrane filtration systems.',
    fullBio: [
      'Dr. Sarah Chen brings over two decades of groundbreaking research in advanced water purification technologies to Infinite Water. With a Ph.D. in Chemical Engineering from MIT, she has established herself as a leading authority in catalytic oxidation processes and innovative filtration systems.',
      'Her research portfolio includes over 50 peer-reviewed publications in top-tier scientific journals, focusing on novel approaches to water treatment that combine efficiency with environmental sustainability. Dr. Chen\'s work has been instrumental in advancing the understanding of how advanced oxidation processes can be optimized for various industrial applications.',
      'Before joining Infinite Water, Dr. Chen led research teams at several prestigious institutions, including Stanford Research Institute and the Pacific Northwest National Laboratory. Her collaborative approach and technical expertise have resulted in numerous patents and breakthrough technologies that are now being implemented worldwide.',
      'Dr. Chen\'s passion for solving global water challenges through innovative technology makes her an invaluable member of our research team, where she continues to push the boundaries of what\'s possible in water treatment science.'
    ],
    specialization: 'Advanced Catalytic Oxidation',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop',
    category: 'preeminent-experts',
    achievements: [
      'Ph.D. in Chemical Engineering from MIT',
      '50+ peer-reviewed publications',
      'Former researcher at Stanford Research Institute',
      'Multiple patents in water treatment technology',
      '20+ years in advanced water purification research'
    ],
    expertise: [
      {
        icon: 'Flask',
        title: 'Chemical Engineering',
        description: 'Deep expertise in chemical processes and reactor design for water treatment applications.'
      },
      {
        icon: 'Microscope',
        title: 'Research & Development',
        description: 'Leading research initiatives in advanced oxidation and membrane technologies.'
      },
      {
        icon: 'FileText',
        title: 'Scientific Publications',
        description: 'Extensive publication record in peer-reviewed journals on water treatment innovations.'
      },
      {
        icon: 'Award',
        title: 'Patent Development',
        description: 'Multiple patents in catalytic oxidation and membrane filtration technologies.'
      }
    ],
    route: '/expert/dr-sarah-chen'
  },
  {
    id: 'yk-ip',
    name: 'YK IP',
    title: 'CEO & Managing Director',
    bio: 'YK has a deep interest in new and innovative technologies focused in the healthcare and environmental sectors. After practicing medicine for 20 years in Hong Kong, he moved to New Zealand and spent 20 years in healthcare businesses. With a passion for sustainability, he has leveraged his business experience to ensure businesses operate with a focus on improving environmental issues.',
    fullBio: [
      'YK IP brings a unique blend of medical expertise, business acumen, and environmental passion to his role as CEO & Managing Director of Infinite Water. With a deep interest in new and innovative technologies focused in the healthcare and environmental sectors, YK has dedicated his career to making meaningful impacts in these critical areas.',
      'After practicing medicine for 20 years in Hong Kong, YK moved to New Zealand where he spent the following 20 years involved in healthcare businesses in various capacities. His diverse experience ranges from being a hands-on marketing director to serving as a board member of a successful private healthcare group in New Zealand, providing him with comprehensive insights into the healthcare industry.',
      'In 2011, YK demonstrated his entrepreneurial spirit by starting a lighting business from the ground up, successfully building it into a thriving enterprise. This experience further strengthened his business development skills and reinforced his commitment to sustainability-focused ventures.',
      'With a passionate commitment to sustainability, YK has leveraged his extensive business and entrepreneurial experience, along with his established networks, to ensure that businesses he is involved with continue to operate with a focus on improving environmental and sustainability issues. This philosophy aligns perfectly with Infinite Water\'s mission.',
      'YK believes strongly in Infinite Water\'s vision to combat global water access and scarcity. Recognizing the team\'s passion and commitment to using their technology to help those in need of healthy drinking water and to treat waste water to improve the environment, YK has become both an investor and an Executive Director in the business, bringing his wealth of experience to drive the company\'s success.'
    ],
    specialization: 'Healthcare Innovation & Sustainability',
    imageName: 'expert-yk-ip',
    image: getImagePath('expert-yk-ip', 'default-expert') || '',
    category: 'leadership',
    achievements: [
      '20 years of medical practice in Hong Kong',
      '20 years of healthcare business experience in New Zealand',
      'Founded successful lighting business in 2011',
      'Board member of successful private healthcare group',
      'Executive Director and investor in Infinite Water'
    ],
    expertise: [
      {
        icon: 'Heart',
        title: 'Healthcare Innovation',
        description: 'Extensive experience in healthcare businesses across different roles, from marketing director to board member positions.'
      },
      {
        icon: 'Lightbulb',
        title: 'Entrepreneurship',
        description: 'Successfully started and grew a lighting business from the ground up, demonstrating strong entrepreneurial skills.'
      },
      {
        icon: 'Briefcase',
        title: 'Sustainability Focus',
        description: 'Passionate about environmental sustainability, ensuring businesses operate with focus on improving environmental issues.'
      },
      {
        icon: 'GraduationCap',
        title: 'Medical Background',
        description: '20 years of medical practice providing deep understanding of healthcare sector needs and challenges.'
      }
    ],
    education: [
      {
        degree: 'Medical Degree',
        institution: 'Hong Kong University'
      },
      {
        degree: 'Multiple Diplomas',
        institution: 'New Zealand Open Polytechnic',
        details: 'Business, Marketing, and Management'
      },
      {
        degree: 'Executive MBA',
        institution: 'Otago University'
      }
    ],
    route: '/expert/yk-ip'
  },
  {
    id: 'daniel-jin',
    name: 'Daniel Jin',
    title: 'Chairman',
    bio: 'Daniel Jin has over 25 years of experience in the industrial and environmental sectors, having served in executive roles such as CEO, Managing Director, and General Manager. During his tenure at Singapore-listed United Engineers Ltd., he oversaw the planning and execution of wastewater treatment and solid waste management projects in China, focusing on enhancing sustainable practices.',
    fullBio: [
      'Daniel Jin is a seasoned executive with over 25 years of comprehensive experience in the industrial and environmental sectors. His distinguished career has been marked by leadership roles that have shaped sustainable practices across multiple industries and geographical regions.',
      'Throughout his career, Daniel has served in various executive capacities, including CEO, Managing Director, and General Manager positions. His leadership style combines strategic vision with operational excellence, making him a driving force behind numerous successful ventures in the environmental technology space.',
      'During his tenure at Singapore-listed United Engineers Ltd., Daniel demonstrated exceptional project management capabilities by overseeing the planning and execution of large-scale wastewater treatment and solid waste management projects in China. These initiatives not only delivered significant business value but also contributed to environmental sustainability in the region.',
      'His expertise extends beyond traditional business management to encompass deep technical knowledge of environmental systems, waste management technologies, and sustainable industrial practices. This unique combination of business acumen and technical expertise positions him as a valuable leader in the water treatment industry.',
      'Daniel\'s commitment to environmental sustainability and his proven track record in the sector make him an ideal Chairman for Infinite Water, where his experience in scaling environmental technology solutions will be instrumental in driving the company\'s growth and impact.'
    ],
    specialization: 'Industrial & Environmental Leadership',
    imageName: 'expert-daniel-jin',
    image: getImagePath('expert-daniel-jin', 'default-expert') || '',
    category: 'leadership',
    achievements: [
      'Over 25 years in industrial and environmental sectors',
      'Executive roles as CEO, Managing Director, and General Manager',
      'Led major projects at Singapore-listed United Engineers Ltd.',
      'Oversaw wastewater treatment projects in China',
      'Specialized in sustainable practices and environmental solutions'
    ],
    expertise: [
      {
        icon: 'Building2',
        title: 'Industrial Leadership',
        description: 'Extensive experience leading industrial operations and driving operational excellence across multiple sectors.'
      },
      {
        icon: 'Leaf',
        title: 'Environmental Solutions',
        description: 'Deep expertise in environmental technology, waste management, and sustainable industrial practices.'
      },
      {
        icon: 'Target',
        title: 'Strategic Planning',
        description: 'Proven track record in strategic planning and execution of large-scale infrastructure projects.'
      },
      {
        icon: 'Globe',
        title: 'International Experience',
        description: 'Extensive experience managing projects across different countries and regulatory environments.'
      }
    ],
    route: '/expert/daniel-jin'
  },
  {
    id: 'felix-wong',
    name: 'Felix Wong',
    title: 'Adjunct Professor',
    bio: 'Professor Felix Wong is an adjunct professor at Western Sydney University, Australia. Appointed Professor at the University of New South Wales\' Liverpool Hospital in 1992, he is a founding member of the Asia Pacific Association of Gynecologic Endoscopy and Minimally Invasive Therapy (APAGEMIT) and Chairman of the China-Asia Pacific Association of Minimally Invasive Gynecologic Oncologists (CA-AMIGO).',
    fullBio: [
      'Professor Felix Wong is a distinguished academic and medical professional who has made significant contributions to the field of minimally invasive surgery and medical education. Currently serving as an adjunct professor at Western Sydney University, Australia, he brings decades of experience in medical research, clinical practice, and academic leadership.',
      'His academic journey reached a significant milestone in 1992 when he was appointed Professor at the University of New South Wales\' Liverpool Hospital. This appointment marked the beginning of his influential career in medical education and research, where he has consistently pushed the boundaries of medical knowledge and practice.',
      'Professor Wong\'s leadership in the medical community is exemplified by his founding membership of the Asia Pacific Association of Gynecologic Endoscopy and Minimally Invasive Therapy (APAGEMIT). This organization has been instrumental in advancing minimally invasive surgical techniques across the Asia Pacific region, improving patient outcomes and surgical practices.',
      'As Chairman of the China-Asia Pacific Association of Minimally Invasive Gynecologic Oncologists (CA-AMIGO), Professor Wong has fostered international collaboration and knowledge sharing among medical professionals. His leadership has helped establish best practices and training standards that have benefited countless patients and medical practitioners.',
      'Professor Wong\'s expertise in medical innovation and his commitment to advancing healthcare technologies align perfectly with Infinite Water\'s mission to develop cutting-edge solutions for global challenges. His academic rigor and research methodologies bring valuable perspective to the company\'s technological development efforts.'
    ],
    specialization: 'Academic Excellence & Research',
    imageName: 'expert-felix-wong',
    image: getImagePath('expert-felix-wong', 'default-expert') || '',
    category: 'leadership',
    achievements: [
      'Adjunct Professor at Western Sydney University',
      'Professor appointment at UNSW Liverpool Hospital (1992)',
      'Founding member of APAGEMIT',
      'Chairman of CA-AMIGO',
      'Pioneer in minimally invasive surgical techniques'
    ],
    expertise: [
      {
        icon: 'BookOpen',
        title: 'Academic Leadership',
        description: 'Extensive experience in medical education, research, and academic administration at leading universities.'
      },
      {
        icon: 'Microscope',
        title: 'Medical Research',
        description: 'Leading researcher in minimally invasive surgical techniques and medical technology innovation.'
      },
      {
        icon: 'Users',
        title: 'International Collaboration',
        description: 'Founder and leader of international medical associations fostering global knowledge exchange.'
      },
      {
        icon: 'Award',
        title: 'Professional Recognition',
        description: 'Recognized leader in the medical community with numerous professional appointments and honors.'
      }
    ],
    route: '/expert/felix-wong'
  }
];

export const getExpertById = (id: string): Expert | undefined => {
  return expertsData.find(expert => expert.id === id);
};

export const getExpertsByCategory = (category: 'preeminent-experts' | 'leadership'): Expert[] => {
  return expertsData.filter(expert => expert.category === category);
};

export const getExpertByRoute = (route: string): Expert | undefined => {
  return expertsData.find(expert => expert.route === route);
};