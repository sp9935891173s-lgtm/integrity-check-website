import { useState } from 'react';
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
    <section className="relative pt-44 pb-24 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #410505 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-brand-red/20 text-brand-red text-sm font-semibold rounded-full mb-6 border border-brand-red/30">
          20+ Verification Services
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          India's Most{' '}
          <span className="text-brand-red">Comprehensive</span>{' '}
          Screening Platform
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
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
      className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-red cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
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
    </motion.div>
  );
}

/* ───────── Modal ───────── */
function ServiceModal({ service, rect, onClose }: { service: typeof services[0]; rect: DOMRect; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${service.title}`}
        initial={{ 
          top: rect.top, 
          left: rect.left, 
          width: rect.width, 
          height: rect.height,
          opacity: 0 
        }}
        animate={{ 
          top: Math.max(20, rect.top - 50),
          left: Math.max(20, rect.left - 20),
          width: rect.width + 40,
          height: 'auto',
          opacity: 1,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        exit={{ 
          top: rect.top, 
          left: rect.left, 
          width: rect.width, 
          height: rect.height,
          opacity: 0 
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bg-white rounded-2xl p-8 z-10 pointer-events-auto border border-brand-red ring-4 ring-brand-red/5"
        style={{ maxWidth: '450px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <motion.div layoutId={`icon-${service.title}`} className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/30">
            <service.icon size={32} className="text-white" />
          </motion.div>
          <div>
            <span className="text-xs font-medium px-2 py-1 bg-red-50 text-brand-red rounded-full">{service.category}</span>
            <motion.h3 layoutId={`title-${service.title}`} className="text-xl font-bold text-brand-black mt-1">{service.title}</motion.h3>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
          <div className="mb-6">
            <h4 className="text-sm font-bold text-brand-black mb-3 uppercase tracking-wider">What's Included</h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-brand-red" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
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
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  const handleCardClick = (e: React.MouseEvent, service: typeof services[0]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveRect(rect);
    setSelectedService(service);
  };

  return (
    <>
      <HeroSection />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">All Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Complete Verification Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Click on any service to learn more about what's included.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30' : 'bg-white text-gray-600 hover:text-brand-red border border-gray-200 hover:border-brand-red'}`}
              >
                {cat}
                {cat !== 'All' && <span className="ml-1.5 text-xs opacity-70">({services.filter(s => s.category === cat).length})</span>}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mb-8">Showing {filtered.length} of {services.length} services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                onToggle={(e) => handleCardClick(e, service)}
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