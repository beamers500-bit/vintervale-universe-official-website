import type { GalleryItem } from '../../data/types';

interface GalleryTileProps {
  item: GalleryItem;
  onClick?: (item: GalleryItem) => void;
}

export default function GalleryTile({
  item,
  onClick,
}: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(item)}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-left transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
    >
      <div className="aspect-[4/5] overflow-hidden bg-black/30">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/40">
            Artwork coming soon
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-16">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
          {item.category}
        </p>

        <h3 className="text-lg font-semibold text-white">
          {item.title}
        </h3>

        {item.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}
