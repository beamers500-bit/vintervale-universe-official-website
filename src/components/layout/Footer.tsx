import { Mail, BookOpen, Globe } from 'lucide-react';
import { navigate } from '@/router';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-800/60 bg-ink-950/80 bg-grain mt-20">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-vintervale-400">
                <path d="M16 4 L26 10 L26 22 L16 28 L6 22 L6 10 Z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16 9 L22 12.5 L22 19.5 L16 23 L10 19.5 L10 12.5 Z" fill="#c0882e" opacity="0.7" />
                <circle cx="16" cy="16" r="1.5" fill="#0a0b0f" />
              </svg>
              <div>
                <p className="font-display text-sm tracking-widest text-ink-100 uppercase">Martin Wett</p>
                <p className="font-sans text-[10px] tracking-widest text-gold-400/60 uppercase mt-0.5">Author & Creator</p>
              </div>
            </div>
            <p className="font-serif text-ink-400 text-base leading-relaxed max-w-sm">
              The official literary home of Martin Wett — author and creator of fictional universes, novels, and stories.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              <li><FooterLink onClick={() => navigate({ name: 'books' })}><BookOpen size={13} /> Books</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'universes' })}><Globe size={13} /> Universes & Series</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'characters' })}>Characters</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'gallery' })}>Gallery</FooterLink></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="eyebrow mb-4">About</p>
            <ul className="space-y-2.5">
              <li><FooterLink onClick={() => navigate({ name: 'author' })}>About the Author</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'news' })}>News & Updates</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'contact' })}><Mail size={13} /> Contact</FooterLink></li>
              <li><FooterLink onClick={() => navigate({ name: 'shop' })}>Shop</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ink-500 text-center sm:text-left">
            Martin Wett — Author & Creator. The official literary home.
          </p>
          <p className="font-sans text-xs text-ink-600 text-center sm:text-right">
            Published and maintained by Wholebook Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 font-sans text-sm text-ink-400 transition-colors duration-200 hover:text-vintervale-300"
    >
      {children}
    </button>
  );
}
