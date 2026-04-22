import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  CreditCard, Fingerprint, Globe, Award, Monitor, Database, ArrowRight, CheckCircle,
  FileText, Building2, Search, Landmark, IndianRupee, UserCheck, Wallet
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Address Verification',
    desc: 'Current aur permanent address ki physical aur digital verification field agents aur database ke through.',
    features: ['Physical Verification', 'Digital Address Check', 'Residence Duration', 'Neighborhood Check'],
  },
  {
    icon: Fingerprint,
    title: 'Aadhaar Verification',
    desc: 'UIDAI database se Aadhaar card ki authenticity aur details verify karna.',
    features: ['UIDAI Database Check', 'Name & DOB Match', 'Address Confirmation', 'Biometric Link'],
  },
  {
    icon: Wallet,
    title: 'Bank Account Verification',
    desc: 'Bank account details aur ownership verify karna — fraud prevention ke liye.',
    features: ['Account Existence Check', 'Owner Name Match', 'IFSC Verification', 'Active Status'],
  },
  {
    icon: Landmark,
    title: 'Civil Court Record Check',
    desc: 'Civil cases, disputes, litigations aur pending court matters ki comprehensive check.',
    features: ['Civil Case Search', 'Dispute Records', 'Litigation History', 'Pending Cases'],
  },
  {
    icon: CreditCard,
    title: 'Credit Check / CIBIL Check',
    desc: 'Financial background verification including credit score, loan history, defaults, aur liabilities.',
    features: ['CIBIL Score Check', 'Loan History', 'Default Verification', 'Financial Liabilities'],
  },
  {
    icon: Shield,
    title: 'Criminal Record Check',
    desc: 'Comprehensive court records search, FIR verification, aur criminal history screening across India.',
    features: ['Court Record Search', 'FIR Verification', 'Pending Cases Check', 'Warrant Search'],
  },
  {
    icon: Database,
    title: 'Database & Watchlist Check',
    desc: 'Global terror watchlists, sanctions lists, PEP databases, aur criminal registries ke against screening.',
    features: ['Terror Watchlist', 'Sanctions Screening', 'PEP Database', 'Criminal Registry'],
  },
  {
    icon: FlaskConical,
    title: 'Drug & Alcohol Testing',
    desc: 'Pre-employment aur periodic drug screening NABL-certified laboratories mein chain-of-custody compliance ke saath.',
    features: ['5-Panel Drug Test', '10-Panel Drug Test', 'Alcohol Screening', 'Lab Reports'],
  },
  {
    icon: GraduationCap,
    title: 'Education Verification',
    desc: 'Universities, colleges aur boards se direct verification — degrees, certificates aur academic credentials confirm karna.',
    features: ['University Verification', 'Degree Authentication', 'Certificate Check', 'Accreditation Status'],
  },
  {
    icon: Briefcase,
    title: 'Employment History Verification',
    desc: 'Past employment ki thorough confirmation — designation, tenure, salary, reason for leaving aur rehire eligibility.',
    features: ['Tenure Confirmation', 'Designation Check', 'Performance Review', 'Exit Formalities'],
  },
  {
    icon: FileText,
    title: 'Form 26AS / ITR Verification',
    desc: 'Income tax return filing aur Form 26AS ke through financial compliance aur income verification.',
    features: ['ITR Filing Check', 'Form 26AS Verification', 'Income Confirmation', 'Tax Compliance'],
  },
  {
    icon: Globe,
    title: 'Global / International Screening',
    desc: 'Overseas background checks for candidates with international education or work experience in 150+ countries.',
    features: ['150+ Countries', 'International Courts', 'Global Education', 'Work History Abroad'],
  },
  {
    icon: Fingerprint,
    title: 'Identity Verification',
    desc: 'Government-issued IDs ki authentication — Aadhaar, PAN, Passport, Voter ID aur Driving License.',
    features: ['Aadhaar Verification', 'PAN Check', 'Passport Validation', 'DL Verification'],
  },
  {
    icon: Search,
    title: 'Media & Internet Check',
    desc: 'News articles, online reputation aur internet presence screening to identify red flags.',
    features: ['News Article Search', 'Online Reputation', 'Red Flag Detection', 'Digital Footprint'],
  },
  {
    icon: Award,
    title: 'Professional License Verification',
    desc: 'CA, Doctor, Lawyer, Engineer jaise professional certifications aur licenses ki issuing authority se validation.',
    features: ['License Validation', 'Certification Check', 'Membership Status', 'Expiry Verification'],
  },
  {
    icon: Users,
    title: 'Reference Check',
    desc: 'Structured professional reference interviews with former supervisors, colleagues, aur reporting managers.',
    features: ['Professional References', 'Peer Feedback', 'Manager Review', 'Character Assessment'],
  },
  {
    icon: UserCheck,
    title: 'Sex Offender Check',
    desc: 'Registered sex offender database aur POCSO related records ki comprehensive check.',
    features: ['Sex Offender Registry', 'POCSO Check', 'National Database', 'Court Records'],
  },
  {
    icon: Monitor,
    title: 'Social Media Check',
    desc: 'Facebook, LinkedIn, Twitter aur other platforms pe online reputation screening aur content analysis.',
    features: ['Profile Analysis', 'Content Screening', 'Red Flag Detection', 'Professional Conduct'],
  },
  {
    icon: IndianRupee,
    title: 'UAN / PF Verification',
    desc: 'Employee PF account aur UAN number ki EPFO database se authentic verification.',
    features: ['UAN Verification', 'PF Account Check', 'EPFO Database', 'Employer History'],
  },
  {
    icon: Building2,
    title: 'Vendor / Supplier Verification',
    desc: 'Business partners, vendors aur suppliers ki comprehensive background check aur due diligence.',
    features: ['Business Registration', 'GST Verification', 'Director Background', 'Financial Health'],
  },
];

function HeroSection() {
  return (
    <section className="relative pt-44 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6">
          What We Offer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Verification Services
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Comprehensive background screening solutions tailored to protect your organization and ensure informed hiring decisions.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-7 border border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-card-hover scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-brand-red transition-colors duration-300">
        <service.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle size={14} className="text-brand-red shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold hover:gap-2.5 transition-all duration-200"
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function CTASection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
          Need a Custom Verification Package?
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          We can tailor our services to meet your specific industry requirements and compliance needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-red text-brand-red font-semibold rounded-lg hover:bg-brand-red hover:text-white transition-all duration-200"
          >
            Explore Industries
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}