import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'books' }
  | { name: 'book'; id: string }
  | { name: 'universes' }
  | { name: 'universe'; id: string; section?: string }
  | { name: 'characters' }
  | { name: 'character'; id: string }
  | { name: 'gallery' }
  | { name: 'author' }
  | { name: 'news' }
  | { name: 'contact' }
  | { name: 'shop' };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '');
  const parts = clean.split('/').filter(Boolean);

  if (parts.length === 0) return { name: 'home' };

  switch (parts[0]) {
    case 'books':
      if (parts[1]) return { name: 'book', id: parts[1] };
      return { name: 'books' };
    case 'universes':
      if (parts[1]) return { name: 'universe', id: parts[1], section: parts[2] };
      return { name: 'universes' };
    case 'characters':
      if (parts[1]) return { name: 'character', id: parts[1] };
      return { name: 'characters' };
    case 'gallery':
      return { name: 'gallery' };
    case 'author':
      return { name: 'author' };
    case 'news':
      return { name: 'news' };
    case 'contact':
      return { name: 'contact' };
    case 'shop':
      return { name: 'shop' };
    default:
      return { name: 'home' };
  }
}

export function routeToHash(route: Route): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'books':
      return '#/books';
    case 'book':
      return `#/books/${route.id}`;
    case 'universes':
      return '#/universes';
    case 'universe':
      return route.section
        ? `#/universes/${route.id}/${route.section}`
        : `#/universes/${route.id}`;
    case 'characters':
      return '#/characters';
    case 'character':
      return `#/characters/${route.id}`;
    case 'gallery':
      return '#/gallery';
    case 'author':
      return '#/author';
    case 'news':
      return '#/news';
    case 'contact':
      return '#/contact';
    case 'shop':
      return '#/shop';
  }
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handler = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return route;
}

export function navigate(route: Route) {
  window.location.hash = routeToHash(route);
}

export const navItems: { label: string; route: Route }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'Books', route: { name: 'books' } },
  { label: 'Universes & Series', route: { name: 'universes' } },
  { label: 'Characters', route: { name: 'characters' } },
  { label: 'Gallery', route: { name: 'gallery' } },
  { label: 'About', route: { name: 'author' } },
  { label: 'News', route: { name: 'news' } },
  { label: 'Contact', route: { name: 'contact' } },
];
