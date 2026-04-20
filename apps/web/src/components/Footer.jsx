import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteBranding, navigationItems, contactInfo, footerLinks } from '@/config/siteConfig';

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground font-serif mb-4">{siteBranding.name}</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              {siteBranding.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {navigationItems.slice(1).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary rounded-md outline-none inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-md outline-none">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-md outline-none">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteBranding.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary rounded-md outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;