import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Zap, Lock, Headphones, Star, ArrowRight, CheckCircle,
  Stethoscope, Laptop, Landmark, Factory, ShoppingCart,
  School, UserSearch, Building2, Home as HomeIcon, Truck, Hotel, Wallet,
  FlaskRound, Scale, Heart, ShieldCheck,
  FileText, MapPin, Briefcase, GraduationCap
} from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] home-hero overflow-hidden flex items-center">
      <div className="absolute inset-0 home-hero-bg" />
      <div className="absolute inset-0 home-hero-grid" />
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />
      <div className="home-orb home-orb-4" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="home-glass-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <Shield size={16} className="text-brand-red" />
              <span className="text-gray-300 text-sm font-medium">Trusted by 5000+ Companies Across India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              India's Most{' '}
              <span className="home-gradient-text">Trusted</span>{' '}
              Background{' '}
              <span className="home-gradient-text">Screening</span>{' '}
              & Verification
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Helping businesses hire smarter with accurate, fast, and legally compliant background checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="home-cta-primary">Get Started <ArrowRight size={18} /></Link>
              <Link to="/contact" className="home-cta-secondary">Request Free Demo</Link>
            </div>
            <div className="flex items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {['RS','PK','AK','MM'].map((i,idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-2 border-[#060612] flex items-center justify-center text-[10px] text-white font-bold">{i}</div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}</div>
                <span className="text-gray-500 text-xs">4.9/5 from 2000+ reviews</span>
              </div>
            </div>
          </div>

          {/* ===== 3D Spline Robot ===== */}
          <div
            className="hidden lg:block relative w-full h-[650px] animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex justify-center items-center">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-mxQGdsyCKCaVTkcprNOsvIVZ/"
                frameBorder="0"
                className="w-full h-full scale-[0.6] origin-center"
                style={{ background: 'transparent' }}
                title="Spline 3D Robot"
              />
              {/* Watermark hider */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18%',
                  right: '4%',
                  width: '260px',
                  height: '55px',
                  background: '#07071a',
                  zIndex: 30,
                  borderRadius: '10px',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Verified badge - top LEFT */}
            <div className="absolute top-6 left-4 home-glass-badge rounded-2xl px-5 py-3 home-float-card z-20 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Background Verified ✓</div>
                  <div className="text-gray-400 text-[11px]">Sunil P. — Just now</div>
                </div>
              </div>
            </div>

            {/* Accuracy badge - bottom right, lower */}
            <div className="absolute bottom-3 right-4 home-glass-badge rounded-2xl px-5 py-3 home-float-card-2 z-20 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center">
                  <Shield size={18} className="text-brand-red" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">99.9% Accuracy</div>
                  <div className="text-gray-400 text-[11px]">Industry Leading</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const popularServices = [
  { icon: ShieldCheck, title: 'Comprehensive Background Check', desc: 'Full profile verification' },
  { icon: MapPin, title: 'Address Verification', desc: 'Physical & digital checks' },
  { icon: Landmark, title: 'CIBIL & Financial Check', desc: 'Credit history analysis' },
  { icon: Scale, title: 'Criminal Record Check', desc: 'Court & police records' },
  { icon: GraduationCap, title: 'Education Verification', desc: 'Degree & certificate validation' },
  { icon: Briefcase, title: 'Employment History', desc: 'Past experience & tenure' },
  { icon: FlaskRound, title: 'Drug Testing', desc: 'Pre-employment screening' },
  { icon: UserSearch, title: 'Identity Verification', desc: 'Aadhaar, PAN & Voter ID' },
  { icon: CheckCircle, title: 'Reference Check', desc: 'Professional & personal' },
  { icon: FileText, title: 'Court Record Check', desc: 'Civil & criminal cases' }
];

function PopularServicesSection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className={`text-center flex flex-col items-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-3">India's Top Choices</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Most Popular Services</h2>
          <p className="text-gray-500 max-w-2xl text-center mb-6">Discover the top verification services trusted by leading Indian organizations.</p>
          <Link to="/services" className="text-brand-red font-semibold hover:gap-2 transition-all flex items-center justify-center gap-1 text-sm pb-1">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden group py-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-content group-hover:pause">
          {popularServices.map((service, idx) => (
            <div key={`marquee-1-${idx}`} className="marquee-card">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                <service.icon size={22} className="text-brand-red" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-black">{service.title}</h3>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="marquee-content group-hover:pause" aria-hidden="true">
          {popularServices.map((service, idx) => (
            <div key={`marquee-2-${idx}`} className="marquee-card">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                <service.icon size={22} className="text-brand-red" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-black">{service.title}</h3>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    { icon: Zap, title: 'Fast & Accurate', desc: 'Reports within 24h with 99.9% accuracy.', color: 'from-amber-500 to-orange-600' },
    { icon: Shield, title: 'Legally Compliant', desc: 'IT Act, DPDP Act & FCRA compliant.', color: 'from-red-500 to-red-600' },
    { icon: Lock, title: 'Secure & Encrypted', desc: 'AES-256 encryption, SOC 2 certified.', color: 'from-blue-500 to-indigo-600' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Expert assistance at every step.', color: 'from-emerald-500 to-green-600' },
  ];
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`transition-all duration-700 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">The Integrity Check Advantage</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">Cutting-edge technology with rigorous processes for the most reliable verification services.</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all">Learn More About Us <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className={`home-feature-card scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const topIndustries = [
  { icon: Stethoscope, title: 'Healthcare', service: 'Degree & Criminal Check' },
  { icon: Laptop, title: 'IT & Technology', service: 'Employment & Education' },
  { icon: Landmark, title: 'Banking & Finance', service: 'CIBIL & Identity Check' },
  { icon: Factory, title: 'Manufacturing', service: 'Address & Identity' },
  { icon: ShoppingCart, title: 'Retail & E-commerce', service: 'Criminal & Address' },
  { icon: School, title: 'Education', service: 'Degree & Criminal' },
  { icon: UserSearch, title: 'Staffing & Recruitment', service: 'Fast Screening' },
  { icon: Building2, title: 'Government & PSU', service: 'Police Verification' },
  { icon: HomeIcon, title: 'Real Estate', service: 'Identity & Financial' },
  { icon: Truck, title: 'Logistics', service: 'Criminal & License' },
  { icon: Hotel, title: 'Hospitality', service: 'Address & Criminal' },
  { icon: Wallet, title: 'NBFC & Insurance', service: 'KYC & CIBIL' },
  { icon: FlaskRound, title: 'Pharma', service: 'Degree & Drug Test' },
  { icon: Scale, title: 'Legal & Consulting', service: 'Education & Criminal' },
  { icon: Heart, title: 'NGO & Non-Profit', service: 'Criminal & Reference' },
  { icon: ShieldCheck, title: 'Security Services', service: 'Police & Criminal' },
];

function IndustriesSection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Trusted Across Every Sector</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Background verification solutions for 16+ industries across India.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topIndustries.map((ind, i) => (
            <div key={i} className={`home-industry-card flex items-start gap-3 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <ind.icon size={20} className="text-brand-red" />
              </div>
              <div>
                <div className="font-semibold text-brand-black text-sm">{ind.title}</div>
                <div className="text-gray-400 text-xs">{ind.service}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-10 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/industries" className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all">View All Industries <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 home-cta-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)` }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-6 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Start Background Verification Today</h2>
        <p className={`text-white/80 text-lg mb-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>Get a free demo and see how we can help you hire with confidence.</p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl">Get a Free Demo <ArrowRight size={18} /></Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <PopularServicesSection />
      <IndustriesSection />
      <CTABanner />
    </>
  );
}