import type { Universe } from './types';

export const universes: Universe[] = [
  {
    id: 'universe-vintervale',
    name: 'The Vintervale Universe',
    tagline: undefined,
    description: undefined,
    coverImage: undefined,
    coverImageAlt: undefined,
    status: 'active',
    isPlaceholder: true,
  },
];

export function getUniverseById(id: string): Universe | undefined {
  return universes.find((u) => u.id === id);
}

export function getActiveUniverses(): Universe[] {
  return universes.filter((u) => u.status === 'active');
}
