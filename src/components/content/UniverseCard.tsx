import { Globe, ArrowRight } from 'lucide-react';
import type { Universe } from '@/data/types';
import { navigate } from '@/router';
import { PlaceholderTag } from '../ui/Decorations';

interface UniverseCardProps {
  universe: Universe;
}

export function UniverseCard({ universe }: UniverseCardProps) {
  return (
    <article
      onClick={() => navigate({ name: 'universe', id: universe.id })}
      className="group cursor-pointer card-surface card-surface-hover rounded-sm overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
        {universe.coverImage ? (
          <img
            src={universe.coverImage}
            alt={universe.coverImageAlt || universe.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800/40 to-ink-900">
            <div className="text-center">
              <Globe size={32} className="text-ink-600 mx-auto mb-2" />
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Universe Artwork</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Placeholder</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        {universe.status === 'forthcoming' && (
          <p className="eyebrow mb-2">Forthcoming</p>
        )}
        <h3 className="font-display text-xl text-ink-50 mb-2 group-hover:text-gold-200 transition-colors">
          {universe.name}
        </h3>
        {universe.tagline && (
          <p className="font-serif text-sm text-ink-400 italic mb-3">{universe.tagline}</p>
        )}
        {universe.description ? (
          <p className="font-serif text-ink-400 leading-relaxed line-clamp-3">{universe.description}</p>
        ) : (
          <div className="mb-4">
            <PlaceholderTag label="Description Forthcoming" />
          </div>
        )}
        <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-vintervale-300 group-hover:text-vintervale-200 transition-colors">
          Enter the Universe <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
}
