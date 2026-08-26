import type { Character } from './types';

export const characters: Character[] = [
  {
    id: 'char-seraphina',
    name: 'Princess Seraphina Aurelia von Vintervale',
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/seraphina-portrait.PNG',
    portraitImageAlt: 'Princess Seraphina Aurelia von Vintervale in her emerald-and-gold royal dress',
    description: 'Princess Seraphina Aurelia von Vintervale is the central princess of Vintervale. Her established visual identity includes long auburn hair, green eyes, pointed ears, an emerald-and-gold royal dress, and a jeweled crown.',
    personality: 'Proud, self-possessed, confident, and central to the Vintervale story.',
    role: 'Princess of Vintervale',
    associatedBookIds: ['book-001'],
    isPlaceholder: false,
  },
  {
    id: 'char-floppy',
    name: 'Sir Flopplesworth the Third',
    aliases: ['Floppy'],
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/floppy-portrait.PNG',
    portraitImageAlt: 'Sir Flopplesworth the Third, known as Floppy',
    description: 'Sir Flopplesworth the Third, most often called Floppy, is an anthropomorphic cream-white rabbit whose established design features large green eyes, long upright ears, and a green-and-gold waistcoat.',
    personality: 'Friendly, confident, and unmistakably mischievous.',
    role: 'Companion and central Vintervale character',
    associatedBookIds: ['book-001'],
    isPlaceholder: false,
  },
  {
    id: 'char-king-vintervale',
    name: 'King of Vintervale',
    aliases: ['King Aldric'],
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/king-portrait.jpg',
    portraitImageAlt: 'The King of Vintervale in blue-and-gold royal dress',
    description: 'The King of Vintervale is depicted as a mature royal figure with blue eyes, dark wavy hair, a full greying beard, a gold crown set with blue gemstones, and richly embroidered blue-and-gold regalia.',
    role: 'King of Vintervale',
    isPlaceholder: false,
  },
  {
    id: 'char-queen-vintervale',
    name: 'Queen of Vintervale',
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/queen-portrait.jpg',
    portraitImageAlt: 'The Queen of Vintervale in blue-and-gold royal dress',
    role: 'Queen of Vintervale',
    isPlaceholder: false,
  },
  {
    id: 'char-kael',
    name: 'Commander Kael',
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/kael-portrait.jpg',
    portraitImageAlt: 'Commander Kael',
    description: 'Kael is a tall, imposing commander associated with the Frostbound Legion. His established visual language includes froststeel armour with blue reflective qualities and disciplined military bearing.',
    personality: 'Disciplined, tactical, protective, and authoritative.',
    role: 'Commander of the Frostbound Legion',
    associatedBookIds: ['book-001'],
    isPlaceholder: false,
  },
  {
    id: 'char-vargan',
    name: 'Vargan',
    epithet: 'High Chieftain of Thrymdor',
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/vargan-portrait.jpg',
    portraitImageAlt: 'Vargan, High Chieftain of Thrymdor',
    description: 'Vargan is the High Chieftain of Thrymdor: exceptionally large and powerfully built, with a braided beard, sharp blue eyes, a scar crossing his brow, and an axe associated with his role as a northern ruler and warrior.',
    personality: 'Calm, controlled, practical, protective, and dryly humorous.',
    role: 'High Chieftain of Thrymdor',
    associatedBookIds: ['book-001'],
    isPlaceholder: false,
  },
  {
    id: 'char-rhalgor',
    name: 'Rhalgor',
    epithet: 'Frostbound Warrior',
    universeId: 'universe-vintervale',
    portraitImage: '/artwork/rhalgor-portrait.jpg',
    portraitImageAlt: 'Rhalgor, an enormous Frostbound warrior',
    description: 'Rhalgor is an enormous Frostbound warrior who faces Seraphina during a physical-strength test. He is established as towering and roughly twice Seraphina\'s height.',
    role: 'Frostbound warrior',
    associatedBookIds: ['book-001'],
    isPlaceholder: false,
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
