import { BookOpen, Calendar, Building2, Globe } from 'lucide-react';
import type { Book } from '@/data/types';
import { navigate } from '@/router';
import { getUniverseById } from '@/data/universes';
import { PlaceholderTag } from '../ui/Decorations';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export function BookCard({ book, featured = false }: BookCardProps) {
  const statusLabel = book.status === 'published' ? 'Published' : book.status === 'forthcoming' ? 'Forthcoming' : 'In Progress';

  return (
    <article
      onClick={() => navigate({ name: 'book', id: book.id })}
      className={`group cursor-pointer card-surface card-surface-hover rounded-sm overflow-hidden ${
        featured ? 'sm:flex sm:items-stretch' : ''
      }`}
    >
      {/* Cover */}
      <div className={`relative overflow-hidden bg-ink-800 ${featured ? 'sm:w-2/5 lg:w-1/3' : 'aspect-[3/4]'}`}>
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.coverImageAlt || `Cover of ${book.title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-20 h-28 border border-ink-600/50 rounded-sm flex items-center justify-center bg-gradient-to-b from-ink-800 to-ink-900">
                <BookOpen size={28} className="text-ink-600" />
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Cover Art</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Placeholder</p>
            </div>
          </div>
        )}
        {book.status !== 'published' && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-[10px] font-sans uppercase tracking-widest text-gold-300 bg-ink-950/80 border border-gold-500/30 rounded-sm">
              {statusLabel}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 sm:p-8 flex flex-col ${featured ? 'sm:w-3/5 lg:w-2/3 sm:border-l border-ink-700/40' : ''}`}>
        {book.series && (
          <p className="eyebrow mb-3">
            {book.series} {book.seriesOrder ? `· Book ${book.seriesOrder}` : ''}
          </p>
        )}
        {book.title ? (
          <h3 className={`font-display ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'} text-ink-50 leading-tight mb-2`}>
            {book.title}
          </h3>
        ) : (
          <h3 className={`font-display ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'} text-ink-50 leading-tight mb-2`}>
            {book.title}
          </h3>
        )}
        {book.subtitle && (
          <p className="font-serif text-lg text-ink-400 italic mb-4">{book.subtitle}</p>
        )}
        {book.author && (
          <p className="font-sans text-xs uppercase tracking-widest text-gold-400/80 mb-4">{book.author}</p>
        )}

        {book.synopsis ? (
          <p className="font-serif text-ink-300 leading-relaxed line-clamp-4 mb-4">
            {book.synopsis}
          </p>
        ) : (
          <div className="mb-4">
            <PlaceholderTag label="Synopsis Forthcoming" />
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-ink-800/60">
          {book.universeId && (
            <button
              onClick={(e) => { e.stopPropagation(); navigate({ name: 'universe', id: book.universeId! }); }}
              className="flex items-center gap-1.5 font-sans text-xs text-vintervale-400 hover:text-vintervale-300 transition-colors"
            >
              <Globe size={12} /> {getUniverseById(book.universeId)?.name ?? 'Universe'}
            </button>
          )}
          {book.publicationDate && (
            <span className="flex items-center gap-1.5 font-sans text-xs text-ink-500">
              <Calendar size={12} /> {book.publicationDate}
            </span>
          )}
          {book.publisher && (
            <span className="flex items-center gap-1.5 font-sans text-xs text-ink-500">
              <Building2 size={12} /> {book.publisher}
            </span>
          )}
          <span className="ml-auto font-sans text-xs text-vintervale-400 group-hover:text-vintervale-300 transition-colors">
            Explore →
          </span>
        </div>
      </div>
    </article>
  );
}
