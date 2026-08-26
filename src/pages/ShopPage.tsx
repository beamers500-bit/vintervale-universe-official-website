import { ShoppingBag, Package, Sparkles } from 'lucide-react';
import { Ornament, PlaceholderTag, SectionHeading } from '@/components/ui/Decorations';

export function ShopPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">The Vintervale Store</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">Shop & Merchandise</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            The official store for the Vintervale Universe — books, special editions, artwork, and collectibles. The marketplace will open as the universe grows.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="card-surface rounded-sm p-12 sm:p-16 text-center">
              <div className="mx-auto mb-8 w-20 h-20 rounded-full border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-gold-400/60">
                <ShoppingBag size={36} />
              </div>
              <Ornament className="mb-8" />
              <h2 className="font-display text-2xl sm:text-3xl text-ink-50 mb-4">The Store Is Being Prepared</h2>
              <p className="font-serif text-lg text-ink-400 leading-relaxed max-w-md mx-auto">
                The official Vintervale store will offer books, special editions, prints, and merchandise as the universe expands. Check back for the grand opening.
              </p>
              <div className="mt-8 flex justify-center">
                <PlaceholderTag label="Store Opening Forthcoming" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future categories */}
      <section className="section-padding border-t border-ink-800/40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What's Coming"
            title="Future Offerings"
            subtitle="The store is designed to carry a growing range of products as the Vintervale Universe expands."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ShopCategory icon={<Package size={24} />} title="Books & Editions" description="Hardcovers, paperbacks, special editions, and signed copies." />
            <ShopCategory icon={<Sparkles size={24} />} title="Artwork & Prints" description="Official illustrations, cover art prints, and concept pieces." />
            <ShopCategory icon={<ShoppingBag size={24} />} title="Collectibles" description="Merchandise and collectible items from the Vintervale Universe." />
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopCategory({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card-surface rounded-sm p-8">
      <div className="w-12 h-12 rounded-sm border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-gold-400/70 mb-6">
        {icon}
      </div>
      <h3 className="font-display text-lg text-ink-50 mb-3">{title}</h3>
      <p className="font-serif text-sm text-ink-400 leading-relaxed">{description}</p>
    </div>
  );
}
