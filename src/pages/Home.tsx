import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import ContactModal from '@/components/ContactModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Zap, Lock, Headphones, ArrowRight, CheckCircle,
  Stethoscope, Laptop, Landmark, Factory, ShoppingCart,
  School, UserSearch, Building2, Home as HomeIcon, Truck, Hotel, Wallet,
  FlaskRound, Scale, Heart, ShieldCheck,
  FileText, MapPin, Briefcase, GraduationCap, Fingerprint, User, Check, Activity, FileCheck
} from 'lucide-react';

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  const animate = () => {
    // Smooth interpolation (lerp)
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.08;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.08;

    if (containerRef.current) {
      containerRef.current.style.transform = `rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    
    // Use window dimensions to safely clamp rotation between -1 and 1
    const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
    const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
    
    const maxRotation = 15; // Max tilt set to 15deg for a clean, non-distorted perspective
    
    // Y-axis rotation maps to X-mouse (left/right)
    // X-axis rotation maps to Y-mouse (up/down, inverted)
    targetRotation.current = { 
      x: normalizedY * -maxRotation, 
      y: normalizedX * maxRotation 
    };
  };

  const handleMouseLeave = () => {
    targetRotation.current = { x: 0, y: 0 }; // reset to center
  };

  return (
    <section 
      className="relative min-h-[92vh] home-hero overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
              <ContactModal>
                <button className="home-cta-primary">Book Demo <ArrowRight size={18} /></button>
              </ContactModal>
            </div>


          </div>

          {/* ===== Custom 3D Verification Animation (Pro Level) ===== */}
          <div
            className="hidden lg:block relative w-full h-[650px] animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Ambient Background Glow for the 3D area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-red/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center perspective-2000 pointer-events-none">
              
              {/* The 3D Container - Cursor Follow */}
              <div 
                ref={containerRef}
                className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] transform-style-3d mt-10"
              >
                
                {/* Core Shield */}
                <div 
                  className="absolute inset-0 rounded-full border border-red-500/30 bg-gradient-to-br from-[#120a20] to-[#0c0c24] backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(204,0,0,0.3)] transform-style-3d z-10"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <div className="absolute inset-2 rounded-full border border-brand-red/20 border-dashed animate-spin-slow" />
                  <ShieldCheck className="w-24 h-24 sm:w-28 sm:h-28 text-brand-red drop-shadow-[0_0_25px_rgba(204,0,0,0.8)] opacity-90" strokeWidth={1.2} />
                  
                  {/* Dynamic Glare Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent overflow-hidden" />
                </div>

                {/* Cyber/Tech Orbiting Rings */}
                <div className="absolute inset-[-25%] rounded-full border-[1px] border-gray-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s', transform: 'translateZ(10px)' }}>
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-brand-red rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_red]" />
                </div>
                <div className="absolute inset-[-50%] rounded-full border-[1.5px] border-dashed border-gray-600/20 animate-spin-slow" style={{ animationDuration: '40s', transform: 'translateZ(-20px)' }}>
                   <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_blue]" />
                </div>

                {/* Floating ID Card - Highly detailed */}
                <div 
                  className="absolute top-[-10%] right-[-10%] lg:right-[-15%] transform-style-3d z-20"
                  style={{ transform: 'translateZ(90px) rotate(12deg)' }}
                >
                  <div className="w-48 sm:w-56 h-32 sm:h-36 pro-glass-panel rounded-2xl p-3 sm:p-4 transform-style-3d animate-float-3d overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
                    <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-500/20 flex items-center justify-center border border-gray-500/30">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                      </div>
                      <div className="flex-1 mt-1">
                        <div className="w-20 sm:w-24 h-1.5 sm:h-2 bg-gray-300/60 rounded mb-2" />
                        <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gray-400/40 rounded" />
                      </div>
                      <Fingerprint className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-gray-400/30 rounded" />
                        <div className="w-full h-1 sm:h-1.5 bg-gray-400/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-gray-400/30 rounded" />
                        <div className="w-2/3 h-1 sm:h-1.5 bg-gray-400/20 rounded" />
                      </div>
                    </div>
                    
                    {/* Scanning Laser (Broad cyber scanner) */}
                    <div className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent to-brand-red/20 border-b border-brand-red animate-scan-laser shadow-[0_10px_20px_rgba(204,0,0,0.15)]" />
                  </div>
                </div>

                {/* Verified Popup Badge - Enterprise style */}
                <div 
                  className="absolute bottom-[-5%] lg:bottom-[-10%] left-[-10%] lg:left-[-15%] transform-style-3d z-30" 
                  style={{ transform: 'translateZ(130px) rotate(-6deg)' }}
                >
                  <div className="w-auto px-4 sm:px-5 py-2 sm:py-3 pro-glass-panel bg-green-500/5 border border-green-500/30 rounded-xl flex items-center gap-2 sm:gap-3 animate-float-3d-reverse" style={{ animationDelay: '1s' }}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm tracking-wide">VERIFIED</div>
                      <div className="text-green-400/80 text-[8px] sm:text-[10px] uppercase font-mono tracking-wider">KYC MATCH 99.9%</div>
                    </div>
                  </div>
                </div>

                {/* Enterprise Data Nodes */}
                <div 
                  className="absolute top-[5%] left-[-15%] lg:left-[-20%] transform-style-3d z-20" 
                  style={{ transform: 'translateZ(60px) rotate(-10deg)' }}
                >
                  <div className="w-auto px-3 sm:px-4 py-1.5 sm:py-2 pro-glass-panel rounded-lg flex items-center gap-2 animate-float-3d" style={{ animationDelay: '2s' }}>
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-gray-300 text-[10px] sm:text-xs font-mono">AES-256</span>
                  </div>
                </div>
                
                <div 
                  className="absolute bottom-[20%] lg:bottom-[25%] right-[-15%] lg:right-[-20%] transform-style-3d z-20" 
                  style={{ transform: 'translateZ(75px) rotate(8deg)' }}
                >
                  <div className="w-auto px-3 sm:px-4 py-1.5 sm:py-2 pro-glass-panel rounded-lg flex items-center gap-2 animate-float-3d-reverse" style={{ animationDelay: '0.5s' }}>
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-gray-300 text-[10px] sm:text-xs font-mono">LIVE SYNC</span>
                  </div>
                </div>

                <div 
                  className="absolute top-[-20%] lg:top-[-30%] left-[5%] lg:left-[10%] transform-style-3d z-20" 
                  style={{ transform: 'translateZ(40px) rotate(5deg)' }}
                >
                  <div className="w-auto px-3 sm:px-4 py-1.5 sm:py-2 pro-glass-panel rounded-lg flex items-center gap-2 animate-float-3d" style={{ animationDelay: '1.5s' }}>
                    <FileCheck className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red" />
                    <span className="text-gray-300 text-[10px] sm:text-xs font-mono">CRIMINAL DB</span>
                  </div>
                </div>
                
              </div>
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
  { id: 'employment-history-verification', icon: ShieldCheck, title: 'Comprehensive Background Check', desc: 'Full profile verification' },
  { id: 'address-verification',            icon: MapPin,      title: 'Address Verification',           desc: 'Physical & digital checks' },
  { id: 'credit-check',                    icon: Landmark,    title: 'CIBIL & Financial Check',        desc: 'Credit history analysis' },
  { id: 'criminal-record-check',           icon: Scale,       title: 'Criminal Record Check',          desc: 'Court & police records' },
  { id: 'education-verification',          icon: GraduationCap, title: 'Education Verification',       desc: 'Degree & certificate validation' },
  { id: 'employment-history-verification', icon: Briefcase,   title: 'Employment History',             desc: 'Past experience & tenure' },
  { id: 'passport-verification',           icon: FileText,    title: 'Passport Verification',          desc: 'Ministry of External Affairs check' },
  { id: 'pcc-verification',                icon: Shield,      title: 'Police Clearance Certificate',   desc: 'Official PCC verification' },
  { id: 'drug-alcohol-testing',            icon: FlaskRound,  title: 'Drug Testing',                   desc: 'Pre-employment screening' },
  { id: 'identity-verification',           icon: UserSearch,  title: 'Identity Verification',          desc: 'Aadhaar, PAN & Voter ID' },
];

function MarqueeCard({ service, keyId }: { service: typeof popularServices[0]; keyId: string }) {
  return (
    <Link
      key={keyId}
      to={`/services/${service.id}`}
      className="marquee-card group/card"
    >
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 group-hover/card:bg-brand-red transition-colors duration-300">
        <service.icon size={22} className="text-brand-red group-hover/card:text-white transition-colors duration-300" />
      </div>
      <div>
        <h3 className="font-semibold text-brand-black group-hover/card:text-brand-red transition-colors">{service.title}</h3>
        <p className="text-xs text-gray-500">{service.desc}</p>
      </div>
    </Link>
  );
}

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

      {/* Row 1 — Left to Right */}
      <div className="relative w-full flex overflow-hidden group py-3 mb-3">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-content group-hover:pause">
          {popularServices.map((service, idx) => (
            <MarqueeCard key={`row1-a-${idx}`} service={service} keyId={`row1-a-${idx}`} />
          ))}
        </div>
        <div className="marquee-content group-hover:pause" aria-hidden="true">
          {popularServices.map((service, idx) => (
            <MarqueeCard key={`row1-b-${idx}`} service={service} keyId={`row1-b-${idx}`} />
          ))}
        </div>
      </div>

      {/* Row 2 — Right to Left (reverse direction) */}
      <div className="relative w-full flex overflow-hidden group py-3">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-content-reverse group-hover:pause">
          {[...popularServices].reverse().map((service, idx) => (
            <MarqueeCard key={`row2-a-${idx}`} service={service} keyId={`row2-a-${idx}`} />
          ))}
        </div>
        <div className="marquee-content-reverse group-hover:pause" aria-hidden="true">
          {[...popularServices].reverse().map((service, idx) => (
            <MarqueeCard key={`row2-b-${idx}`} service={service} keyId={`row2-b-${idx}`} />
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
          <ContactModal>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl">Book Demo <ArrowRight size={18} /></button>
          </ContactModal>
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