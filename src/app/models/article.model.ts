export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: Date;
  imageUrl: string;
  readTime: number;
  featured: boolean;
}

export const CATEGORIES = [
  'All',
  'AI',
  'Technology',
  'Innovation',
  'Cybersecurity',
  'Space',
  'Gaming',
  'Science',
  'Business',
];
