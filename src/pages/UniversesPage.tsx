import { Globe, Library } from 'lucide-react';
import { universes } from '@/data/universes';
import { UniverseCard } from '@/components/content/UniverseCard';
import { SectionHeading, Ornament, EmptyState, PlaceholderTag } from '@/components/ui/Decorations';

export function UniversesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">The Worlds of Martin Wett</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">Universes & Series</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            The fictional universes and series created by Martin Wett. Each is a self-contained world with its own chronicles, characters, and lore.
          </p>
        </div>
      </section>

      {/* Universes */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          {universes.length > 0 ? (
            <>
              <SectionHeading eyebrow="Featured Worlds" title="Explore Each Universe" center={false} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {universes.map((universe) => (
                  <UniverseCard key={universe.id} universe={universe} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              title="The First Universe Awaits"
              message="Literary universes and series by Martin Wett will be showcased here. Each will have its own dedicated area with chronicles, characters, world, lore, and gallery."
              icon={<Globe size={40} />}
            />
          )}
        </div>
      </section>

      {/* Future expansion note */}
      <section className="pb-20">
        <div className="container-prose text-center">
          <Ornament className="mb-8" />
          <div className="flex items-center justify-center gap-3 mb-6">
            <Library size={20} className="text-gold-400/60" />
          </div>
          <p className="font-serif text-ink-500 italic text-lg">
            This section is designed to hold multiple universes and series. As Martin Wett's body of work grows, new worlds will appear here alongside The Vintervale Universe — each with its own dedicated area.
          </p>
          <div className="mt-6 flex justify-center">
            <PlaceholderTag label="Additional Universes Forthcoming" />
          </div>
        </div>
      </section>
    </div>
  );
}
