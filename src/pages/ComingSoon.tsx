import { ArrowLeft, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useEffect } from 'react';

export default function ComingSoon() {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh] bg-gray-50 pt-32 pb-20 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <Clock size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
          {pageName}
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          We are currently working on this page. It will be available soon. Please check back later!
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-red/90 transition-colors shadow-lg"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
