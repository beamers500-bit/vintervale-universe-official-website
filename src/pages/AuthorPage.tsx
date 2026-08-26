import { Feather, Building2 } from 'lucide-react';
import { authorInfo } from '@/data/author';
import { Ornament, PlaceholderTag } from '@/components/ui/Decorations';
import { navigate } from '@/router';

export function AuthorPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />

          <p className="eyebrow mb-4">About the Author</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">
            Martin Wett
          </h1>

          <p className="font-serif text-xl text-gold-300 italic mt-4">
            Author & Creator
          </p>

          <Ornament className="mt-8" />
        </div>
      </section>

      {/* Portrait + Biography */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative aspect-[2/1] overflow-hidden rounded-sm card-surface">

                  {authorInfo.portraitImage ? (
                    <img
                      src={authorInfo.portraitImage}
                      alt={`Portrait of ${authorInfo.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800/50 to-ink-900 p-12">
                      <div className="text-center">

                        <div className="mx-auto mb-6 w-32 h-32 rounded-full border border-ink-600/50 flex items-center justify-center bg-ink-800/50">
                          <Feather
                            size={48}
                            className="text-ink-600"
                          />
                        </div>

                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">
                          Author Portrait
                        </p>

                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">
                          Placeholder
                        </p>

                      </div>
                    </div>
                  )}

                </div>

                {authorInfo.isPlaceholder && (
                  <div className="mt-4 flex justify-center">
                    <PlaceholderTag label="Portrait Forthcoming" />
                  </div>
                )}
              </div>
            </div>

            {/* Biography */}
            <div className="lg:col-span-3">
              <Ornament className="mb-8 justify-start" />

              <div>
                <h2 className="font-display text-lg text-gold-300 mb-4">
                  The Author
                </h2>

                {authorInfo.biography ? (
                  <div className="body-serif text-ink-200 space-y-4">
                    {authorInfo.biography
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <p key={index}>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                ) : (
                  <div>
                    <p className="font-serif text-ink-500 italic text-lg leading-relaxed">
                      Martin Wett is an author and creator of fictional
                      universes, including The Vintervale Universe. A
                      biographical profile will be presented here once
                      provided.
                    </p>

                    <div className="mt-4">
                      <PlaceholderTag label="Biography Forthcoming" />
                    </div>
                  </div>
                )}
              </div>

              {/* Publisher */}
              <div className="mt-10 pt-8 border-t border-ink-800/60">
                <h2 className="font-display text-lg text-gold-300 mb-4">
                  Publisher
                </h2>

                <div className="flex items-center gap-3">
                  <Building2
                    size={18}
                    className="text-vintervale-400"
                  />

                  <p className="font-serif text-ink-300">
                    Published and maintained by{' '}
                    <span className="text-ink-100">
                      Wholebook Inc.
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-ink-800/60">
                <p className="font-serif text-ink-400 leading-relaxed mb-6">
                  Explore the literary works of Martin Wett — books,
                  universes, characters, and lore.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate({ name: 'books' })}
                    className="btn-primary"
                  >
                    Discover the Books
                  </button>

                  <button
                    onClick={() => navigate({ name: 'contact' })}
                    className="btn-ghost"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
