import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Stethoscope, Laptop, Landmark, Factory,
  ShoppingCart, School, UserSearch, Building2, ArrowRight
} from 'lucide-react';

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Hospitals',
    desc: 'Verify medical professionals, support staff, and administrative personnel. Ensure patient safety with thorough background checks for doctors, nurses, and healthcare workers.',
    services: ['License Verification', 'Education Check', 'Criminal Record', 'Employment History'],
  },
  {
    icon: Laptop,
    title: 'IT & Technology',
    desc: 'Screen software engineers, project managers, and tech leadership. Protect intellectual property and ensure secure access to sensitive systems and data.',
    services: ['Identity Verification', 'Employment Check', 'Reference Check', 'Global Screening'],
  },
  {
    icon: Landmark,
    title: 'Banking & Finance',
    desc: 'Meet RBI compliance requirements with comprehensive financial background checks. Verify credentials for bankers, financial advisors, and insurance professionals.',
    services: ['Credit History', 'Criminal Check', 'Education Verify', 'Database Screening'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Verify factory workers, supervisors, and plant managers. Ensure workplace safety and compliance with labor regulations across production facilities.',
    services: ['Address Verification', 'Criminal Record', 'Drug Testing', 'Reference Check'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    desc: 'Screen store employees, delivery personnel, warehouse staff, and customer service representatives who interact directly with customers and handle products.',
    services: ['Identity Check', 'Address Verify', 'Criminal Record', 'Employment History'],
  },
  {
    icon: School,
    title: 'Education Institutions',
    desc: 'Verify teachers, professors, administrative staff, and support personnel. Ensure student safety with thorough background screening for all educational staff.',
    services: ['Education Verify', 'Criminal Check', 'Reference Check', 'License Check'],
  },
  {
    icon: UserSearch,
    title: 'Staffing & Recruitment',
    desc: 'Partner with us to provide background verification as a value-added service to your clients. White-label solutions available for recruitment agencies.',
    services: ['Full Background Check', 'API Integration', 'Bulk Processing', 'Custom Reports'],
  },
  {
    icon: Building2,
    title: 'Government & PSU',
    desc: 'Meet strict government compliance requirements with our certified verification processes. Screen contractors, employees, and vendors for public sector projects.',
    services: ['Database Screening', 'Criminal Record', 'Education Verify', 'Watchlist Check'],
  },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
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
          Specialized background screening solutions designed for the unique compliance and safety needs of each industry.
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
      style={{ transitionDelay: `${index * 100}ms` }}
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
