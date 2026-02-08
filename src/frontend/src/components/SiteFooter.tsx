import { Link } from '@tanstack/react-router';
import { Mountain, Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span>Hidden Trails India</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Discover India beyond the crowds. Curated offbeat destinations for young explorers seeking authentic travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/travel-tips" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link to="/budget-planning" className="text-muted-foreground hover:text-primary transition-colors">
                  Budget Planning
                </Link>
              </li>
              <li>
                <Link to="/safety-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-destructive inline" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
