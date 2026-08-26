import { useEffect } from 'react';
import { useRouter } from '@/router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { BooksPage } from '@/pages/BooksPage';
import { BookDetailPage } from '@/pages/BookDetailPage';
import { UniversesPage } from '@/pages/UniversesPage';
import { UniverseDetailPage } from '@/pages/UniverseDetailPage';
import { CharactersPage } from '@/pages/CharactersPage';
import { CharacterDetailPage } from '@/pages/CharacterDetailPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { AuthorPage } from '@/pages/AuthorPage';
import { NewsPage } from '@/pages/NewsPage';
import { ContactPage } from '@/pages/ContactPage';
import { ShopPage } from '@/pages/ShopPage';

const pageTitles: Record<string, string> = {
  home: 'Martin Wett — Author & Creator',
  books: 'Books — Martin Wett',
  book: 'Book — Martin Wett',
  universes: 'Universes & Series — Martin Wett',
  universe: 'Universe — Martin Wett',
  characters: 'Characters — Martin Wett',
  character: 'Character — Martin Wett',
  gallery: 'Gallery — Martin Wett',
  author: 'About the Author — Martin Wett',
  news: 'News & Updates — Martin Wett',
  contact: 'Contact — Martin Wett',
  shop: 'Shop — Martin Wett',
};

function App() {
  const route = useRouter();

  useEffect(() => {
    document.title = pageTitles[route.name] ?? 'Martin Wett';
  }, [route]);

  let page: React.ReactNode;
  switch (route.name) {
    case 'home':
      page = <HomePage />;
      break;
    case 'books':
      page = <BooksPage />;
      break;
    case 'book':
      page = <BookDetailPage bookId={route.id} />;
      break;
    case 'universes':
      page = <UniversesPage />;
      break;
    case 'universe':
      page = <UniverseDetailPage universeId={route.id} section={route.section} />;
      break;
    case 'characters':
      page = <CharactersPage />;
      break;
    case 'character':
      page = <CharacterDetailPage characterId={route.id} />;
      break;
    case 'gallery':
      page = <GalleryPage />;
      break;
    case 'author':
      page = <AuthorPage />;
      break;
    case 'news':
      page = <NewsPage />;
      break;
    case 'contact':
      page = <ContactPage />;
      break;
    case 'shop':
      page = <ShopPage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}

export default App;
