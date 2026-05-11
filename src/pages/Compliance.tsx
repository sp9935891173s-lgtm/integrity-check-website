import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { complianceAreas } from '@/data/compliance';
import ContactModal from '@/components/ContactModal';
import {
  Shield, ChevronDown, ArrowRight
} from 'lucide-react';

const complianceCategories = ['All', 'Data Privacy', 'Employment', 'Finance', 'Education', 'International'];

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #0a1a0a 100%)' }} className="relative pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 home-hero-grid opacity-30" />
      <div className="home-orb home-orb-1" style={{ top: '10%', right: '10%' }} />
      <div className="home-orb home-orb-2" style={{ bottom: '10%', left: '5%' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
          Trust & Security
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Legal{' '}
          <span className="home-gradient-text">Compliance</span>{' '}
          & Data Security
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We adhere to the highest standards of Indian legal compliance and data protection to ensure every verification is conducted lawfully and securely.
        </p>
      </div>
    </section>
  );
}

/* ───────── Compliance Card ───────── */
function ComplianceCard({ area, index }: { area: typeof complianceAreas[0]; index: number }) {
  const { ref, isRevealed } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/compliance/${area.id}`)}
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
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${area.badgeColor}`}>
        {area.badge}
      </span>
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
        <area.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{area.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{area.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {area.items.slice(0, 3).map((item, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-full">{item}</span>
        ))}
        {area.items.length > 3 && (
          <span className="px-2 py-1 bg-red-50 text-brand-red text-[10px] font-medium rounded-full">+{area.items.length - 3} more</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-brand-red text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details <ArrowRight size={12} />
        </span>
        <span className="text-gray-400 text-[10px]">{area.authority}</span>
      </div>
    </div>
  );
}

/* ───────── FAQ ───────── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'Is background verification legal in India?', a: "Yes, background verification is completely legal in India when conducted with the candidate's consent. Our processes comply with the IT Act 2000, DPDP Act 2023, Indian labour laws, and Supreme Court guidelines on privacy and data protection." },
    { q: 'Is candidate consent required for background verification?', a: 'Absolutely. Under the DPDP Act 2023, explicit written consent from the candidate is mandatory before initiating any background check. Candidates also have the right to withdraw consent at any time.' },
    { q: 'How long does the verification process take?', a: 'Most standard verifications are completed within 24-48 hours. Employment and education verifications may take 3-5 business days. International checks typically require 5-10 business days.' },
    { q: 'Is candidate data stored securely?', a: 'Yes, we implement enterprise-grade security measures including AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and ISO 27001 compliant.' },
    { q: "What are the candidate's rights under DPDP Act 2023?", a: 'Candidates have the Right to Access their personal data, Right to Correction, Right to Erasure, and Right to Grievance Redressal. We fully respect and uphold all these rights.' },
    { q: 'What formats are verification reports delivered in?', a: 'Reports are delivered as secure PDF documents with tamper-evident features. We also offer API integration for direct data transfer into your HRMS or ATS systems.' },
    { q: 'Do you conduct verification for government and PSU sectors?', a: 'Yes, we conduct verifications for government, PSU, defence sector, and private companies with special protocols including RTI Act 2005 based public records access and security clearance procedures.' },
  ];
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our background verification process and compliance.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''} ${openIndex === i ? 'border-brand-red/30 shadow-lg shadow-brand-red/5' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${openIndex === i ? 'bg-red-50/50 rounded-t-2xl' : 'hover:bg-gray-50/50 rounded-2xl'}`}>
                <span className={`font-semibold pr-4 text-base transition-colors ${openIndex === i ? 'text-brand-red' : 'text-brand-black'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-brand-red text-white rotate-180 shadow-md' : 'bg-gray-100 text-gray-500'}`}>
                  <ChevronDown size={18} className="shrink-0" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed pt-2 bg-red-50/50 rounded-b-2xl">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA ───────── */
function CTASection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-brand-black">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Shield size={48} className="text-brand-red mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ensure Compliance with Every Hire</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Partner with us to maintain the highest standards of Indian legal compliance in your hiring process.</p>
        <ContactModal category="compliance">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-xl">
            Get Started <ArrowRight size={18} />
          </button>
        </ContactModal>
      </div>
    </section>
  );
}

/* ───────── Main ───────── */
export default function Compliance() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? complianceAreas
    : complianceAreas.filter(a => a.category === activeCategory);

  return (
    <>
      <HeroSection />

      {/* Category Filter */}
      <div id="filter-anchor"></div>
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {complianceCategories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const anchor = document.getElementById('filter-anchor');
                  if (anchor) {
                    const y = anchor.getBoundingClientRect().top + window.scrollY - 64;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-brand-red text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-70">({complianceAreas.filter(a => a.category === cat).length})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400 text-sm">
              Showing <span className="font-semibold text-brand-black">{filtered.length}</span> compliance frameworks
              {activeCategory !== 'All' && <> in <span className="text-brand-red font-semibold">{activeCategory}</span></>}
            </p>
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">Click any card for full details</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((area, i) => (
              <ComplianceCard
                key={area.id}
                area={area}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />

    </>
  );
}