
export enum ContentCategory {
  A = 'Historical Genius',
  B = 'Anti-Status Quo',
  C = 'Dark Academia Aesthetic',
  D = 'Mascot & Humor'
}

export enum TimeSlot {
  Morning = 'Morning',
  MidDay = 'Mid-Day',
  Evening = 'Evening'
}

export interface VideoScript {
  id: string;
  day: number;
  slot: TimeSlot;
  category: ContentCategory;
  narratorScript: string; // The exact script to be read
  hook: string;
  value: string;
  product: string;
  cta: string;
  description: string;
  keywords: string[];
  completed?: boolean;
}

export interface StrategyStats {
  categoryDistribution: Record<ContentCategory, number>;
  totalPosts: number;
}
