export interface VintervaleNewsPost {
  id: string;
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  body?: string[];
  image?: string;
  imageAlt?: string;
}

/*
  VINTERVALE NEWS ARCHIVE

  This array is intentionally empty.

  Nothing is rendered on the News page until
  a real, approved announcement is added here.

  Future announcements will be added as objects
  inside this array.

  The News page automatically:

  - sorts announcements newest first
  - displays older announcements underneath
  - shows a maximum of 10 announcements per page
  - automatically creates pagination when needed
  - hides image space when an article has no image
  - allows each announcement to open as a full article
*/

export const newsPosts: VintervaleNewsPost[] = [];

export function getNewsPostById(
  id: string,
): VintervaleNewsPost | undefined {
  return newsPosts.find(
    (post) => post.id === id,
  );
}

export function getRecentNews(
  limit?: number,
): VintervaleNewsPost[] {
  const sorted = [...newsPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime(),
  );

  return typeof limit === 'number'
    ? sorted.slice(0, limit)
    : sorted;
}
