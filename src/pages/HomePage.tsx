import { BookOpen, Users, Globe, ArrowRight, Sparkles, Library } from 'lucide-react';
import { navigate } from '@/router';
import { getPublishedBooks, getBooksByUniverse } from '@/data/books';
import { characters } from '@/data/characters';
import { universes } from '@/data/universes';
import { newsPosts } from '@/data/news';
import { BookCard } from '@/components/content/BookCard';
import { CharacterCard } from '@/components/content/CharacterCard';
import { UniverseCard } from '@/components/content/UniverseCard';
import { Ornament, SectionHeading, PlaceholderTag } from '@/components/ui/Decorations';

export function HomePage() {
  const publishedBooks = getPublishedBooks();
  const featuredBook = publishedBooks[0];
  const featuredUniverse = universes[0];
  const universeBooks = featuredUniverse ? getBooksByUniverse(featuredUniverse.id) : [];
  const universeCharacters = characters.filter((c) => c.universeId === featuredUniverse?.id);
  const featuredCharacters = universeCharacters.slice(0, 4);
  const recentNews = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2);

  return (
    <div>
      {/* Hero — Martin Wett as primary brand */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grain">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/80 to-ink-950" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 50% 30%, rgba(47,117,104,0.15) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 80% 70%, rgba(192,136,46,0.08) 0%, transparent 50%)',
            }}
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-vintervale-300/20 animate-float"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                top: `${15 + i * 12}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container-wide text-center py-32">
          <div className="animate-fade-in-down">
            <Ornament className="mb-10" />
            <p className="eyebrow mb-6">Author & Creator</p>
          </div>

          <h1 className="animate-fade-in-up font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-ink-50 text-balance leading-[1.05] text-shadow-strong" style={{ animationDelay: '0.15s' }}>
            Martin Wett
          </h1>

          <p className="animate-fade-in-up mt-8 font-serif text-lg sm:text-xl lg:text-2xl text-ink-300 max-w-2xl mx-auto leading-relaxed text-balance" style={{ animationDelay: '0.3s' }}>
            The official literary home of Martin Wett — author and creator of fictional universes, novels, and stories.
          </p>

          <div className="animate-fade-in-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.45s' }}>
            <button onClick={() => navigate({ name: 'books' })} className="btn-primary">
              <BookOpen size={16} /> Discover the Books
            </button>
            <button onClick={() => navigate({ name: 'universes' })} className="btn-ghost">
              <Globe size={16} /> Explore the Universes
            </button>
            <button onClick={() => navigate({ name: 'author' })} className="btn-ghost">
              <Users size={16} /> About the Author
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-shimmer">
          <span className="font-sans text-[10px] uppercase tracking-widest text-ink-600">Descend</span>
          <div className="w-px h-12 bg-gradient-to-b from-ink-600 to-transparent" />
        </div>
      </section>

      {/* Featured Universe — The Vintervale Universe */}
      {featuredUniverse && (
        <section className="section-padding relative">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Featured Universe"
              title="The Vintervale Universe"
              subtitle="Martin Wett's principal literary universe — a world of chronicles, characters, and lore."
            />
            <div className="mt-12 max-w-md mx-auto">
              <UniverseCard universe={featuredUniverse} />
            </div>
            <div className="mt-12 text-center">
              <button onClick={() => navigate({ name: 'universe', id: featuredUniverse.id })} className="btn-primary">
                <Globe size={16} /> Enter the Universe
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Book */}
      {featuredBook && (
        <section className="section-padding relative border-t border-ink-800/40">
          <div className="container-wide">
            <SectionHeading
              eyebrow="The Vintervale Chronicles"
              title="Book One"
              subtitle="The published book at the centre of The Vintervale Universe."
            />
            <div className="mt-16 max-w-4xl mx-auto">
              <BookCard book={featuredBook} featured />
            </div>
            <div className="mt-12 text-center">
              <button onClick={() => navigate({ name: 'book', id: featuredBook.id })} className="btn-primary">
                <BookOpen size={16} /> Discover the Book
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Explore the Work */}
      <section className="section-padding relative border-t border-ink-800/40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Body of Work"
            title="Explore"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <UniverseTile
              icon={<BookOpen size={28} />}
              title="Books"
              description="All books by Martin Wett — novels, chronicles, and forthcoming works."
              cta="Browse the Books"
              onClick={() => navigate({ name: 'books' })}
            />
            <UniverseTile
              icon={<Globe size={28} />}
              title="Universes & Series"
              description="The fictional universes and series created by Martin Wett."
              cta="Explore Universes"
              onClick={() => navigate({ name: 'universes' })}
            />
            <UniverseTile
              icon={<Users size={28} />}
              title="Characters"
              description="Characters from across Martin Wett's literary universes."
              cta="Meet the Cast"
              onClick={() => navigate({ name: 'characters' })}
            />
          </div>
        </div>
      </section>

      {/* Featured Characters */}
      {featuredCharacters.length > 0 && (
        <section className="section-padding relative border-t border-ink-800/40">
          <div className="container-wide">
            <SectionHeading
              eyebrow="From The Vintervale Universe"
              title="Characters"
            />
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCharacters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Universes Teaser */}
      <section className="section-padding relative border-t border-ink-800/40">
        <div className="container-wide">
          <div className="card-surface rounded-sm p-12 text-center max-w-2xl mx-auto">
            <Library size={32} className="text-gold-400/60 mx-auto mb-6" />
            <h2 className="font-display text-2xl text-ink-50 mb-4">More Worlds to Come</h2>
            <p className="font-serif text-ink-400 leading-relaxed mb-6">
              The Vintervale Universe is the first of Martin Wett's literary properties. Future novels, series, and fictional universes will appear here alongside it.
            </p>
            <button onClick={() => navigate({ name: 'universes' })} className="btn-ghost">
              View All Universes <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="section-padding relative border-t border-ink-800/40">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow mb-3">Latest Word</p>
              <h2 className="heading-section">News & Updates</h2>
            </div>
            <button onClick={() => navigate({ name: 'news' })} className="btn-ghost self-start sm:self-auto">
              All Updates <ArrowRight size={14} />
            </button>
          </div>
          {recentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNews.map((post) => (
                <NewsCardMinimal key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="card-surface rounded-sm p-12 text-center">
              <Sparkles size={32} className="text-gold-400/40 mx-auto mb-6" />
              <p className="body-serif text-ink-400 max-w-md mx-auto">
                Official updates from Martin Wett will appear here as they are announced.
              </p>
              <div className="mt-6 flex justify-center">
                <PlaceholderTag label="No Announcements Yet" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function UniverseTile({ icon, title, description, cta, onClick }: { icon: React.ReactNode; title: string; description: string; cta: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group text-left card-surface card-surface-hover rounded-sm p-8">
      <div className="w-14 h-14 rounded-sm border border-vintervale-700/40 bg-vintervale-900/20 flex items-center justify-center text-vintervale-400 mb-6 group-hover:border-vintervale-500/60 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl text-ink-50 mb-3 group-hover:text-gold-200 transition-colors">{title}</h3>
      <p className="font-serif text-ink-400 leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 font-sans text-sm text-vintervale-300 group-hover:text-vintervale-200 transition-colors">
        {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
}

function NewsCardMinimal({ post }: { post: import('@/data/types').NewsPost }) {
  return (
    <article className="card-surface card-surface-hover rounded-sm p-6">
      <time className="font-sans text-xs text-ink-500" dateTime={post.date}>
        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <h3 className="font-display text-lg text-ink-50 mt-2 mb-2">{post.title}</h3>
      {post.excerpt && <p className="font-serif text-ink-400 line-clamp-2">{post.excerpt}</p>}
    </article>
  );
}
