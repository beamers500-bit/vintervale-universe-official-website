import type { GalleryItem } from './types';

export const galleryItems: GalleryItem[] = [
  { id: 'gallery-seraphina-turnaround', title: 'Seraphina — Turnaround / Reference Sheet', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/seraphina-turnaround.jpg', description: 'Official character turnaround and visual reference for Princess Seraphina.', isPlaceholder: false },
  { id: 'gallery-floppy-turnaround', title: 'Floppy — Turnaround / Reference Sheet', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/floppy-turnaround.jpg', description: 'Official character turnaround and visual reference for Sir Flopplesworth the Third.', isPlaceholder: false },
  { id: 'gallery-duo-scale', title: 'Seraphina & Floppy — Definitive Duo Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/seraphina-floppy-duo.jpg', description: 'Official scale and interaction reference for Seraphina and Floppy.', isPlaceholder: false },
  { id: 'gallery-king-reference', title: 'King of Vintervale — Character Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/king-reference.jpg', description: 'Official definitive character reference for the King of Vintervale.', isPlaceholder: false },
  { id: 'gallery-king-story', title: 'King of Vintervale — Story Context Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/king-story-reference.jpg', description: 'Additional visual and story-context reference for the King of Vintervale.', isPlaceholder: false },
  { id: 'gallery-queen-reference', title: 'Queen of Vintervale — Character Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/queen-reference.jpg', description: 'Official definitive character reference for the Queen of Vintervale.', isPlaceholder: false },
  { id: 'gallery-kael-reference', title: 'Kael — Character Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/kael-reference.jpg', description: 'Official definitive character reference for Commander Kael.', isPlaceholder: false },
  { id: 'gallery-vargan-reference', title: 'Vargan — Character Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/vargan-reference.jpg', description: 'Official definitive character reference for Vargan, High Chieftain of Thrymdor.', isPlaceholder: false },
  { id: 'gallery-rhalgor-reference', title: 'Rhalgor — Character Reference', universeId: 'universe-vintervale', category: 'concept', imageUrl: '/artwork/rhalgor-reference.jpg', description: 'Official definitive character reference for Rhalgor.', isPlaceholder: false },
];

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
