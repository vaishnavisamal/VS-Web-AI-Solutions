export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  basePrice: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'saas' | 'ecommerce' | 'corporate' | 'creative';
  imageStyle: {
    bgGradient: string;
    accentColor: string;
  };
  metrics: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarBg: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface EstimateOptions {
  projectType: string;
  pages: number;
  hasCMS: boolean;
  hasSEO: boolean;
  hasAuth: boolean;
  hasPayment: boolean;
}
