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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.jpg" alt="The Norwich Logo" width={40} height={40} className="rounded-full border border-gray-200 shadow-sm" />
              <span className="text-xl font-bold text-primary">The Norwich</span>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <div className="px-4 pb-4">
            <nav className="flex flex-col space-y-1">
              <MobileNavLink href="/" title="Home" onClick={() => setIsMenuOpen(false)} delay={0} />
              <MobileNavLink href="#about" title="About" onClick={() => setIsMenuOpen(false)} delay={50} />
              <MobileNavLink href="#listings" title="Listings" onClick={() => setIsMenuOpen(false)} delay={100} />
              <MobileNavLink href="#gallery" title="Gallery" onClick={() => setIsMenuOpen(false)} delay={150} />
              <MobileNavLink href="#location" title="Location" onClick={() => setIsMenuOpen(false)} delay={200} />
              <MobileNavLink href="#reviews" title="Reviews" onClick={() => setIsMenuOpen(false)} delay={250} />
              <Link href="#listings" legacyBehavior>
                <a 
                  className="w-full mt-4 px-4 py-3 bg-primary text-white rounded-lg text-center hover:bg-opacity-90 transition-all transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animation: isMenuOpen ? 'fadeInUp 0.3s ease-out 0.3s both' : 'none'
                  }}
                >
                  Book Now
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
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
function MobileNavLink({ href, title, onClick, delay = 0 }) {
  return (
    <Link href={href} legacyBehavior>
      <a 
        className="block text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:translate-x-1"
        onClick={onClick}
        style={{ 
          animation: `fadeInLeft 0.4s ease-out ${delay}ms both`
        }}
      >
        {title}
      </a>
    </Link>
  );
} 