import { ArrowLeft, BookOpen, Calendar, Building2, Users, MapPin, Scroll, ShoppingBag, Globe } from 'lucide-react';
import { getBookById } from '@/data/books';
import { getCharactersByBook } from '@/data/characters';
import { getLocationsByBook } from '@/data/world';
import { getUniverseById } from '@/data/universes';
import { navigate } from '@/router';
import { Ornament, PlaceholderTag, EmptyState } from '@/components/ui/Decorations';
import { CharacterCard } from '@/components/content/CharacterCard';
import { LocationCard } from '@/components/content/LocationCard';

interface BookDetailPageProps {
  bookId: string;
}

export function BookDetailPage({ bookId }: BookDetailPageProps) {
  const book = getBookById(bookId);

  if (!book) {
    return (
      <div className="pt-24">
        <EmptyState
          title="Chronicle Not Found"
          message="This book could not be found in the archive. It may not yet have been added to the universe."
          icon={<BookOpen size={40} />}
        />
      </div>
    );
  }

  const relatedCharacters = book.relatedCharacterIds?.map((id) => getCharactersByBook(bookId).find((c) => c.id === id)).filter(Boolean) ?? [];
  const relatedLocations = book.relatedLocationIds?.map((id) => getLocationsByBook(bookId).find((l) => l.id === id)).filter(Boolean) ?? [];
  const statusLabel = book.status === 'published' ? 'Published' : book.status === 'forthcoming' ? 'Forthcoming' : 'In Progress';

  return (
    <div className="pt-24">
      {/* Back link */}
      <div className="container-wide py-8">
        <button
          onClick={() => navigate({ name: 'books' })}
          className="inline-flex items-center gap-2 font-sans text-sm text-ink-400 hover:text-vintervale-300 transition-colors"
        >
          <ArrowLeft size={14} /> All Chronicles
        </button>
      </div>

      {/* Book Hero */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Cover */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm card-surface">
                  {book.coverImage ? (
                    <img src={book.coverImage} alt={book.coverImageAlt || `Cover of ${book.title}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800 to-ink-900 p-12">
                      <div className="text-center">
                        <div className="mx-auto mb-6 w-32 h-44 border border-ink-600/50 rounded-sm flex items-center justify-center bg-gradient-to-b from-ink-700/50 to-ink-900">
                          <BookOpen size={40} className="text-ink-600" />
                        </div>
                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">Official Cover Art</p>
                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">Placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
                {book.isPlaceholder && (
                  <div className="mt-4 flex justify-center">
                    <PlaceholderTag label="Cover Art Forthcoming" />
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-3">
              {book.series && (
                <p className="eyebrow mb-4">
                  {book.series} {book.seriesOrder ? `· Book ${book.seriesOrder}` : ''}
                </p>
              )}
              {book.title ? (
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-50 text-balance leading-tight">{book.title}</h1>
              ) : (
                <div className="mb-2">
                  <PlaceholderTag label="Official Title Forthcoming" />
                </div>
              )}
              {book.subtitle && <p className="font-serif text-xl text-ink-400 italic mt-3">{book.subtitle}</p>}
              {book.author && <p className="font-sans text-xs uppercase tracking-widest text-gold-400/80 mt-4">{book.author}</p>}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-300 bg-gold-500/10 border border-gold-500/20 rounded-sm">{statusLabel}</span>
                {book.universeId && (
                  <button
                    onClick={() => navigate({ name: 'universe', id: book.universeId! })}
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
              </div>

              <Ornament className="my-8 justify-start" />

              {/* Synopsis */}
              <div>
                <h2 className="font-display text-lg text-gold-300 mb-4">Synopsis</h2>
                {book.synopsis ? (
                  <p className="body-serif text-ink-200">{book.synopsis}</p>
                ) : (
                  <div>
                    <p className="font-serif text-ink-500 italic text-lg leading-relaxed">
                      The official synopsis for this chronicle will be presented here once provided by the author.
                    </p>
                    <div className="mt-4"><PlaceholderTag label="Synopsis Forthcoming" /></div>
                  </div>
                )}
              </div>

              {/* Excerpts */}
              {book.excerpts && book.excerpts.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Excerpt</h2>
                  <blockquote className="border-l-2 border-vintervale-600/50 pl-6 font-serif text-lg text-ink-200 italic leading-relaxed">
                    {book.excerpts[0]}
                  </blockquote>
                </div>
              )}

              {/* Editions */}
              {book.editions && book.editions.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Editions</h2>
                  <div className="space-y-3">
                    {book.editions.map((edition, i) => (
                      <div key={i} className="flex items-center justify-between card-surface rounded-sm p-4">
                        <span className="font-sans text-sm text-ink-200">{edition.format}</span>
                        {edition.isbn && <span className="font-sans text-xs text-ink-500">ISBN: {edition.isbn}</span>}
                        <span className="font-sans text-xs text-vintervale-400 capitalize">{edition.availability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Purchase Links */}
              {book.purchaseLinks && book.purchaseLinks.length > 0 ? (
                <div className="mt-10">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Purchase</h2>
                  <div className="flex flex-wrap gap-3">
                    {book.purchaseLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ShoppingBag size={14} /> {link.retailer}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-10">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Purchase</h2>
                  <div className="flex items-center gap-3">
                    <p className="font-serif text-ink-500 italic">Purchase links will be added once available.</p>
                    <PlaceholderTag label="Forthcoming" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Characters */}
      {relatedCharacters.length > 0 && (
        <section className="section-padding border-t border-ink-800/40">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-10">
              <Users size={20} className="text-vintervale-400" />
              <h2 className="font-display text-2xl text-ink-50">Characters in this Chronicle</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCharacters.map((char) => char && <CharacterCard key={char.id} character={char} />)}
            </div>
          </div>
        </section>
      )}

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="section-padding border-t border-ink-800/40">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-10">
              <MapPin size={20} className="text-vintervale-400" />
              <h2 className="font-display text-2xl text-ink-50">Locations in this Chronicle</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLocations.map((loc) => loc && <LocationCard key={loc.id} location={loc} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
