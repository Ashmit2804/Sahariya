import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems, siteBranding } from '@/config/siteConfig';

/**
 * Mobile navigation menu with slide-in drawer and backdrop.
 */
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-[90vw] max-w-[400px] h-[100dvh] bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-safe h-24 border-b border-border/50 shrink-0">
          <span className="font-serif font-bold text-xl text-foreground truncate pr-4">
            {siteBranding.name}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground bg-muted/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-2 ${
                isActive(item.path)
                  ? 'text-primary translate-x-2'
                  : 'text-foreground hover:text-primary/80 hover:translate-x-2'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="px-6 py-6 border-t border-border/50 pb-safe shrink-0 bg-muted/20">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteBranding.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;