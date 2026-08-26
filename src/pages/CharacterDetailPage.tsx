import { ArrowLeft, User, BookOpen, Quote } from 'lucide-react';
import { getCharacterById } from '@/data/characters';
import { getBookById } from '@/data/books';
import { navigate } from '@/router';
import { Ornament, PlaceholderTag, EmptyState } from '@/components/ui/Decorations';

interface CharacterDetailPageProps {
  characterId: string;
}

export function CharacterDetailPage({ characterId }: CharacterDetailPageProps) {
  const character = getCharacterById(characterId);

  if (!character) {
    return (
      <div className="pt-24">
        <EmptyState
          title="Character Not Found"
          message="This character could not be found in the archive. They may not yet have been added to the universe."
          icon={<User size={40} />}
        />
      </div>
    );
  }

  const associatedBooks = (character.associatedBookIds ?? []).map((id) => getBookById(id)).filter(Boolean);

  return (
    <div className="pt-24">
      <div className="container-wide py-8">
        <button
          onClick={() => navigate({ name: 'characters' })}
          className="inline-flex items-center gap-2 font-sans text-sm text-ink-400 hover:text-vintervale-300 transition-colors"
        >
          <ArrowLeft size={14} /> All Characters
        </button>
      </div>

      <section className="pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm card-surface">
                  {character.portraitImage ? (
                    <img src={character.portraitImage} alt={character.portraitImageAlt || `Portrait of ${character.name}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-ink-800/50 to-ink-900 p-12">
                      <div className="text-center">
                        <div className="mx-auto mb-6 w-32 h-32 rounded-full border border-ink-600/50 flex items-center justify-center bg-ink-800/50">
                          <User size={48} className="text-ink-600" />
                        </div>
                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">Character Portrait</p>
                        <p className="font-sans text-xs uppercase tracking-widest text-ink-600">Placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
                {character.isPlaceholder && (
                  <div className="mt-4 flex justify-center">
                    <PlaceholderTag label="Portrait Forthcoming" />
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-3">
              {character.epithet && <p className="eyebrow mb-4">{character.epithet}</p>}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-50 text-balance leading-tight">{character.name}</h1>
              {character.aliases && character.aliases.length > 0 && (
                <p className="font-serif text-xl text-ink-400 italic mt-3">
                  Also known as {character.aliases.join(', ')}
                </p>
              )}

              <Ornament className="my-8 justify-start" />

              {/* Description */}
              <div>
                <h2 className="font-display text-lg text-gold-300 mb-4">Description</h2>
                {character.description ? (
                  <p className="body-serif text-ink-200">{character.description}</p>
                ) : (
                  <div>
                    <p className="font-serif text-ink-500 italic text-lg leading-relaxed">
                      The official description for this character will be presented here once provided by the author.
                    </p>
                    <div className="mt-4"><PlaceholderTag label="Description Forthcoming" /></div>
                  </div>
                )}
              </div>

              {/* Personality */}
              {character.personality ? (
                <div className="mt-8">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Personality</h2>
                  <p className="body-serif text-ink-200">{character.personality}</p>
                </div>
              ) : null}

              {/* Role */}
              {character.role ? (
                <div className="mt-8">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Role in the Universe</h2>
                  <p className="body-serif text-ink-200">{character.role}</p>
                </div>
              ) : null}

              {/* Relationships */}
              {character.relationships && character.relationships.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Relationships</h2>
                  <ul className="space-y-2">
                    {character.relationships.map((rel, i) => (
                      <li key={i} className="font-serif text-ink-300">
                        <button onClick={() => navigate({ name: 'character', id: rel.characterId })} className="link-quiet">
                          {getCharacterById(rel.characterId)?.name ?? rel.characterId}
                        </button>
                        <span className="text-ink-500"> — {rel.relation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Appearances */}
              {character.appearances && character.appearances.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Appearances</h2>
                  <ul className="space-y-1">
                    {character.appearances.map((app, i) => (
                      <li key={i} className="font-serif text-ink-300">{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quotations */}
              {character.quotations && character.quotations.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-lg text-gold-300 mb-4">Quotations</h2>
                  <div className="space-y-4">
                    {character.quotations.map((q, i) => (
                      <blockquote key={i} className="border-l-2 border-vintervale-600/50 pl-6 font-serif text-lg text-ink-200 italic leading-relaxed">
                        <Quote size={14} className="inline-block text-gold-400/40 mr-2" />
                        {q}
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Associated Books */}
      {associatedBooks.length > 0 && (
        <section className="section-padding border-t border-ink-800/40">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-10">
              <BookOpen size={20} className="text-vintervale-400" />
              <h2 className="font-display text-2xl text-ink-50">Appears In</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {associatedBooks.map((book) => book && (
                <button
                  key={book.id}
                  onClick={() => navigate({ name: 'book', id: book.id })}
                  className="group text-left card-surface card-surface-hover rounded-sm p-6"
                >
                  <p className="eyebrow mb-2">{book.series}</p>
                  {book.title ? (
                    <h3 className="font-display text-lg text-ink-50 group-hover:text-gold-200 transition-colors">{book.title}</h3>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest text-gold-300/70 bg-gold-500/10 border border-gold-500/20 rounded-sm">
                      Title Forthcoming
                    </span>
                  )}
                  {book.subtitle && <p className="font-serif text-sm text-ink-400 italic mt-1">{book.subtitle}</p>}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
