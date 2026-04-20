import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '@/components/MobileMenu.jsx';
import { navigationItems, siteBranding } from '@/config/siteConfig';

/**
 * Main site header with responsive navigation.
 */
function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur-md bg-background/90 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary rounded-lg outline-none group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary/90 transition-colors">
              <span className="text-xl sm:text-2xl font-bold text-primary-foreground font-serif">S</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-foreground font-serif leading-tight">
                {siteBranding.name}
              </h1>
              <p className="text-xs text-muted-foreground hidden lg:block">
                {siteBranding.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;