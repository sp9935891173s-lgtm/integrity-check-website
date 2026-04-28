import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/services';
import ContactForm from '@/components/ContactForm';
import ContactModal from '@/components/ContactModal';
import {
  ArrowRight
} from 'lucide-react';

const categories = ['All', 'Identity', 'Criminal', 'Employment', 'Financial', 'Digital', 'Health', 'Global'];

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #0a1a0a 100%)' }} className="relative pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 home-hero-grid opacity-30" />
      <div className="home-orb home-orb-1" style={{ top: '10%', right: '10%' }} />
      <div className="home-orb home-orb-2" style={{ bottom: '10%', left: '5%' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          India's Most{' '}
          <span className="home-gradient-text">Comprehensive</span>{' '}
          Screening Platform
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
          From criminal records to global screening — we cover every aspect of background verification to help you hire with confidence.
        </p>
      </div>
    </section>
  );
}

/* ───────── Service Card ───────── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isRevealed } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/services/${service.id}`)}
      className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-red cursor-pointer scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{
        transitionDelay: `${(index % 4) * 60}ms`,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
          <service.icon size={24} className="text-brand-red group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-red-50 text-brand-red rounded-full">{service.category}</span>
      </div>
      <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{service.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.features.slice(0, 2).map((f, i) => (
          <span key={i} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">{f}</span>
        ))}
        <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 rounded-full border border-gray-100">+{service.features.length - 2} more</span>
      </div>
      <span className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold group-hover:gap-2 transition-all duration-200">
        View Details <ArrowRight size={14} />
      </span>
    </div>
  );
}

/* ───────── CTA ───────── */
function CTASection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Verification Package?</h2>
        <p className="text-gray-400 text-lg mb-8">We can tailor our services to meet your specific industry requirements and compliance needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactModal>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg">
              Contact Us <ArrowRight size={18} />
            </button>
          </ContactModal>
          <Link to="/industries" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
            Explore Industries
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Main ───────── */
export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <>
      <HeroSection />

      {/* Sticky Category Filter */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-brand-red text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-70">({services.filter(s => s.category === cat).length})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-3">All Services</span>
              <h2 className="text-3xl font-bold text-brand-black">Complete Verification Solutions</h2>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-gray-400 text-sm">
                Showing <span className="font-semibold text-brand-black">{filtered.length}</span> services
                {activeCategory !== 'All' && <> in <span className="text-brand-red font-semibold">{activeCategory}</span></>}
              </p>
              <p className="text-xs text-gray-400 mt-1">Click any card for full details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <ContactForm />
    </>
  );
}