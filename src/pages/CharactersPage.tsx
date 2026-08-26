import { Users } from 'lucide-react';
import { characters } from '@/data/characters';
import { universes, getUniverseById } from '@/data/universes';
import { CharacterCard } from '@/components/content/CharacterCard';
import { SectionHeading, Ornament, EmptyState } from '@/components/ui/Decorations';

export function CharactersPage() {
  return (
    <div className="pt-24">
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">Dramatis Personae</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">Characters</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            Characters from across the literary universes of Martin Wett. Each character links to the books they appear in and the universe they belong to.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-wide">
          {characters.length > 0 ? (
            <>
              <SectionHeading eyebrow="The Cast" title="All Characters" center={false} />
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {characters.map((char) => (
                  <CharacterCard key={char.id} character={char} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              title="The Cast Is Being Assembled"
              message="Character profiles will appear here as they are added from the author's source material."
              icon={<Users size={40} />}
            />
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-prose text-center">
          <Ornament className="mb-8" />
          <p className="font-serif text-ink-500 italic text-lg">
            Character profiles will be added from the author's source material. Each will link to the books, locations, and lore they relate to.
          </p>
        </div>
      </section>
    </div>
  );
}
