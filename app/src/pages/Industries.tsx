import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Stethoscope, Laptop, Landmark, Factory,
  ShoppingCart, School, UserSearch, Building2, ArrowRight,
  Home, Truck, Hotel, Wallet, FlaskConical, Scale, Heart, ShieldCheck,
  X, CheckCircle
} from 'lucide-react';

const categories = ['All', 'Healthcare', 'Technology', 'Finance', 'Government', 'Retail', 'Legal', 'Other'];

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Hospitals',
    category: 'Healthcare',
    badge: 'Healthcare',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'Doctors, nurses, paramedics — fake degree aur criminal check zaroori hai patient safety ke liye.',
    fullDesc: 'Healthcare industry mein background verification sabse critical hai. Fake degrees, criminal records, aur license fraud se patient safety directly affected hoti hai. Hamara comprehensive healthcare screening package NABH guidelines ke according hai.',
    services: ['License Verification', 'Education Check', 'Criminal Record', 'Employment History'],
    checks: ['Medical License Verification (MCI/NMC)', 'Education Degree Verification', 'Criminal Background Check', 'Previous Employment History', 'Drug & Alcohol Testing', 'Reference Check'],
    turnaround: '24-48 hrs',
    compliance: 'NABH Compliant',
  },
  {
    icon: Laptop,
    title: 'IT & Technology',
    category: 'Technology',
    badge: 'Technology',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Software engineers, developers — employment & education verification for secure system access.',
    fullDesc: 'IT sector mein data security sabse important hai. Employees ko sensitive systems ka access milta hai, isliye thorough background verification mandatory hai. ISO 27001 aur SOC 2 compliance ke liye complete verification package available hai.',
    services: ['Identity Verification', 'Employment Check', 'Education Verify', 'Global Screening'],
    checks: ['Identity Verification (Aadhaar/PAN)', 'Employment History (Last 5 years)', 'Education Verification', 'Global Database Check', 'Social Media Screening', 'Credit History Check'],
    turnaround: '24 hrs',
    compliance: 'ISO 27001 Ready',
  },
  {
    icon: Landmark,
    title: 'Banking & Financial Services',
    category: 'Finance',
    badge: 'Finance',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Bank employees, financial advisors — CIBIL, criminal, identity check for RBI compliance.',
    fullDesc: 'RBI aur SEBI guidelines ke according banking sector mein stringent background verification mandatory hai. Financial fraud prevention ke liye CIBIL check, criminal records, aur identity verification essential hai.',
    services: ['CIBIL Check', 'Criminal Check', 'Identity Verify', 'Database Screening'],
    checks: ['CIBIL & Credit Score Check', 'Criminal Background Verification', 'Identity Verification', 'Sanctions & Watchlist Check', 'Employment History Verification', 'Education Degree Check'],
    turnaround: '12-24 hrs',
    compliance: 'RBI/SEBI Compliant',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Engineering',
    category: 'Other',
    badge: 'Manufacturing',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'Factory workers, engineers — address & identity verification for workplace safety.',
    fullDesc: 'Manufacturing plants mein unauthorized individuals se accidents aur theft ka risk rahta hai. Address verification, identity check aur criminal background screening se workplace security ensure hoti hai.',
    services: ['Address Verification', 'Identity Check', 'Criminal Record', 'Drug Testing'],
    checks: ['Address Verification (Physical)', 'Identity Verification', 'Criminal Background Check', 'Drug & Alcohol Testing', 'Employment History', 'Reference Check'],
    turnaround: '48-72 hrs',
    compliance: 'Labour Law Compliant',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    category: 'Retail',
    badge: 'Retail',
    badgeColor: 'bg-pink-100 text-pink-700',
    desc: 'Sales staff, delivery agents — criminal & address check for customer-facing roles.',
    fullDesc: 'Retail aur e-commerce mein customer-facing roles ke liye thorough screening zaroori hai. Delivery agents aur sales staff ke liye criminal check, address verification aur identity check essential hai.',
    services: ['Criminal Check', 'Address Verify', 'Identity Check', 'Reference Check'],
    checks: ['Criminal Background Check', 'Address Verification', 'Identity Verification', 'Reference Check', 'Employment History', 'Driving License Check (Delivery)'],
    turnaround: '24-48 hrs',
    compliance: 'Consumer Protection Ready',
  },
  {
    icon: School,
    title: 'Education Institutions',
    category: 'Other',
    badge: 'Education',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    desc: 'Teachers, professors — degree & criminal background check for student safety.',
    fullDesc: 'Students ki safety ke liye teachers aur staff ki thorough screening mandatory hai. UGC guidelines ke according education verification aur criminal check ensure karte hain ki unqualified ya criminal background wale log school/college mein kaam na karein.',
    services: ['Education Verify', 'Criminal Check', 'Reference Check', 'License Check'],
    checks: ['Education Degree Verification (UGC)', 'Criminal Background Check', 'Reference Check', 'Identity Verification', 'Employment History', 'Child Safety Check'],
    turnaround: '48 hrs',
    compliance: 'UGC Guidelines',
  },
  {
    icon: UserSearch,
    title: 'Staffing & Recruitment',
    category: 'Other',
    badge: 'Staffing',
    badgeColor: 'bg-purple-100 text-purple-700',
    desc: 'Bulk hiring — fast background screening with API integration & custom reports.',
    fullDesc: 'Recruitment agencies ke liye bulk verification aur fast turnaround critical hai. Hamara API integration seamless workflow provide karta hai, aur custom reports aapke clients ke branding ke saath available hain.',
    services: ['Full Background Check', 'API Integration', 'Bulk Processing', 'Custom Reports'],
    checks: ['Complete Background Verification', 'API Integration Available', 'Bulk Processing (100+ records)', 'White-label Reports', 'Real-time Status Tracking', 'Dedicated Account Manager'],
    turnaround: '12-24 hrs',
    compliance: 'DPDP Act Compliant',
  },
  {
    icon: Building2,
    title: 'Government & PSU',
    category: 'Government',
    badge: 'Government',
    badgeColor: 'bg-slate-100 text-slate-700',
    desc: 'Government employees — police verification, security clearance for public sector.',
    fullDesc: 'Sarkari naukri ke liye police verification aur security clearance mandatory hai. Hamari government-grade verification service sabhi PSU aur government departments ke requirements fulfill karti hai.',
    services: ['Police Verification', 'Security Clearance', 'Education Verify', 'Watchlist Check'],
    checks: ['Police Verification Certificate', 'Security Clearance Check', 'Education Verification', 'National Database Check', 'Watchlist & Sanctions Check', 'Address Verification'],
    turnaround: '3-5 days',
    compliance: 'Govt. Standards',
  },
  {
    icon: Home,
    title: 'Real Estate',
    category: 'Finance',
    badge: 'Real Estate',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Agents, brokers — identity & financial background check for property transactions.',
    fullDesc: 'Real estate transactions mein fraud se bachne ke liye agents aur brokers ki thorough screening zaroori hai. Identity verification, financial background aur criminal check ensure karte hain ki clients ke saath trustworthy professionals deal karein.',
    services: ['Identity Check', 'Financial Verify', 'Criminal Record', 'Address Check'],
    checks: ['Identity Verification', 'Financial Background Check', 'Criminal Record Check', 'Address Verification', 'RERA Registration Verify', 'Reference Check'],
    turnaround: '24-48 hrs',
    compliance: 'RERA Compliant',
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    category: 'Other',
    badge: 'Logistics',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'Drivers, delivery staff — criminal & license verification for safe operations.',
    fullDesc: 'Logistics sector mein drivers aur delivery staff ke liye driving license verification, criminal check aur drug testing essential hai. Road safety aur cargo security ke liye comprehensive screening package available hai.',
    services: ['License Verification', 'Criminal Check', 'Address Verify', 'Drug Testing'],
    checks: ['Driving License Verification', 'Criminal Background Check', 'Address Verification', 'Drug & Alcohol Testing', 'Employment History', 'Traffic Violation Check'],
    turnaround: '24-48 hrs',
    compliance: 'MV Act Compliant',
  },
  {
    icon: Hotel,
    title: 'Hospitality & Hotels',
    category: 'Retail',
    badge: 'Hospitality',
    badgeColor: 'bg-pink-100 text-pink-700',
    desc: 'Hotel staff, housekeeping — address & criminal check for guest safety.',
    fullDesc: 'Hotel guests ki safety aur property security ke liye staff screening mandatory hai. Housekeeping, kitchen staff aur front desk employees ke liye complete background verification package available hai.',
    services: ['Criminal Check', 'Address Verify', 'Identity Check', 'Reference Check'],
    checks: ['Criminal Background Check', 'Address Verification', 'Identity Verification', 'Reference Check', 'Employment History', 'Hotel Industry Blacklist Check'],
    turnaround: '24-48 hrs',
    compliance: 'Tourism Ministry Ready',
  },
  {
    icon: Wallet,
    title: 'NBFC & Insurance',
    category: 'Finance',
    badge: 'Finance',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Financial agents — CIBIL, criminal, identity check for financial compliance.',
    fullDesc: 'NBFC aur Insurance sector mein RBI/IRDAI guidelines ke according thorough background verification mandatory hai. Financial agents ke liye CIBIL check, criminal records aur identity verification essential hai.',
    services: ['CIBIL Check', 'Criminal Record', 'Identity Verify', 'Employment Check'],
    checks: ['CIBIL & Credit Check', 'Criminal Background Verification', 'Identity Verification', 'Employment History', 'Sanctions & Watchlist Check', 'Professional License Verify'],
    turnaround: '12-24 hrs',
    compliance: 'RBI/IRDAI Compliant',
  },
  {
    icon: FlaskConical,
    title: 'Pharma & Life Sciences',
    category: 'Healthcare',
    badge: 'Healthcare',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'Lab technicians, researchers — education & license verification for quality assurance.',
    fullDesc: 'Pharma sector mein GMP compliance ke liye qualified staff ki verification essential hai. Lab technicians aur researchers ke liye education verification, license check aur criminal background screening mandatory hai.',
    services: ['Education Verify', 'License Check', 'Criminal Record', 'Employment History'],
    checks: ['Education Degree Verification', 'Professional License Check', 'Criminal Background Check', 'Employment History', 'Drug Testing', 'GMP Compliance Check'],
    turnaround: '48-72 hrs',
    compliance: 'GMP/CDSCO Ready',
  },
  {
    icon: Scale,
    title: 'Legal & Consulting',
    category: 'Legal',
    badge: 'Legal',
    badgeColor: 'bg-red-100 text-red-700',
    desc: 'Lawyers, consultants — professional license & criminal check for credibility.',
    fullDesc: 'Legal firms aur consulting companies mein credibility sabse important hai. Lawyers aur consultants ke liye Bar Council registration, professional license aur criminal background check essential hai client trust ke liye.',
    services: ['Professional License', 'Criminal Check', 'Education Verify', 'Reference Check'],
    checks: ['Bar Council Registration Verify', 'Professional License Check', 'Criminal Background Check', 'Education Verification', 'Reference Check', 'Court Records Check'],
    turnaround: '48 hrs',
    compliance: 'Bar Council Ready',
  },
  {
    icon: Heart,
    title: 'NGO & Non-Profit',
    category: 'Other',
    badge: 'NGO',
    badgeColor: 'bg-purple-100 text-purple-700',
    desc: 'Volunteers, staff — identity & criminal background check for community trust.',
    fullDesc: 'NGOs aur non-profits mein volunteers aur staff ki screening community safety ke liye zaroori hai. Especially child-focused organizations mein criminal background check mandatory hai.',
    services: ['Identity Check', 'Criminal Record', 'Address Verify', 'Reference Check'],
    checks: ['Identity Verification', 'Criminal Background Check', 'Address Verification', 'Reference Check', 'Child Safety Screening', 'Social Media Check'],
    turnaround: '24-48 hrs',
    compliance: 'FCRA Compliant',
  },
  {
    icon: ShieldCheck,
    title: 'Security Services',
    category: 'Government',
    badge: 'Security',
    badgeColor: 'bg-slate-100 text-slate-700',
    desc: 'Security guards — police verification & criminal check for safety assurance.',
    fullDesc: 'Security agencies ke liye police verification aur criminal background check mandatory hai. PSARA Act compliance ke liye complete verification package available hai jo security personnel ki authenticity ensure karta hai.',
    services: ['Police Verification', 'Criminal Check', 'Address Verify', 'Identity Check'],
    checks: ['Police Verification Certificate', 'Criminal Background Check', 'Address Verification', 'Identity Verification', 'PSARA Compliance Check', 'Drug Testing'],
    turnaround: '2-3 days',
    compliance: 'PSARA Compliant',
  },
];

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

/* ───────── Modal — React Portal ───────── */
function IndustryModal({ industry, onClose }: { industry: typeof industries[0]; onClose: () => void }) {
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
        @keyframes indModalPop {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Full screen overlay — flex center */}
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
        {/* Modal box */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: '#fff',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '88vh',
            overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
            animation: 'indModalPop 0.18s cubic-bezier(0.34,1.4,0.64,1) both',
            position: 'relative',
          }}
        >
          {/* Dark Header */}
          <div style={{ background: 'linear-gradient(135deg, #060612 0%, #1a0520 100%)', borderRadius: '20px 20px 0 0', padding: '28px' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={16} color="white" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '16px',
                background: 'rgba(229,57,53,0.2)', border: '1px solid rgba(229,57,53,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <industry.icon size={32} color="#e53935" />
              </div>
              <div>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 600,
                  padding: '3px 10px', background: 'rgba(255,255,255,0.1)',
                  color: 'white', borderRadius: '999px', marginBottom: '8px',
                }}>
                  {industry.badge}
                </span>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'white', margin: 0 }}>
                  {industry.title}
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{industry.turnaround}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px' }}>Turnaround</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{industry.compliance}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px' }}>Compliance</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '28px' }}>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              {industry.fullDesc}
            </p>

            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
              Verification Checks Included
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {industry.checks.map((check, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 12px', background: '#f9fafb', borderRadius: '10px',
                }}>
                  <CheckCircle size={15} color="#22c55e" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#374151', fontSize: '13px' }}>{check}</span>
                </div>
              ))}
            </div>

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
              Get Started for {industry.title} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}

/* ───────── Industry Card ───────── */
function IndustryCard({ industry, index, onClick }: { industry: typeof industries[0]; index: number; onClick: () => void }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      onClick={onClick}
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
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-xl">
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

/* ───────── Main ───────── */
export default function Industries() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);

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
                key={industry.title}
                industry={industry}
                index={i}
                onClick={() => setSelectedIndustry(industry)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {selectedIndustry && (
        <IndustryModal
          industry={selectedIndustry}
          onClose={() => setSelectedIndustry(null)}
        />
      )}
    </>
  );
}