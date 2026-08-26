import { useState } from 'react';
import {
  ArrowLeft, Globe, BookOpen, Users, MapPin, Scroll, Image as ImageIcon,
} from 'lucide-react';
import { getUniverseById } from '@/data/universes';
import { getBooksByUniverse } from '@/data/books';
import { getCharactersByUniverse } from '@/data/characters';
import { worldLocations } from '@/data/world';
import { loreEntries, loreCategories } from '@/data/lore';
import { galleryItems } from '@/data/gallery';
import { navigate } from '@/router';
import { Ornament, PlaceholderTag, EmptyState, SectionHeading } from '@/components/ui/Decorations';
import { BookCard } from '@/components/content/BookCard';
import { CharacterCard } from '@/components/content/CharacterCard';
import { LocationCard } from '@/components/content/LocationCard';
import { LoreCard } from '@/components/content/LoreCard';
import { GalleryTile } from '@/components/content/GalleryTile';

type UniverseSection = 'overview' | 'chronicles' | 'characters' | 'world' | 'lore' | 'gallery';

const sectionTabs: { id: UniverseSection; label: string; icon: typeof Globe }[] = [
  { id: 'overview', label: 'Overview', icon: Globe },
  { id: 'chronicles', label: 'Chronicles', icon: BookOpen },
  { id: 'characters', label: 'Characters', icon: Users },
  { id: 'world', label: 'The World', icon: MapPin },
  { id: 'lore', label: 'Lore & Stories', icon: Scroll },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon },
];

interface UniverseDetailPageProps {
  universeId: string;
  section?: string;
}

export function UniverseDetailPage({ universeId, section }: UniverseDetailPageProps) {
  const universe = getUniverseById(universeId);

  const validSections = sectionTabs.map((t) => t.id);
  const activeSection = (validSections.includes(section as UniverseSection) ? section : 'overview') as UniverseSection;
  const [currentSection, setCurrentSection] = useState<UniverseSection>(activeSection);

  if (!universe) {
    return (
      <div className="pt-24">
        <EmptyState
          title="Universe Not Found"
          message="This universe could not be found. It may not yet have been created."
          icon={<Globe size={40} />}
        />
      </div>
    );
  }

  const universeBooks = getBooksByUniverse(universeId);
  const universeCharacters = getCharactersByUniverse(universeId);
  const universeLocations = worldLocations.filter((l) => l.universeId === universeId);
  const universeLore = loreEntries.filter((l) => l.universeId === universeId);
  const universeGallery = galleryItems.filter((g) => g.universeId === universeId);

  const handleSectionChange = (s: UniverseSection) => {
    setCurrentSection(s);
    navigate({ name: 'universe', id: universeId, section: s });
  };

  return (
    <div className="pt-24">
      {/* Back link */}
      <div className="container-wide py-8">
        <button
          onClick={() => navigate({ name: 'universes' })}
          className="inline-flex items-center gap-2 font-sans text-sm text-ink-400 hover:text-vintervale-300 transition-colors"
        >
          <ArrowLeft size={14} /> All Universes & Series
        </button>
      </div>

      {/* Universe Header */}
      <section className="pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">The Official Home of</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">{universe.name}</h1>
          {universe.tagline && <p className="font-serif text-xl text-gold-300 italic mt-4">{universe.tagline}</p>}
          <Ornament className="mt-8" />
          {universe.description ? (
            <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">{universe.description}</p>
          ) : (
            <div className="mt-8 flex justify-center">
              <PlaceholderTag label="Universe Description Forthcoming" />
            </div>
          )}
        </div>
      </section>

      {/* Section Tabs */}
      <div className="container-wide sticky top-16 lg:top-20 z-30 bg-ink-950/80 backdrop-blur-sm border-y border-ink-800/60 py-3 mb-8">
        <div className="flex items-center justify-center gap-1 overflow-x-auto">
          {sectionTabs.map((tab) => {
            const isActive = currentSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSectionChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-sans text-xs uppercase tracking-wide whitespace-nowrap transition-colors duration-200 ${
                  isActive ? 'text-gold-300' : 'text-ink-400 hover:text-ink-200'
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
                <span className={`h-px bg-gold-400/60 transition-all duration-300 ${isActive ? 'w-6' : 'w-0'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Content */}
      <div className="pb-20">
        {currentSection === 'overview' && (
          <OverviewSection
            universe={universe}
            books={universeBooks}
            characters={universeCharacters}
            onSectionChange={handleSectionChange}
          />
        )}
        {currentSection === 'chronicles' && (
          <ChroniclesSection books={universeBooks} />
        )}
        {currentSection === 'characters' && (
          <CharactersSection characters={universeCharacters} />
        )}
        {currentSection === 'world' && (
          <WorldSection locations={universeLocations} />
        )}
        {currentSection === 'lore' && (
          <LoreSection lore={universeLore} />
        )}
        {currentSection === 'gallery' && (
          <GallerySection gallery={universeGallery} />
        )}
      </div>
    </div>
  );
}

function OverviewSection({ universe, books, characters, onSectionChange }: {
  universe: import('@/data/types').Universe;
  books: import('@/data/types').Book[];
  characters: import('@/data/types').Character[];
  onSectionChange: (s: UniverseSection) => void;
}) {
  const publishedBooks = books.filter((b) => b.status === 'published');

  return (
    <div className="container-wide space-y-20">
      {/* Featured Book */}
      {publishedBooks.length > 0 && (
        <section>
          <SectionHeading
            eyebrow="The Vintervale Chronicles"
            title="Book One"
            subtitle="The published book at the centre of this universe."
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <BookCard book={publishedBooks[0]} featured />
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => onSectionChange('chronicles')} className="btn-primary">
              <BookOpen size={16} /> View All Chronicles
            </button>
          </div>
        </section>
      )}

      {/* Quick Navigation */}
      <section className="border-t border-ink-800/40 pt-12">
        <SectionHeading eyebrow="Explore" title="Inside This Universe" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewTile icon={<BookOpen size={24} />} label="Chronicles" count={books.length} onClick={() => onSectionChange('chronicles')} />
          <OverviewTile icon={<Users size={24} />} label="Characters" count={characters.length} onClick={() => onSectionChange('characters')} />
          <OverviewTile icon={<MapPin size={24} />} label="The World" count={0} onClick={() => onSectionChange('world')} />
          <OverviewTile icon={<Scroll size={24} />} label="Lore & Stories" count={0} onClick={() => onSectionChange('lore')} />
        </div>
      </section>

      {/* Featured Characters */}
      {characters.length > 0 && (
        <section className="border-t border-ink-800/40 pt-12">
          <SectionHeading eyebrow="Dramatis Personae" title="Characters" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.slice(0, 4).map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function OverviewTile({ icon, label, count, onClick }: { icon: React.ReactNode; label: string; count: number; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group card-surface card-surface-hover rounded-sm p-6 text-center">
      <div className="mx-auto mb-4 w-12 h-12 rounded-sm border border-vintervale-700/40 bg-vintervale-900/20 flex items-center justify-center text-vintervale-400 group-hover:border-vintervale-500/60 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-base text-ink-50 mb-1 group-hover:text-gold-200 transition-colors">{label}</h3>
      <p className="font-sans text-xs text-ink-500">{count} {count === 1 ? 'entry' : 'entries'}</p>
    </button>
  );
}

function ChroniclesSection({ books }: { books: import('@/data/types').Book[] }) {
  const published = books.filter((b) => b.status === 'published');
  const forthcoming = books.filter((b) => b.status !== 'published');

  return (
    <div className="container-wide">
      {published.length > 0 ? (
        <>
          <SectionHeading eyebrow="Available Now" title="Published Chronicles" center={false} />
          <div className="mt-12 grid grid-cols-1 gap-8">
            {published.map((book) => (
              <BookCard key={book.id} book={book} featured />
            ))}
          </div>
        </>
      ) : (
        <EmptyState
          title="The First Chronicle Awaits"
          message="Published works from this universe will be showcased here."
          icon={<BookOpen size={40} />}
        />
      )}
      {forthcoming.length > 0 && (
        <div className="mt-16 pt-8 border-t border-ink-800/40">
          <SectionHeading eyebrow="On the Horizon" title="Forthcoming Works" center={false} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {forthcoming.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CharactersSection({ characters }: { characters: import('@/data/types').Character[] }) {
  return (
    <div className="container-wide">
      {characters.length > 0 ? (
        <>
          <SectionHeading eyebrow="The Cast" title="Characters" center={false} />
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
  );
}

function WorldSection({ locations }: { locations: import('@/data/types').WorldLocation[] }) {
  return (
    <div className="container-wide">
      <SectionHeading
        eyebrow="The Atlas"
        title="Locations"
        subtitle="The locations of this universe."
        center={false}
      />
      {locations.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <EmptyState
            title="The Atlas Is Being Drawn"
            message="Locations will be added here from the author's source material."
            icon={<Globe size={40} />}
          />
        </div>
      )}
    </div>
  );
}

function LoreSection({ lore }: { lore: import('@/data/types').LoreEntry[] }) {
  return (
    <div className="container-wide">
      <SectionHeading eyebrow="The Archive" title="Lore & Stories" center={false} />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loreCategories.map((cat) => (
          <div key={cat.id} className="card-surface rounded-sm p-6">
            <div className="w-10 h-10 rounded-sm border border-vintervale-700/40 bg-vintervale-900/20 flex items-center justify-center text-vintervale-400 mb-4">
              <Scroll size={18} />
            </div>
            <h3 className="font-display text-base text-ink-50 mb-2">{cat.label}</h3>
            <p className="font-serif text-sm text-ink-400 leading-relaxed">{cat.description}</p>
            <div className="mt-4">
              <PlaceholderTag label="0 Entries" />
            </div>
          </div>
        ))}
      </div>
      {lore.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lore.map((entry) => (
            <LoreCard key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <EmptyState
            title="The Archive Is Being Compiled"
            message="Lore entries will be added here from the author's source material."
            icon={<Scroll size={40} />}
          />
        </div>
      )}
    </div>
  );
}

function GallerySection({ gallery }: { gallery: import('@/data/types').GalleryItem[] }) {
  return (
    <div className="container-wide">
      <SectionHeading eyebrow="Visual Archive" title="Gallery" center={false} />
      {gallery.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <GalleryTile key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <EmptyState
            title="The Gallery Awaits Its First Works"
            message="Official artwork from this universe will be displayed here as it becomes available."
            icon={<ImageIcon size={40} />}
          />
        </div>
      )}
    </div>
  );
}
