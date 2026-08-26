import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import { GalleryTile } from '@/components/content/GalleryTile';
import { SectionHeading, Ornament, EmptyState, PlaceholderTag } from '@/components/ui/Decorations';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">Visual Archive</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">The Gallery</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            Official artwork from the literary works of Martin Wett — book covers, illustrations, concept art, maps, and promotional material.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {galleryItems.length > 0 && (
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <FilterButton label="All" active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} />
            {galleryCategories.map((cat) => (
              <FilterButton
                key={cat.id}
                label={cat.label}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <GalleryTile key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="The Gallery Awaits Its First Works"
              message="Official artwork — book covers, illustrations, concept art, and maps — will be displayed here as it becomes available. Each piece will be clearly labeled and easy to replace with final artwork."
              icon={<ImageIcon size={40} />}
            />
          )}
        </div>
      </section>

      {/* Placeholder note */}
      <section className="pb-20">
        <div className="container-prose text-center">
          <Ornament className="mb-8" />
          <p className="font-serif text-ink-500 italic text-lg">
            No stock or placeholder imagery is used to represent actual Vintervale characters or locations. Official artwork from the author will be added as it is supplied.
          </p>
          <div className="mt-6 flex justify-center">
            <PlaceholderTag label="Artwork Forthcoming from Source Material" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-sans text-xs uppercase tracking-wide rounded-sm border transition-all duration-300 ${
        active
          ? 'text-gold-200 border-gold-400/50 bg-gold-500/10'
          : 'text-ink-400 border-ink-700 hover:border-ink-500 hover:text-ink-200'
      }`}
    >
      {label}
    </button>
  );
}
