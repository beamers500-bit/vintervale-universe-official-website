import { User } from 'lucide-react';
import type { Character } from '@/data/types';
import { navigate } from '@/router';
import { PlaceholderTag } from '../ui/Decorations';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article
      onClick={() => navigate({ name: 'character', id: character.id })}
      className="group cursor-pointer card-surface card-surface-hover rounded-sm overflow-hidden"
    >
      {/* Portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
        {character.portraitImage ? (
          <img
            src={character.portraitImage}
            alt={character.portraitImageAlt || `Portrait of ${character.name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800/50 to-ink-900">
            <div className="text-center">
              <div className="mx-auto mb-3 w-16 h-16 rounded-full border border-ink-600/40 flex items-center justify-center">
                <User size={24} className="text-ink-600" />
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Portrait</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Placeholder</p>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg text-ink-50 leading-tight mb-1 group-hover:text-gold-200 transition-colors">
          {character.name}
        </h3>
        {character.aliases && character.aliases.length > 0 && (
          <p className="font-serif text-sm text-ink-400 italic mb-3">
            known as {character.aliases.join(', ')}
          </p>
        )}
        {character.role ? (
          <p className="font-sans text-xs text-vintervale-400 uppercase tracking-wide">{character.role}</p>
        ) : character.isPlaceholder ? (
          <PlaceholderTag label="Profile Forthcoming" />
        ) : null}
      </div>
    </article>
  );
}
