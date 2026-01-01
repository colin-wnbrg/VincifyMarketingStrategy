import React from 'react';
import { ContentCategory } from './types.ts';

export const VINCIFY_STRATEGY_CONTEXT = `
App Name: Vincify
Concept: AI-powered "to-learn" list inspired by Leonardo da Vinci.
Target: Polymaths, Renaissance Men, Dark Academia, Productivity Enthusiasts.
Core Mechanic: Write topics -> AI turns them into micro-lessons + quizzes.
Mascot: Leonardo (Exasperated Genius).

Categories:
A: Historical Genius (Facts about Da Vinci, authority bias).
B: Anti-Status Quo (Challenging book summaries/passive learning).
C: Dark Academia Aesthetic (Vibe-focused, romanticizing study).

Frequency Goal: 90 posts (3 per day).
- Mostly A and B.
- C once every 2-3 days.
- D is excluded from this plan as requested.
`;

export const CATEGORY_COLORS: Record<string, string> = {
  [ContentCategory.A]: 'bg-amber-100 border-amber-300 text-amber-900',
  [ContentCategory.B]: 'bg-stone-200 border-stone-400 text-stone-900',
  [ContentCategory.C]: 'bg-indigo-100 border-indigo-300 text-indigo-900',
  [ContentCategory.D]: 'bg-rose-100 border-rose-300 text-rose-900',
};