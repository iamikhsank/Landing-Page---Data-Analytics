import { BarChart3, PieChart, Database, LineChart, TrendingUp, Search } from 'lucide-react';
import { NavItem, Service, CaseStudy, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Predictive Analytics',
    description: 'Forecast future trends using historical data and machine learning models.',
    icon: TrendingUp,
    theme: 'gray',
  },
  {
    id: '2',
    title: 'Business Intelligence',
    description: 'Interactive dashboards that transform raw data into actionable insights.',
    icon: BarChart3,
    theme: 'blue',
  },
  {
    id: '3',
    title: 'Data Warehousing',
    description: 'Scalable storage solutions to unify your data from multiple sources.',
    icon: Database,
    theme: 'dark',
  },
  {
    id: '4',
    title: 'Visual Reporting',
    description: 'Beautiful, easy-to-understand reports for stakeholders.',
    icon: PieChart,
    theme: 'gray',
  },
  {
    id: '5',
    title: 'Market Research',
    description: 'Deep dive analysis into competitor landscape and customer behavior.',
    icon: Search,
    theme: 'blue',
  },
  {
    id: '6',
    title: 'Conversion Optimization',
    description: 'Data-driven strategies to improve funnel performance.',
    icon: LineChart,
    theme: 'dark',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c6',
    client: 'EduMap Cimenyan',
    metric: 'Students Mapped',
    value: '16,986',
    description: 'Geospatial dashboard optimizing school zoning (Zonasi) and accessibility analysis.',
    chartData: [
      { name: 'Vill A', value: 35 },
      { name: 'Vill B', value: 28 },
      { name: 'Vill C', value: 25 },
      { name: 'Vill D', value: 20 },
      { name: 'Vill E', value: 18 },
    ],
  },
  {
    id: 'c5',
    client: 'PT Sentul Golf Utama',
    metric: 'Peak Revenue',
    value: 'IDR 2.2B',
    description: 'Comprehensive operational performance report analyzing revenue streams, seasonality, and player demographics.',
    chartData: [
      { name: 'Jan', value: 2.21 },
      { name: 'Feb', value: 1.78 },
      { name: 'Mar', value: 0.96 },
      { name: 'Apr', value: 1.31 },
      { name: 'May', value: 1.92 },
      { name: 'Jun', value: 1.51 },
      { name: 'Jul', value: 1.40 },
      { name: 'Aug', value: 1.70 },
    ],
  },
  {
    id: 'c4',
    client: 'IDX Stock Prediction',
    metric: 'Avg R-Squared',
    value: '0.96',
    description: 'Implemented Stacked LSTM Deep Learning to predict market volatility for 10 major Indonesian stocks.',
    chartData: [
      { name: 'Day 0', value: 0.1 },
      { name: 'Day 10', value: 0.25 },
      { name: 'Day 20', value: 0.45 },
      { name: 'Day 30', value: 0.65 },
      { name: 'Day 40', value: 0.85 },
      { name: 'Day 50', value: 0.98 },
    ],
  },
  {
    id: 'c1',
    client: 'FinTech Corp',
    metric: 'Revenue Growth',
    value: '+145%',
    description: 'Optimized user acquisition funnel using cohort analysis.',
    chartData: [
      { name: 'Q1', value: 4000 },
      { name: 'Q2', value: 3000 },
      { name: 'Q3', value: 5000 },
      { name: 'Q4', value: 7500 },
    ],
  },
  {
    id: 'c2',
    client: 'RetailGiant',
    metric: 'Inventory Costs',
    value: '-30%',
    description: 'Implemented just-in-time inventory prediction models.',
    chartData: [
      { name: 'Jan', value: 8000 },
      { name: 'Feb', value: 6500 },
      { name: 'Mar', value: 4000 },
      { name: 'Apr', value: 3200 },
    ],
  },
  {
    id: 'c3',
    client: 'SaaSify',
    metric: 'Churn Rate',
    value: '-12%',
    description: 'Identified at-risk users through behavioral pattern matching.',
    chartData: [
      { name: 'W1', value: 20 },
      { name: 'W2', value: 18 },
      { name: 'W3', value: 12 },
      { name: 'W4', value: 8 },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How long does a typical analysis project take?",
    answer: "It depends on the complexity of your data. A simple audit takes 1-2 weeks, while a full BI implementation can take 4-8 weeks."
  },
  {
    question: "Do you work with messy data?",
    answer: "Absolutely. 80% of our job is data cleaning and preparation (ETL). We handle the messy parts so you don't have to."
  },
  {
    question: "What tools do you use?",
    answer: "We are stack-agnostic but specialize in Python, SQL, Tableau, PowerBI, and React-based custom dashboards."
  }
];

export const LOGOS = [
  'Amazon', 'Dribbble', 'HubSpot', 'Notion', 'Netflix', 'Zoom'
];