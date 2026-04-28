import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { industries } from '@/data/industries';
import ContactModal from '@/components/ContactModal';
import {
  ArrowRight
} from 'lucide-react';

const categories = ['All', 'Healthcare', 'Technology', 'Finance', 'Government', 'Retail', 'Legal', 'Other'];

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #1a0a0a 100%)' }} className="relative pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 home-hero-grid opacity-30" />
      <div className="home-orb home-orb-1" style={{ top: '10%', right: '10%' }} />
      <div className="home-orb home-orb-2" style={{ bottom: '10%', left: '5%' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
          Who We Serve
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Industries We{' '}
          <span className="home-gradient-text">Serve</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Specialized background screening solutions for 16+ industries across India — from Healthcare to Security Services.
        </p>
      </div>
    </section>
  );
}

/* ───────── Industry Card ───────── */
function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const { ref, isRevealed } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/industries/${industry.id}`)}
      className={`group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms`, transition: 'all 0.3s ease' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#e53935';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#f3f4f6';
      }}
    >
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${industry.badgeColor}`}>
        {industry.badge}
      </span>
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
        <industry.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
        {industry.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{industry.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {industry.services.slice(0, 3).map((s, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-full">{s}</span>
        ))}
        {industry.services.length > 3 && (
          <span className="px-2 py-1 bg-red-50 text-brand-red text-[10px] font-medium rounded-full">+{industry.services.length - 3} more</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-brand-red text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details <ArrowRight size={12} />
        </span>
        <span className="text-gray-400 text-[10px]">{industry.turnaround}</span>
      </div>
    </div>
  );
}

/* ───────── CTA ───────── */
function CTASection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Don't See Your Industry?</h2>
        <p className="text-gray-500 text-lg mb-8">We provide customized background screening solutions for all industries. Contact us to discuss your specific requirements.</p>
        <ContactModal>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-xl">
            Get Started <ArrowRight size={18} />
          </button>
        </ContactModal>
      </div>
    </section>
  );
}

/* ───────── Main ───────── */
export default function Industries() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? industries
    : industries.filter(ind => ind.category === activeCategory);

  return (
    <>
      <HeroSection />

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat ? 'bg-brand-red text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-70">({industries.filter(i => i.category === cat).length})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-sm mb-8">
            Showing <span className="font-semibold text-brand-black">{filtered.length}</span> industries
            {activeCategory !== 'All' && <> in <span className="text-brand-red font-semibold">{activeCategory}</span></>}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((industry, i) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

    </>
  );
}