import type { LoreEntry } from './types';

export const loreEntries: LoreEntry[] = [];

export function getLoreById(id: string): LoreEntry | undefined {
  return loreEntries.find((l) => l.id === id);
}

export function getLoreByCategory(category: string): LoreEntry[] {
  return loreEntries.filter((l) => l.category === category);
}

export const loreCategories: { id: string; label: string; description: string }[] = [
  { id: 'history', label: 'History', description: 'The recorded events that shaped Vintervale.' },
  { id: 'mythology', label: 'Mythology', description: 'The myths, legends, and beliefs of the universe.' },
  { id: 'cultures', label: 'Cultures', description: 'The peoples, customs, and traditions of Vintervale.' },
  { id: 'factions', label: 'Factions & Groups', description: 'The organizations and alliances at play.' },
  { id: 'creatures', label: 'Creatures', description: 'The beings that inhabit the world.' },
  { id: 'objects', label: 'Objects & Artifacts', description: 'Significant items of power and history.' },
  { id: 'events', label: 'Events', description: 'Pivotal moments in the chronicle.' },
  { id: 'timelines', label: 'Timelines', description: 'The chronological threads of the universe.' },
];
