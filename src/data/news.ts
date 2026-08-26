import type { NewsPost } from './types';

export const newsPosts: NewsPost[] = [];

export function getNewsPostById(id: string): NewsPost | undefined {
  return newsPosts.find((n) => n.id === id);
}

export function getRecentNews(limit?: number): NewsPost[] {
  const sorted = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? sorted.slice(0, limit) : sorted;
}
