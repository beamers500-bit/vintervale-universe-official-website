import type { GalleryItem } from './types';

export const galleryItems: GalleryItem[] = [];

export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryItems.find((g) => g.id === id);
}

export const galleryCategories: { id: GalleryItem['category']; label: string }[] = [
  { id: 'cover', label: 'Book Covers' },
  { id: 'illustration', label: 'Illustrations' },
  { id: 'concept', label: 'Concept Art' },
  { id: 'promotional', label: 'Promotional' },
  { id: 'map', label: 'Maps' },
];
