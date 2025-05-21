import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-3 group">
              <Image src="/images/logo.jpg" alt="The Norwich Logo" width={48} height={48} className="rounded-full border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-200" />
              <span className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">The Norwich</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#listings" title="Listings" />
            <NavLink href="#gallery" title="Gallery" />
            <NavLink href="#location" title="Location" />
            <NavLink href="#reviews" title="Reviews" />
            <Link href="#listings" legacyBehavior>
              <a className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all">
                Book Now
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink href="/" title="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#about" title="About" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#listings" title="Listings" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#gallery" title="Gallery" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#location" title="Location" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#reviews" title="Reviews" onClick={() => setIsMenuOpen(false)} />
              <Link href="#listings" legacyBehavior>
                <a 
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg text-center hover:bg-opacity-90 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// Desktop Navigation Link
function NavLink({ href, title }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="text-gray-700 hover:text-primary font-medium transition-colors">
        {title}
      </a>
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({ href, title, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a 
        className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
        onClick={onClick}
      >
        {title}
      </a>
    </Link>
  );
} 