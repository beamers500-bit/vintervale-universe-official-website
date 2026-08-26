import type { Universe } from './types';

export const universes: Universe[] = [
  {
    id: 'universe-vintervale',
    name: 'The Vintervale Universe',
    tagline: 'The world does not bend to pride.',
    description: 'The official home of the Vintervale Universe — its chronicles, characters, visual canon, world, and expanding lore.',
    coverImage: '/artwork/seraphina-floppy-duo.jpg',
    coverImageAlt: 'Princess Seraphina and Sir Flopplesworth the Third together in Vintervale',
    status: 'active',
    isPlaceholder: false,
  },
];

export function getUniverseById(id: string): Universe | undefined {
  return universes.find((u) => u.id === id);
}

export function getActiveUniverses(): Universe[] {
  return universes.filter((u) => u.status === 'active');
}
