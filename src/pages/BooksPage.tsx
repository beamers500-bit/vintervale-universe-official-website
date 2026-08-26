import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { books, getPublishedBooks, getForthcomingBooks, getBooksByUniverse } from '@/data/books';
import { universes, getUniverseById } from '@/data/universes';
import { BookCard } from '@/components/content/BookCard';
import { SectionHeading, Ornament, EmptyState } from '@/components/ui/Decorations';
import { navigate } from '@/router';

export function BooksPage() {
  const published = getPublishedBooks();
  const forthcoming = getForthcomingBooks();
  const [filter, setFilter] = useState<string>('all');

  const filterButtons = [
    { id: 'all', label: 'All Books' },
    ...universes.map((u) => ({ id: u.id, label: u.name })),
  ];

  const filteredPublished = filter === 'all' ? published : getBooksByUniverse(filter).filter((b) => b.status === 'published');
  const filteredForthcoming = filter === 'all' ? forthcoming : getBooksByUniverse(filter).filter((b) => b.status !== 'published');

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">The Books of Martin Wett</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">Books</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            All books by Martin Wett — novels, chronicles, standalone works, and forthcoming titles. Books may belong to a fictional universe, a series, or stand alone.
          </p>
        </div>
      </section>

      {/* Universe Filter */}
      {universes.length > 1 && (
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 font-sans text-xs uppercase tracking-wide rounded-sm border transition-all duration-300 ${
                  filter === btn.id
                    ? 'text-gold-200 border-gold-400/50 bg-gold-500/10'
                    : 'text-ink-400 border-ink-700 hover:border-ink-500 hover:text-ink-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Published */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          {filter !== 'all' && (
            <p className="eyebrow mb-6">
              Part of {getUniverseById(filter)?.name}
            </p>
          )}
          <SectionHeading
            eyebrow="Available Now"
            title="Published Books"
            center={false}
          />
          {filteredPublished.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-8">
              {filteredPublished.map((book) => (
                <BookCard key={book.id} book={book} featured />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Published Books in This Category"
              message="Published works will be showcased here as they are released."
              icon={<BookOpen size={40} />}
            />
          )}
        </div>
      </section>

      {/* Forthcoming */}
      {filteredForthcoming.length > 0 && (
        <section className="section-padding pt-8 border-t border-ink-800/40">
          <div className="container-wide">
            <SectionHeading
              eyebrow="On the Horizon"
              title="Forthcoming Works"
              center={false}
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredForthcoming.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reusable system note */}
      <section className="pb-20">
        <div className="container-prose text-center">
          <Ornament className="mb-8" />
          <p className="font-serif text-ink-500 italic text-lg">
            Each book by Martin Wett will be listed here — whether part of The Vintervale Universe, another series, or a standalone novel. The books section grows with each new publication.
          </p>
          {universes.length > 0 && (
            <button onClick={() => navigate({ name: 'universes' })} className="mt-6 btn-ghost">
              Browse by Universe
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
