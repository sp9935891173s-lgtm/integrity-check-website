import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useRef, useState, useCallback } from 'react';
import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  Zap, Lock, Headphones, Star, ArrowRight, FileText, Search, CheckCircle,
  ChevronRight, Stethoscope, Laptop, Landmark, Factory, ShoppingCart,
  School, UserSearch, Building2, Home as HomeIcon, Truck, Hotel, Wallet,
  FlaskRound, Scale, Heart, ShieldCheck, Clock, TrendingUp
} from 'lucide-react';

function HeroSection() {
  const laptopRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!laptopRef.current) return;
    const rect = laptopRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1
    const rotateY = (0.5 - x) * 25;  // +12.5 to -12.5 degrees (follows cursor)
    const rotateX = (0.5 - y) * 15;  // +7.5 to -7.5 degrees (follows cursor)
    setTilt({ rotateX, rotateY, glareX: x * 100, glareY: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  }, []);

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

          {/* ===== 3D Laptop with cursor-following tilt ===== */}
          <div
            className="hidden lg:block relative animate-fade-in-up"
            style={{ animationDelay: '0.3s', perspective: '1400px' }}
            ref={laptopRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="monitor-3d"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Monitor Screen Panel */}
              <div className="monitor-bezel">
                <div className="monitor-camera" />
                <div className="monitor-screen">
                  <div
                    className="monitor-glare"
                    style={{
                      background: `radial-gradient(ellipse at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.14) 0%, transparent 55%)`,
                    }}
                  />
                  <div className="p-4 relative h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                          <Shield size={16} className="text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">Verification Dashboard</div>
                          <div className="text-gray-500 text-[10px]">Real-time monitoring</div>
                        </div>
                      </div>
                      <div className="home-glass-badge px-2 py-0.5 rounded-full">
                        <span className="text-green-400 text-[10px] font-medium">● Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="home-inner-card rounded-lg p-2.5">
                        <div className="text-gray-500 text-[10px] mb-0.5">Verified Today</div>
                        <div className="text-white text-lg font-bold leading-tight">2,847</div>
                        <div className="text-green-400 text-[10px] flex items-center gap-0.5"><TrendingUp size={9} />+12.5%</div>
                      </div>
                      <div className="home-inner-card rounded-lg p-2.5">
                        <div className="text-gray-500 text-[10px] mb-0.5">Avg. Time</div>
                        <div className="text-white text-lg font-bold leading-tight">4.2h</div>
                        <div className="text-green-400 text-[10px] flex items-center gap-0.5"><Clock size={9} />-18% faster</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[{l:'Criminal Check',w:'92%',c:'from-red-500 to-red-600'},{l:'Education',w:'87%',c:'from-indigo-500 to-purple-500'},{l:'Employment',w:'78%',c:'from-amber-500 to-orange-500'}].map((p,i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] mb-0.5"><span className="text-gray-400">{p.l}</span><span className="text-gray-500">{p.w}</span></div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${p.c} rounded-full home-progress-bar`} style={{'--progress-width': p.w} as React.CSSProperties} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="monitor-brand">INTEGRITY CHECK</div>
              </div>
              {/* Monitor Stand */}
              <div className="monitor-stand-neck" />
              <div className="monitor-stand-base" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-2 home-glass-badge rounded-xl px-4 py-3 home-float-card z-20">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <div>
                  <div className="text-white text-xs font-medium">Verified ✓</div>
                  <div className="text-gray-500 text-[10px]">Rajesh S. — Just now</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 -left-6 home-glass-badge rounded-xl px-4 py-3 home-float-card-2 z-20">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-brand-red" />
                <div>
                  <div className="text-white text-xs font-medium">99.9% Accuracy</div>
                  <div className="text-gray-500 text-[10px]">Industry Leading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUpStat({ end, suffix = '', prefix = '', label, icon: Icon, delay = 0 }: { end: number; suffix?: string; prefix?: string; label: string; icon: React.ComponentType<{size?:number;className?:string}>; delay?: number }) {
  const { ref, display } = useCountUp({ end, duration: 2000, delay, suffix, prefix });
  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center">
        <Icon size={22} className="text-brand-red" />
      </div>
      <div className="text-white text-3xl font-bold mb-1 tabular-nums">{display}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative -mt-12 z-20 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="home-stats-bar rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <CountUpStat end={5000} suffix="+" label="Clients Served" icon={Briefcase} delay={0} />
          <CountUpStat end={99.9} suffix="%" label="Accuracy Rate" icon={CheckCircle} delay={200} />
          <CountUpStat end={24} suffix="h" label="Turnaround Time" icon={Zap} delay={400} />
          <CountUpStat end={100} suffix="%" label="Legally Compliant" icon={Shield} delay={600} />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: Shield, title: 'Criminal Record Check', desc: 'Court records and FIR verification across all jurisdictions.', color: 'from-red-500 to-red-600' },
    { icon: Briefcase, title: 'Employment Verification', desc: 'Confirm past employment history, designations, and tenure.', color: 'from-blue-500 to-indigo-600' },
    { icon: GraduationCap, title: 'Education Verification', desc: 'Validate degrees and academic credentials with institutions.', color: 'from-purple-500 to-violet-600' },
    { icon: MapPin, title: 'Address Verification', desc: 'Verify current and permanent addresses digitally or physically.', color: 'from-emerald-500 to-green-600' },
    { icon: FlaskConical, title: 'Drug Testing', desc: 'Pre-employment screening at NABL-certified laboratories.', color: 'from-amber-500 to-orange-600' },
    { icon: Users, title: 'Reference Check', desc: 'Professional reference verification from former supervisors.', color: 'from-cyan-500 to-teal-600' },
  ];
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Comprehensive Verification Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">End-to-end background screening services tailored to meet your hiring needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link to="/services" key={i} className={`home-service-card group scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight size={14} /> Learn More</span>
            </Link>
          ))}
        </div>
        <div className={`text-center mt-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-red text-brand-red font-semibold rounded-lg hover:bg-brand-red hover:text-white transition-all duration-200">View All Services <ArrowRight size={18} /></Link>
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
              <div><div className="font-semibold text-brand-black text-sm">{ind.title}</div><div className="text-gray-400 text-xs">{ind.service}</div></div>
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



function TestimonialsSection() {
  const testimonials = [
    { name: 'Rajesh Sharma', role: 'HR Director, Tech Solutions', text: 'Their turnaround time and accuracy are unmatched. Highly recommended!' },
    { name: 'Priya Patel', role: 'CEO, StartupHub India', text: 'Using their services for 3+ years. Detailed reports and excellent support.' },
    { name: 'Amit Kumar', role: 'Head of Talent, Global Infotech', text: 'Exceptional detail in reports. They caught discrepancies others missed.' },
  ];
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`home-testimonial-card scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-xs font-bold">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <div><div className="font-semibold text-brand-black text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.role}</div></div>
              </div>
            </div>
          ))}
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
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
    
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
