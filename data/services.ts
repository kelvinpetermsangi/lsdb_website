export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  category: 'career' | 'skills' | 'workplace' | 'institutional' | 'professional' | 'retirement';
}

export const services: Service[] = [
  {
    id: 'career-counseling',
    icon: '🎯',
    title: 'Career Counseling',
    description: 'Personalized guidance to help individuals make informed career decisions and develop career pathways.',
    features: [
      'One-on-one career consultations',
      'Career assessment and profiling',
      'Career pathway planning',
      'Goal setting and action plans',
      'Career transition support',
      'Long-term career development'
    ],
    category: 'career'
  },
  {
    id: 'skills-assessment',
    icon: '📊',
    title: 'Skills Assessment',
    description: 'Comprehensive evaluation of skills, competencies, and development needs for individuals and organizations.',
    features: [
      'Skills gap analysis',
      'Competency mapping',
      'Development need identification',
      'Assessment tools and methodologies',
      'Individual and team assessments',
      'Benchmarking against industry standards'
    ],
    category: 'skills'
  },
  {
    id: 'resume-interview',
    icon: '📝',
    title: 'Resume & Interview Preparation',
    description: 'Professional support for creating effective resumes and mastering interview techniques.',
    features: [
      'Resume and CV writing',
      'Cover letter development',
      'Interview skills training',
      'Mock interview sessions',
      'Portfolio development',
      'Job application strategies'
    ],
    category: 'career'
  },
  {
    id: 'professional-development',
    icon: '📚',
    title: 'Professional Development',
    description: 'Workshops and training programs to enhance professional skills and workplace competencies.',
    features: [
      'Leadership development programs',
      'Communication skills workshops',
      'Team collaboration training',
      'Time management strategies',
      'Workplace ethics and professionalism',
      'Continuous learning initiatives'
    ],
    category: 'professional'
  },
  {
    id: 'workplace-learning',
    icon: '🏢',
    title: 'Workplace Learning',
    description: 'Supporting organizations in developing effective workplace learning and development programs.',
    features: [
      'Training program design',
      'Learning needs analysis',
      'Mentorship program development',
      'On-the-job training frameworks',
      'Performance support systems',
      'Learning evaluation methods'
    ],
    category: 'workplace'
  },
  {
    id: 'institutional-support',
    icon: '🏛️',
    title: 'Institutional Support',
    description: 'Assisting educational institutions and organizations in developing career and skills programs.',
    features: [
      'Curriculum development support',
      'Career services program design',
      'Industry partnership facilitation',
      'Accreditation preparation',
      'Program evaluation and improvement',
      'Strategic planning assistance'
    ],
    category: 'institutional'
  }
];

export const serviceCategories = [
  { id: 'career', name: 'Career Guidance', icon: '🎯' },
  { id: 'skills', name: 'Skills Development', icon: '📊' },
  { id: 'workplace', name: 'Workplace Learning', icon: '🏢' },
  { id: 'institutional', name: 'Institutional Support', icon: '🏛️' },
  { id: 'professional', name: 'Professional Development', icon: '📚' },
  { id: 'retirement', name: 'Retirement Planning', icon: '👵' }
];
