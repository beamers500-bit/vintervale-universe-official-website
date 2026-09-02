import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { getRecentNews, type VintervaleNewsPost } from '@/data/news';
import { Ornament } from '@/components/ui/Decorations';

const POSTS_PER_PAGE = 10;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function NewsBanner({
  post,
  onOpen,
}: {
  post: VintervaleNewsPost;
  onOpen: (post: VintervaleNewsPost) => void;
}) {
  const hasImage = Boolean(post.image);

  return (
    <article className="group card-surface card-surface-hover rounded-sm overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(post)}
        className={`w-full text-left ${
          hasImage ? 'md:grid md:grid-cols-[280px_1fr]' : ''
        }`}
        aria-label={`Read ${post.title}`}
      >
        {post.image && (
          <div className="aspect-[16/9] md:aspect-auto md:min-h-[190px] overflow-hidden bg-ink-900">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="p-6 sm:p-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
            <span className="inline-flex items-center gap-2 font-sans text-xs text-ink-500">
              <Calendar size={14} className="text-gold-400/60" />
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </span>

            {post.category && (
              <span className="font-sans text-[10px] uppercase tracking-widest text-vintervale-400 border border-vintervale-700/40 px-2 py-0.5 rounded-sm">
                {post.category}
              </span>
            )}
          </div>

          <h2 className="font-display text-xl sm:text-2xl text-ink-50 group-hover:text-gold-200 transition-colors">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="font-serif text-ink-300 leading-relaxed mt-3 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <span className="inline-flex items-center gap-2 mt-5 font-sans text-xs uppercase tracking-[0.16em] text-gold-300">
            Read More
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </button>
    </article>
  );
}

function NewsArticle({
  post,
  onBack,
}: {
  post: VintervaleNewsPost;
  onBack: () => void;
}) {
  return (
    <section className="section-padding pt-8">
      <div className="container-wide">
        <article className="max-w-4xl mx-auto">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-ink-400 hover:text-gold-300 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to News
          </button>

          {post.image && (
            <div className="aspect-[16/9] overflow-hidden rounded-sm card-surface mb-10">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
            <span className="inline-flex items-center gap-2 font-sans text-xs text-ink-500">
              <Calendar size={14} className="text-gold-400/60" />
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </span>

            {post.category && (
              <span className="font-sans text-[10px] uppercase tracking-widest text-vintervale-400 border border-vintervale-700/40 px-2 py-0.5 rounded-sm">
                {post.category}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-50 text-balance">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-serif text-xl text-ink-300 leading-relaxed mt-6">
              {post.excerpt}
            </p>
          )}

          {post.body && post.body.length > 0 && (
            <div className="mt-10 pt-8 border-t border-ink-800/60 space-y-6">
              {post.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="body-serif text-ink-200"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export function NewsPage() {
  const posts = useMemo(() => getRecentNews(), []);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPost, setSelectedPost] =
    useState<VintervaleNewsPost | null>(null);

  const totalPages = Math.ceil(
    posts.length / POSTS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * POSTS_PER_PAGE;

  const visiblePosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage, selectedPost]);

  const goToPage = (page: number) => {
    const safePage = Math.min(
      Math.max(page, 1),
      totalPages || 1,
    );

    setSelectedPost(null);
    setCurrentPage(safePage);
  };

  return (
    <div className="pt-24">
      {/* Header */}

      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />

          <p className="eyebrow mb-4">
            Latest Word
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">
            News & Updates
          </h1>

          <Ornament className="mt-8" />

          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            Official announcements from the
            Vintervale Universe.
          </p>
        </div>
      </section>

      {selectedPost ? (
        <NewsArticle
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      ) : posts.length > 0 ? (
        <section className="section-padding pt-8">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto space-y-5">
              {visiblePosts.map((post) => (
                <NewsBanner
                  key={post.id}
                  post={post}
                  onOpen={setSelectedPost}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="max-w-5xl mx-auto mt-12 pt-8 border-t border-ink-800/60 flex flex-wrap justify-center items-center gap-2"
                aria-label="News pagination"
              >
                <button
                  type="button"
                  onClick={() => goToPage(1)}
                  disabled={currentPage === 1}
                  className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
                >
                  First
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-current={
                      currentPage === page
                        ? 'page'
                        : undefined
                    }
                    className={
                      currentPage === page
                        ? 'min-w-10 h-10 px-3 rounded-sm border border-gold-500/50 bg-gold-500/10 font-sans text-sm text-gold-200'
                        : 'min-w-10 h-10 px-3 rounded-sm border border-ink-700/50 font-sans text-sm text-ink-400 hover:text-gold-200 hover:border-gold-500/30 transition-colors'
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    goToPage(currentPage + 1)
                  }
                  disabled={
                    currentPage === totalPages
                  }
                  className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToPage(totalPages)
                  }
                  disabled={
                    currentPage === totalPages
                  }
                  className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
                >
                  Last
                </button>
              </nav>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
