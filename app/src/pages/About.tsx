import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Target, Eye, Award, Shield, ArrowRight, Star, CheckCircle
} from 'lucide-react';

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          About Integrity Check Services
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Pioneering trust and transparency in hiring across India since 2024.
        </p>
      </div>
    </section>
  );
}

/* ───────── Story Section ───────── */
function StorySection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Building Trust, One Verification at a Time
          </h2>
        </div>
        <div className={`space-y-6 text-gray-600 leading-relaxed transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          <p>
            Founded in 2024, Integrity Check Services Pvt. Ltd. emerged from a simple yet powerful vision: to help Indian businesses make informed hiring decisions based on verified facts rather than trust alone. In an era where resume fraud and credential misrepresentation were becoming increasingly common, we set out to create a verification ecosystem that would bring transparency and accountability to the hiring process.
          </p>
          <p>
            What started as a small team of dedicated verification specialists in Mumbai has grown into one of India's leading background screening companies. Today, we serve over 5,000 clients across industries, processing thousands of verifications daily with a 99.9% accuracy rate that sets the industry benchmark.
          </p>
          <p>
            Our commitment to technology innovation, legal compliance, and customer excellence has earned us the trust of Fortune 500 companies, startups, government organizations, and educational institutions alike. We continue to invest in AI-powered verification tools and expand our field network to deliver faster, more accurate results to our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Mission & Vision ───────── */
function MissionVisionSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-white rounded-xl p-10 border-l-4 border-brand-red shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
              <Target size={28} className="text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To empower organizations with accurate, timely, and legally compliant background verification services that enable smarter hiring decisions, safer workplaces, and a more trustworthy professional ecosystem across India and beyond.
            </p>
          </div>

          <div className={`bg-white rounded-xl p-10 border-l-4 border-brand-red shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
              <Eye size={28} className="text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              To become India's most trusted and technologically advanced background screening partner, setting the global standard for verification accuracy, data security, and customer experience while contributing to a fraud-free professional landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Certifications Section ───────── */
function CertificationsSection() {
  const certs = [
    { icon: Shield, title: 'ISO 27001:2013', desc: 'Information Security Management' },
    { icon: Award, title: 'ISO 9001:2015', desc: 'Quality Management System' },
    { icon: CheckCircle, title: 'SOC 2 Type II', desc: 'Service Organization Control' },
    { icon: Star, title: 'NASSCOM Member', desc: 'Industry Association' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            Trust & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Certifications & Accreditations
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Globally recognized standards that validate our commitment to security, quality, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <div
              key={i}
              className={`text-center p-8 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-50 flex items-center justify-center">
                <cert.icon size={28} className="text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-1">{cert.title}</h3>
              <p className="text-gray-500 text-sm">{cert.desc}</p>
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
    <section ref={ref} className="py-20 bg-brand-red">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Join 5000+ Companies Who Trust Us
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Experience the most reliable background verification services in India.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
        >
          Get Started Today
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
    
      <CertificationsSection />
      <CTASection />
    </>
  );
}
