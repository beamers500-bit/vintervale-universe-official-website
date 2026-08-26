export interface Universe {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  coverImage?: string;
  coverImageAlt?: string;
  status: 'active' | 'forthcoming';
  isPlaceholder?: boolean;
}

export interface Book {
  id: string;
  title: string;
  author?: string;
  subtitle?: string;
  universeId?: string;
  series?: string;
  seriesOrder?: number;
  status: 'published' | 'forthcoming' | 'in-progress';
  coverImage?: string;
  coverImageAlt?: string;
  synopsis?: string;
  publicationDate?: string;
  publisher?: string;
  editions?: BookEdition[];
  purchaseLinks?: PurchaseLink[];
  excerpts?: string[];
  relatedCharacterIds?: string[];
  relatedLocationIds?: string[];
  relatedLoreIds?: string[];
  galleryItemIds?: string[];
  isPlaceholder?: boolean;
}

export interface BookEdition {
  format: string;
  isbn?: string;
  availability: 'available' | 'preorder' | 'out-of-print' | 'forthcoming';
}

export interface PurchaseLink {
  retailer: string;
  url: string;
}

export interface Character {
  id: string;
  name: string;
  aliases?: string[];
  epithet?: string;
  universeId?: string;
  portraitImage?: string;
  portraitImageAlt?: string;
  description?: string;
  personality?: string;
  role?: string;
  relationships?: CharacterRelationship[];
  appearances?: string[];
  associatedBookIds?: string[];
  quotations?: string[];
  isPlaceholder?: boolean;
}

export interface CharacterRelationship {
  characterId: string;
  relation: string;
}

export interface WorldLocation {
  id: string;
  name: string;
  universeId?: string;
  type?: string;
  description?: string;
  parentLocationId?: string;
  relatedBookIds?: string[];
  relatedLoreIds?: string[];
  relatedCharacterIds?: string[];
  image?: string;
  isPlaceholder?: boolean;
}

export interface LoreEntry {
  id: string;
  title: string;
  universeId?: string;
  category: LoreCategory;
  summary?: string;
  content?: string;
  relatedBookIds?: string[];
  relatedCharacterIds?: string[];
  relatedLocationIds?: string[];
  relatedLoreIds?: string[];
  isPlaceholder?: boolean;
}

export type LoreCategory =
  | 'history'
  | 'mythology'
  | 'cultures'
  | 'factions'
  | 'creatures'
  | 'objects'
  | 'events'
  | 'timelines';

export interface GalleryItem {
  id: string;
  title: string;
  universeId?: string;
  description?: string;
  category: 'cover' | 'illustration' | 'concept' | 'promotional' | 'map';
  imageUrl?: string;
  isPlaceholder?: boolean;
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  body?: string;
  category?: string;
  isPlaceholder?: boolean;
}

export interface AuthorInfo {
  name: string;
  role: string;
  portraitImage?: string;
  biography?: string;
  publisher?: string;
  isPlaceholder?: boolean;
}
