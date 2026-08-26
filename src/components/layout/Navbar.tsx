import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, navigate, useRouter, type Route } from '@/router';

export function Navbar() {
  const route = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (item: { route: Route }) => {
    if (item.route.name === 'home' && route.name === 'home') return true;
    if (item.route.name === 'books' && (route.name === 'books' || route.name === 'book')) return true;
    if (item.route.name === 'universes' && (route.name === 'universes' || route.name === 'universe')) return true;
    if (item.route.name === 'characters' && (route.name === 'characters' || route.name === 'character')) return true;
    return item.route.name === route.name;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-800/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-16 lg:h-20" aria-label="Primary">
          <button
            onClick={() => navigate({ name: 'home' })}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Martin Wett — Home"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-vintervale-400 transition-transform duration-500 group-hover:scale-110">
              <path d="M16 4 L26 10 L26 22 L16 28 L6 22 L6 10 Z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M16 9 L22 12.5 L22 19.5 L16 23 L10 19.5 L10 12.5 Z" fill="#c0882e" opacity="0.7" />
              <circle cx="16" cy="16" r="1.5" fill="#0a0b0f" />
            </svg>
            <span className="hidden sm:block">
              <span className="block font-display text-sm tracking-widest text-ink-100 uppercase">Martin Wett</span>
              <span className="block font-sans text-[10px] tracking-widest text-gold-400/70 uppercase">Author & Creator</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.route)}
                  className={`px-3.5 py-2 font-sans text-[13px] tracking-wide transition-colors duration-200 relative group ${
                    isActive(item) ? 'text-gold-300' : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-gold-400/60 transition-all duration-300 ${
                      isActive(item) ? 'w-6' : 'w-0 group-hover:w-4'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-ink-200 hover:text-ink-50 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <div className={`relative flex flex-col items-center justify-center min-h-screen gap-2 transition-transform duration-500 ${menuOpen ? 'translate-y-0' : '-translate-y-8'}`}>
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={`font-display text-xl tracking-wide py-3 transition-all duration-500 ${
                isActive(item) ? 'text-gold-300' : 'text-ink-200'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-8 text-center">
            <p className="font-sans text-xs tracking-widest text-ink-500 uppercase">Author & Creator</p>
            <p className="font-display text-sm text-gold-400/80 mt-1">Martin Wett</p>
          </div>
        </div>
      </div>
    </>
  );
}
