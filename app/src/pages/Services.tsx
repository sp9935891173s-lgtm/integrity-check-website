import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  CreditCard, Fingerprint, Globe, Award, Monitor, Database, ArrowRight, CheckCircle,
  FileText, Building2, Search, Landmark, IndianRupee, UserCheck, Wallet, X
} from 'lucide-react';

const services = [
  { icon: MapPin, title: 'Address Verification', desc: 'Current aur permanent address ki physical aur digital verification field agents aur database ke through.', features: ['Physical Verification', 'Digital Address Check', 'Residence Duration', 'Neighborhood Check'], category: 'Identity' },
  { icon: Fingerprint, title: 'Aadhaar Verification', desc: 'UIDAI database se Aadhaar card ki authenticity aur details verify karna.', features: ['UIDAI Database Check', 'Name & DOB Match', 'Address Confirmation', 'Biometric Link'], category: 'Identity' },
  { icon: Wallet, title: 'Bank Account Verification', desc: 'Bank account details aur ownership verify karna — fraud prevention ke liye.', features: ['Account Existence Check', 'Owner Name Match', 'IFSC Verification', 'Active Status'], category: 'Financial' },
  { icon: Landmark, title: 'Civil Court Record Check', desc: 'Civil cases, disputes, litigations aur pending court matters ki comprehensive check.', features: ['Civil Case Search', 'Dispute Records', 'Litigation History', 'Pending Cases'], category: 'Criminal' },
  { icon: CreditCard, title: 'Credit Check / CIBIL Check', desc: 'Financial background verification including credit score, loan history, defaults, aur liabilities.', features: ['CIBIL Score Check', 'Loan History', 'Default Verification', 'Financial Liabilities'], category: 'Financial' },
  { icon: Shield, title: 'Criminal Record Check', desc: 'Comprehensive court records search, FIR verification, aur criminal history screening across India.', features: ['Court Record Search', 'FIR Verification', 'Pending Cases Check', 'Warrant Search'], category: 'Criminal' },
  { icon: Database, title: 'Database & Watchlist Check', desc: 'Global terror watchlists, sanctions lists, PEP databases, aur criminal registries ke against screening.', features: ['Terror Watchlist', 'Sanctions Screening', 'PEP Database', 'Criminal Registry'], category: 'Criminal' },
  { icon: FlaskConical, title: 'Drug & Alcohol Testing', desc: 'Pre-employment aur periodic drug screening NABL-certified laboratories mein chain-of-custody compliance ke saath.', features: ['5-Panel Drug Test', '10-Panel Drug Test', 'Alcohol Screening', 'Lab Reports'], category: 'Health' },
  { icon: GraduationCap, title: 'Education Verification', desc: 'Universities, colleges aur boards se direct verification — degrees, certificates aur academic credentials confirm karna.', features: ['University Verification', 'Degree Authentication', 'Certificate Check', 'Accreditation Status'], category: 'Employment' },
  { icon: Briefcase, title: 'Employment History Verification', desc: 'Past employment ki thorough confirmation — designation, tenure, salary, reason for leaving aur rehire eligibility.', features: ['Tenure Confirmation', 'Designation Check', 'Performance Review', 'Exit Formalities'], category: 'Employment' },
  { icon: FileText, title: 'Form 26AS / ITR Verification', desc: 'Income tax return filing aur Form 26AS ke through financial compliance aur income verification.', features: ['ITR Filing Check', 'Form 26AS Verification', 'Income Confirmation', 'Tax Compliance'], category: 'Financial' },
  { icon: Globe, title: 'Global / International Screening', desc: 'Overseas background checks for candidates with international education or work experience in 150+ countries.', features: ['150+ Countries', 'International Courts', 'Global Education', 'Work History Abroad'], category: 'Global' },
  { icon: Fingerprint, title: 'Identity Verification', desc: 'Government-issued IDs ki authentication — Aadhaar, PAN, Passport, Voter ID aur Driving License.', features: ['Aadhaar Verification', 'PAN Check', 'Passport Validation', 'DL Verification'], category: 'Identity' },
  { icon: Search, title: 'Media & Internet Check', desc: 'News articles, online reputation aur internet presence screening to identify red flags.', features: ['News Article Search', 'Online Reputation', 'Red Flag Detection', 'Digital Footprint'], category: 'Digital' },
  { icon: Award, title: 'Professional License Verification', desc: 'CA, Doctor, Lawyer, Engineer jaise professional certifications aur licenses ki issuing authority se validation.', features: ['License Validation', 'Certification Check', 'Membership Status', 'Expiry Verification'], category: 'Employment' },
  { icon: Users, title: 'Reference Check', desc: 'Structured professional reference interviews with former supervisors, colleagues, aur reporting managers.', features: ['Professional References', 'Peer Feedback', 'Manager Review', 'Character Assessment'], category: 'Employment' },
  { icon: UserCheck, title: 'Sex Offender Check', desc: 'Registered sex offender database aur POCSO related records ki comprehensive check.', features: ['Sex Offender Registry', 'POCSO Check', 'National Database', 'Court Records'], category: 'Criminal' },
  { icon: Monitor, title: 'Social Media Check', desc: 'Facebook, LinkedIn, Twitter aur other platforms pe online reputation screening aur content analysis.', features: ['Profile Analysis', 'Content Screening', 'Red Flag Detection', 'Professional Conduct'], category: 'Digital' },
  { icon: IndianRupee, title: 'UAN / PF Verification', desc: 'Employee PF account aur UAN number ki EPFO database se authentic verification.', features: ['UAN Verification', 'PF Account Check', 'EPFO Database', 'Employer History'], category: 'Employment' },
  { icon: Building2, title: 'Vendor / Supplier Verification', desc: 'Business partners, vendors aur suppliers ki comprehensive background check aur due diligence.', features: ['Business Registration', 'GST Verification', 'Director Background', 'Financial Health'], category: 'Financial' },
];

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
function ServiceCard({ service, index, onClick }: { service: typeof services[0]; index: number; onClick: () => void }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-red cursor-pointer scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{
        transitionDelay: `${index * 60}ms`,
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

/* ───────── Modal — React Portal se directly body mein render ───────── */
function ServiceModal({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modalContent = (
    <>
      <style>{`
        @keyframes svcModalPop {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Full screen overlay — directly on body */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
        onClick={onClose}
      >
        {/* Modal box — stopPropagation so clicks inside don't close */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: '#fff',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '520px',
            maxHeight: '88vh',
            overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
            animation: 'svcModalPop 0.18s cubic-bezier(0.34,1.4,0.64,1) both',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div style={{ padding: '28px 28px 0' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '32px', height: '32px', borderRadius: '50%',
                background: '#f3f4f6', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={16} color="#6b7280" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '16px',
                background: '#e53935', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 8px 24px rgba(229,57,53,0.3)',
              }}>
                <service.icon size={30} color="white" />
              </div>
              <div>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 600,
                  padding: '3px 10px', background: '#fff1f0', color: '#e53935',
                  borderRadius: '999px', marginBottom: '6px',
                }}>
                  {service.category}
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: 0 }}>
                  {service.title}
                </h3>
              </div>
            </div>

            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              {service.desc}
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: '0 28px 28px' }}>
            <h4 style={{
              fontSize: '11px', fontWeight: 700, color: '#111827',
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              What's Included
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              {service.features.map((feature, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 0',
                  borderBottom: i < service.features.length - 1 ? '1px solid #f3f4f6' : 'none',
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: '#fff1f0', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <CheckCircle size={13} color="#e53935" />
                  </div>
                  <span style={{ color: '#374151', fontSize: '14px' }}>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={onClose}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', width: '100%', padding: '15px',
                background: '#e53935', color: 'white', fontWeight: 700,
                fontSize: '15px', borderRadius: '12px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(229,57,53,0.35)',
              }}
            >
              Get Started with {service.title} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  // Portal — renders directly into document.body, bypasses ALL parent transforms
  return createPortal(modalContent, document.body);
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
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg">
            Contact Us <ArrowRight size={18} />
          </Link>
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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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
              <p className="text-xs text-gray-400 mt-1">Click any card for details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}