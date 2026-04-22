import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Stethoscope, Laptop, Landmark, Factory,
  ShoppingCart, School, UserSearch, Building2, ArrowRight,
  Home, Truck, Hotel, Wallet, FlaskConical, Scale, Heart, ShieldCheck
} from 'lucide-react';

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Hospitals',
    desc: 'Doctors, nurses, paramedics — fake degree aur criminal check zaroori hai patient safety ke liye.',
    services: ['License Verification', 'Education Check', 'Criminal Record', 'Employment History'],
  },
  {
    icon: Laptop,
    title: 'IT & Technology',
    desc: 'Software engineers, developers — employment & education verification for secure access to systems.',
    services: ['Identity Verification', 'Employment Check', 'Education Verify', 'Global Screening'],
  },
  {
    icon: Landmark,
    title: 'Banking & Financial Services',
    desc: 'Bank employees, financial advisors — CIBIL, criminal, identity check for RBI compliance.',
    services: ['CIBIL Check', 'Criminal Check', 'Identity Verify', 'Database Screening'],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Engineering',
    desc: 'Factory workers, engineers — address & identity verification for workplace safety.',
    services: ['Address Verification', 'Identity Check', 'Criminal Record', 'Drug Testing'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    desc: 'Sales staff, delivery agents — criminal & address check for customer-facing roles.',
    services: ['Criminal Check', 'Address Verify', 'Identity Check', 'Reference Check'],
  },
  {
    icon: School,
    title: 'Education Institutions',
    desc: 'Teachers, professors — degree & criminal background check for student safety.',
    services: ['Education Verify', 'Criminal Check', 'Reference Check', 'License Check'],
  },
  {
    icon: UserSearch,
    title: 'Staffing & Recruitment Agencies',
    desc: 'Bulk hiring — fast background screening with API integration & custom reports.',
    services: ['Full Background Check', 'API Integration', 'Bulk Processing', 'Custom Reports'],
  },
  {
    icon: Building2,
    title: 'Government & PSU',
    desc: 'Government employees — police verification, security clearance for public sector.',
    services: ['Police Verification', 'Security Clearance', 'Education Verify', 'Watchlist Check'],
  },
  {
    icon: Home,
    title: 'Real Estate',
    desc: 'Agents, brokers — identity & financial background check for property transactions.',
    services: ['Identity Check', 'Financial Verify', 'Criminal Record', 'Address Check'],
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    desc: 'Drivers, delivery staff — criminal & license verification for safe operations.',
    services: ['License Verification', 'Criminal Check', 'Address Verify', 'Drug Testing'],
  },
  {
    icon: Hotel,
    title: 'Hospitality & Hotels',
    desc: 'Hotel staff, housekeeping — address & criminal check for guest safety.',
    services: ['Criminal Check', 'Address Verify', 'Identity Check', 'Reference Check'],
  },
  {
    icon: Wallet,
    title: 'NBFC & Insurance',
    desc: 'Financial agents — CIBIL, criminal, identity check for financial compliance.',
    services: ['CIBIL Check', 'Criminal Record', 'Identity Verify', 'Employment Check'],
  },
  {
    icon: FlaskConical,
    title: 'Pharma & Life Sciences',
    desc: 'Lab technicians, researchers — education & license verification for quality assurance.',
    services: ['Education Verify', 'License Check', 'Criminal Record', 'Employment History'],
  },
  {
    icon: Scale,
    title: 'Legal & Consulting Firms',
    desc: 'Lawyers, consultants — professional license & criminal check for credibility.',
    services: ['Professional License', 'Criminal Check', 'Education Verify', 'Reference Check'],
  },
  {
    icon: Heart,
    title: 'NGO & Non-Profit',
    desc: 'Volunteers, staff — identity & criminal background check for community trust.',
    services: ['Identity Check', 'Criminal Record', 'Address Verify', 'Reference Check'],
  },
  {
    icon: ShieldCheck,
    title: 'Security Services',
    desc: 'Security guards — police verification & criminal check for safety assurance.',
    services: ['Police Verification', 'Criminal Check', 'Address Verify', 'Identity Check'],
  },
];

function HeroSection() {
  return (
    <section className="relative pt-44 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6">
          Who We Serve
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Industries We Serve
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Specialized background screening solutions for 16+ industries across India — from Healthcare to Security Services.
        </p>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-8 border border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-card-hover scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
        <industry.icon size={32} className="text-brand-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
        {industry.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{industry.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {industry.services.map((service, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            {service}
          </span>
        ))}
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold hover:gap-2.5 transition-all duration-200"
      >
        Get Started <ArrowRight size={14} />
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
          Don't See Your Industry?
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          We provide customized background screening solutions for all industries. Contact us to discuss your specific requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg"
        >
          Contact Our Team
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default function Industries() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <IndustryCard key={i} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
