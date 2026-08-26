import type { Book } from './types';

export const books: Book[] = [
  {
    id: 'book-001',
    title: 'The Vintervale Chronicles',
    author: 'Martin Wett',
    subtitle: 'Book One',
    universeId: 'universe-vintervale',
    series: 'The Vintervale Universe',
    seriesOrder: 1,
    status: 'published',
    coverImage: undefined,
    coverImageAlt: undefined,
    synopsis: 'The Vintervale Chronicles follows Princess Seraphina Aurelia von Vintervale, a privileged and demanding young royal whose carefully ordered world begins to unravel after the arrival of an extraordinary talking rabbit: Sir Flopplesworth the Third, better known as Floppy.\n\nWhat begins as an unwelcome lesson in humility grows into a journey far beyond the comforts of palace life — one filled with adventure, magical chaos, danger, friendship and discoveries that will challenge Seraphina's understanding of herself and the world around her.',
    publicationDate: undefined,
    publisher: 'Wholebook Inc.',
    editions: undefined,
    purchaseLinks: undefined,
    excerpts: undefined,
    relatedCharacterIds: ['char-floppy'],
    relatedLocationIds: [],
    relatedLoreIds: [],
    galleryItemIds: [],
    isPlaceholder: false,
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getPublishedBooks(): Book[] {
  return books.filter((b) => b.status === 'published');
}

export function getForthcomingBooks(): Book[] {
  return books.filter((b) => b.status === 'forthcoming' || b.status === 'in-progress');
}

export function getBooksByUniverse(universeId: string): Book[] {
  return books.filter((b) => b.universeId === universeId);
}
