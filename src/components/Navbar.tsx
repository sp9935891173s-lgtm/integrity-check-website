import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import ContactModal from './ContactModal';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/compliance', label: 'Compliance' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Info Bar — slides up on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
      >
        <div className="top-info-bar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Contact Info */}
              <div className="hidden sm:flex items-center gap-6 text-xs">
                <a
                  href="tel:+919350283562"
                  className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <Phone size={13} className="text-brand-red group-hover:scale-110 transition-transform" />
                  <span>+91-9350283562</span>
                </a>
                <span className="w-px h-3.5 bg-gray-600" />
                <a
                  href="mailto:info@integritycheckservices.com"
                  className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <Mail size={13} className="text-brand-red group-hover:scale-110 transition-transform" />
                  <span>info@integritycheckservices.com</span>
                </a>
                <span className="w-px h-3.5 bg-gray-600" />
                <span className="flex items-center gap-1.5 text-gray-300">
                  <MapPin size={13} className="text-brand-red" />
                  <span>New Delhi, India</span>
                </span>
              </div>

              {/* Social Icons */}
              <div className="hidden sm:flex items-center gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform" aria-label="Facebook">
                  <Facebook size={14} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform" aria-label="Telegram">
                  <Send size={14} />
                </a>
              </div>

              {/* Mobile — just phone & email */}
              <div className="sm:hidden flex items-center gap-4 w-full justify-center text-xs">
                <a href="tel:+919350283562" className="flex items-center gap-1.5 text-gray-300">
                  <Phone size={12} className="text-brand-red" />
                  <span>+91-9350283562 </span>
                </a>
                <a href="mailto:info@integritycheckservices.com" className="flex items-center gap-1.5 text-gray-300">
                  <Mail size={12} className="text-brand-red" />
                  <span>info@integritycheckservices.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed outer wrapper — always stays at top */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ pointerEvents: 'none' }}>
        {/* Inner padding wrapper for pill spacing */}
        <div
          className={`transition-all duration-500 ease-out ${isScrolled ? 'pt-3 px-4 sm:px-8 lg:px-16 xl:px-32' : 'pt-10 px-0'
            }`}
        >
          {/* Actual Navbar — morphs into pill */}
          <nav
            className={`navbar-morph transition-all duration-500 ease-out ${isScrolled ? 'navbar-pill' : 'navbar-flat'
              }`}
            style={{ pointerEvents: 'auto' }}
          >
            <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? 'px-6' : 'px-4 sm:px-6 lg:px-8'}`}>
              <div
                className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'
                  }`}
              >
                {/* Logo */}
                <Link to="/" className="flex items-center shrink-0">
                  <img
                    src="/logo3.png"
                    alt="Integrity Check Services Pvt. Ltd."
                    className={`w-auto object-contain transition-all duration-500 ${
                      isScrolled ? 'h-9' : 'h-14'
                    }`}
                    style={{ maxWidth: isScrolled ? '200px' : '280px' }}
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-0.5">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive(link.path)
                        ? 'text-brand-red bg-red-50'
                        : 'text-brand-black hover:text-brand-red hover:bg-gray-50'
                        } ${isScrolled ? 'nav-link-pop' : ''}`}
                      style={{
                        animationDelay: `${index * 60 + 200}ms`,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button + Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                  <ContactModal>
                    <button
                      className={`hidden sm:inline-flex items-center text-sm font-semibold transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 ${isScrolled
                        ? 'px-4 py-1.5 bg-brand-red text-white rounded-full hover:bg-brand-red-dark cta-pop'
                        : 'px-5 py-2.5 bg-brand-red text-white rounded-lg hover:bg-brand-red-dark'
                        }`}
                    >
                      Get Started
                    </button>
                  </ContactModal>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 rounded-full text-brand-black hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          style={{ top: isScrolled ? '5rem' : '5rem' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mx-4 sm:mx-8 mt-2 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive(link.path)
                    ? 'text-brand-red bg-red-50'
                    : 'text-brand-black hover:text-brand-red hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-gray-100">
                <ContactModal>
                  <button
                    className="block w-full text-center px-5 py-3 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-colors"
                  >
                    Get Started
                  </button>
                </ContactModal>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
