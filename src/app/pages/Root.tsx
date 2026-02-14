import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FilmGrain } from '../components/FilmGrain';

export default function Root() {
  return (
    <div className="min-h-screen">
      <FilmGrain />
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
