import { Newspaper, ArrowRight } from 'lucide-react';
import { newsPosts, getRecentNews } from '@/data/news';
import { NewsCard } from '@/components/content/NewsCard';
import { SectionHeading, Ornament, EmptyState, PlaceholderTag } from '@/components/ui/Decorations';

export function NewsPage() {
  const posts = getRecentNews();

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">Latest Word</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">News & Updates</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            Official announcements from the Vintervale Universe.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          {posts.length > 0 ? (
            <>
              <SectionHeading eyebrow="Recent" title="Updates" center={false} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {posts.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              title="No Announcements Yet"
              message="Official updates from the Vintervale Universe will appear here as they are announced."
              icon={<Newspaper size={40} />}
            />
          )}
        </div>
      </section>

      {/* Subscribe teaser */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="card-surface rounded-sm p-12 text-center max-w-2xl mx-auto">
            <Ornament className="mb-8" />
            <h2 className="font-display text-2xl text-ink-50 mb-4">Stay Connected</h2>
            <p className="font-serif text-ink-400 leading-relaxed mb-6">
              Official updates from the Vintervale Universe will be shared here as they are announced.
            </p>
            <div className="flex justify-center">
              <PlaceholderTag label="Newsletter Forthcoming" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
