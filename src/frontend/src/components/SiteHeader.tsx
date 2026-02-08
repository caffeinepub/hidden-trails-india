import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Mountain, Menu, Compass, BookOpen, Wallet, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/destinations', label: 'Destinations', icon: Compass },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/budget', label: 'Budget', icon: Wallet },
    { href: '/community', label: 'Community', icon: Users },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-strong border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold group">
          <Mountain className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline">Hidden Trails India</span>
          <span className="sm:hidden">HTI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPath.startsWith(link.href);
            
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary active' : 'text-foreground hover:text-primary'
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = currentPath.startsWith(link.href);
                  
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
