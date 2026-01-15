import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1 bg-[#f7f7f7]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
