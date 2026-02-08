import { Link, useRouterState } from '@tanstack/react-router';
import { Compass, BookOpen, Wallet, Users } from 'lucide-react';

export default function MobileBottomNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { href: '/destinations', label: 'Destinations', icon: Compass },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/budget', label: 'Budget', icon: Wallet },
    { href: '/community', label: 'Community', icon: Users },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-border safe-bottom">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath.startsWith(item.href);
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
