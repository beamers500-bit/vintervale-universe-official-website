import { MapPin } from 'lucide-react';
import type { WorldLocation } from '@/data/types';
import { PlaceholderTag } from '../ui/Decorations';

interface LocationCardProps {
  location: WorldLocation;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="group card-surface card-surface-hover rounded-sm overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
        {location.image ? (
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800/40 to-ink-900">
            <div className="text-center">
              <MapPin size={28} className="text-ink-600 mx-auto mb-2" />
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Location Art</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Placeholder</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        {location.type && <p className="eyebrow mb-2">{location.type}</p>}
        <h3 className="font-display text-lg text-ink-50 mb-2 group-hover:text-gold-200 transition-colors">{location.name}</h3>
        {location.description ? (
          <p className="font-serif text-ink-400 leading-relaxed line-clamp-3">{location.description}</p>
        ) : (
          <PlaceholderTag label="Description Forthcoming" />
        )}
      </div>
    </article>
  );
}
