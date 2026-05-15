import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Get Started Button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-brand-red text-white font-semibold text-sm rounded-full shadow-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-pulse-glow"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Get Started</span>
      </Link>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 sm:bottom-6 left-6 z-40 w-11 h-11 bg-brand-black text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-brand-red ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
