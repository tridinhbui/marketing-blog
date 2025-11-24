export enum Category {
  CASE_STUDY = 'Case Study',
  STRATEGY = 'Brand Strategy',
  CONSUMER = 'Consumer Insights',
  GROWTH = 'Growth',
  PERSONAL = 'Personal Notes',
  FRAMEWORK = 'Frameworks'
}

export interface CaseStudyMeta {
  brand: string;
  industry: string;
  problem: string;
  approach: string;
  keyInsight: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
  caseStudyMeta?: CaseStudyMeta; // Optional, only for case studies
  content: {
    intro: string;
    keyPoints: string[];
    sections: {
      heading: string;
      body: string;
    }[];
    takeaways: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  type: 'Template' | 'Framework' | 'Book' | 'Guide';
  description: string;
  link: string;
}