import { Link, useNavigate } from '@tanstack/react-router';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { hasToken, logout } from '@/lib/auth';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthed = hasToken();

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/comprar', label: 'Comprar' },
    { to: '/rentar', label: 'Rentar' },
    { to: '/contactanos', label: 'Contactanos' },
  ];

  const handleLogout = async () => {
    await logout();
    navigate({ to: '/login' });
  };

  return (
    <header className="bg-white py-4 px-6 md:px-10 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="text-[#ff385c] no-underline">
          YouSpace24
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-gray-800 hover:text-[#ff385c] transition-colors [&.active]:text-[#ff385c]"
          >
            {item.label}
          </Link>
        ))}
        {isAuthed ? (
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:text-[#ff385c]"
            onClick={handleLogout}
            aria-label="Cerrar sesion"
            title="Cerrar sesion"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        ) : (
          <Link to="/login">
            <Button className="bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full px-6">
              Iniciar sesión
            </Button>
          </Link>
        )}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-lg font-medium hover:text-[#ff385c]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthed ? (
                <Button
                  className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full"
                  onClick={async () => {
                    setIsOpen(false);
                    await handleLogout();
                  }}
                >
                  Cerrar sesión
                </Button>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full">
                    Iniciar sesión
                  </Button>
                </Link>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
