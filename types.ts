import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  theme: 'blue' | 'dark' | 'gray';
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  value: string;
  description: string;
  chartData: Array<{ name: string; value: number }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}