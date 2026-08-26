import { Scroll, Users, MapPin, BookOpen } from 'lucide-react';
import type { LoreEntry } from '@/data/types';
import { navigate } from '@/router';
import { PlaceholderTag } from '../ui/Decorations';

const categoryIcons: Record<string, typeof Scroll> = {
  history: Scroll,
  mythology: Scroll,
  cultures: Users,
  factions: Users,
  creatures: Scroll,
  objects: Scroll,
  events: Scroll,
  timelines: Scroll,
};

interface LoreCardProps {
  entry: LoreEntry;
}

export function LoreCard({ entry }: LoreCardProps) {
  const Icon = categoryIcons[entry.category] || Scroll;

  return (
    <article
      onClick={() => entry.universeId && navigate({ name: 'universe', id: entry.universeId, section: 'lore' })}
      className="group cursor-pointer card-surface card-surface-hover rounded-sm p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-sm border border-vintervale-700/40 bg-vintervale-900/20 flex items-center justify-center text-vintervale-400 group-hover:border-vintervale-500/60 transition-colors">
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="eyebrow mb-1.5 capitalize">{entry.category}</p>
          <h3 className="font-display text-lg text-ink-50 mb-2 group-hover:text-gold-200 transition-colors">{entry.title}</h3>
          {entry.summary ? (
            <p className="font-serif text-ink-400 leading-relaxed line-clamp-3">{entry.summary}</p>
          ) : (
            <PlaceholderTag label="Entry Forthcoming" />
          )}
        </div>
      </div>
    </article>
  );
}
