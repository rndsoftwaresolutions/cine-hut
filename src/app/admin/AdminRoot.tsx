import { Outlet } from 'react-router';
import { AdminNav } from '../components/AdminNav';
import { FilmGrain } from '../components/FilmGrain';

export default function AdminRoot() {
  return (
    <div className="min-h-screen bg-[#f9f5f3]">
      <FilmGrain />
      <AdminNav />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
