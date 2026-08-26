import type { WorldLocation } from './types';

export const worldLocations: WorldLocation[] = [];

export function getLocationById(id: string): WorldLocation | undefined {
  return worldLocations.find((l) => l.id === id);
}

export function getLocationsByBook(bookId: string): WorldLocation[] {
  return worldLocations.filter((l) => l.relatedBookIds?.includes(bookId));
}
