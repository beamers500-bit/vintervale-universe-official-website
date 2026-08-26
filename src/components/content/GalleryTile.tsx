import { Image as ImageIcon } from 'lucide-react';
import type { GalleryItem } from '@/data/types';
import { PlaceholderTag } from '../ui/Decorations';

interface GalleryTileProps {
  item: GalleryItem;
}

export function GalleryTile({ item }: GalleryTileProps) {
  return (
    <figure className="group relative card-surface card-surface-hover rounded-sm overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-ink-800">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-800/40 to-ink-900">
            <div className="text-center">
              <ImageIcon size={32} className="text-ink-600 mx-auto mb-2" />
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Artwork</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Placeholder</p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="p-4">
        <p className="eyebrow mb-1 capitalize">{item.category}</p>
        <h3 className="font-display text-sm text-ink-100">{item.title}</h3>
        {item.description ? (
          <p className="font-serif text-sm text-ink-400 mt-1 line-clamp-2">{item.description}</p>
        ) : (
          <div className="mt-2"><PlaceholderTag label="Forthcoming" /></div>
        )}
      </figcaption>
    </figure>
  );
}
