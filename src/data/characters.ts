import type { Character } from './types';

export const characters: Character[] = [
  {
    id: 'char-floppy',
    name: 'Sir Flopplesworth',
    aliases: ['Floppy'],
    epithet: undefined,
    universeId: 'universe-vintervale',
    portraitImage: undefined,
    portraitImageAlt: 'Portrait of Sir Flopplesworth, known as Floppy',
    description: undefined,
    personality: undefined,
    role: undefined,
    relationships: undefined,
    appearances: undefined,
    associatedBookIds: ['book-001'],
    quotations: undefined,
    isPlaceholder: true,
  },
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}

export function getCharactersByBook(bookId: string): Character[] {
  return characters.filter((c) => c.associatedBookIds?.includes(bookId));
}

export function getCharactersByUniverse(universeId: string): Character[] {
  return characters.filter((c) => c.universeId === universeId);
}
