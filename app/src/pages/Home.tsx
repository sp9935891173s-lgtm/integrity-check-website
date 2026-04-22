import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  Zap, Lock, Headphones,
  Star, ArrowRight, FileText, Search, CheckCircle, Play, ChevronRight,
  Globe, Award, Clock, TrendingUp,
  Stethoscope, Laptop, Landmark, Factory, ShoppingCart, School, UserSearch, Building2,
  Home as HomeIcon, Truck, Hotel, Wallet, Scale, Heart, ShieldCheck
} from 'lucide-react';

/* ───────── Hero Section ───────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden home-hero flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 home-hero-bg" />

      {/* Grid pattern */}
      <div className="absolute inset-0 home-hero-grid" />

      {/* Floating orbs */}
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />
      <div className="home-orb home-orb-4" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 pb-24 md:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 home-glass-badge rounded-full mb-8 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">Trusted by 5000+ Companies Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.08] mb-7 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">India's Most </span>
              <span className="home-gradient-text">Trusted</span>
              <br />
              <span className="text-white">Background </span>
              <span className="home-gradient-text">Screening</span>
              <br />
              <span className="text-white/80 text-3xl sm:text-4xl md:text-5xl font-bold">& Verification Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Helping businesses hire smarter with accurate, fast, and legally compliant background checks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/contact"
                className="home-cta-primary group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="home-cta-secondary group"
              >
                <Play size={16} className="fill-white" />
                Watch Demo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {['RS', 'PP', 'AK', 'VG'].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center text-[10px] font-bold text-white">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-gray-400 text-xs">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right — Glassmorphism dashboard mockup */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main glass card */}
              <div className="home-glass-card p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">verification-dashboard</span>
                </div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="home-inner-card p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-emerald-400" />
                      <span className="text-gray-400 text-xs">Verified</span>
                    </div>
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1">
                      <TrendingUp size={10} /> +12.5%
                    </div>
                  </div>
                  <div className="home-inner-card p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-brand-red" />
                      <span className="text-gray-400 text-xs">Avg Time</span>
                    </div>
                    <div className="text-2xl font-bold text-white">4.2h</div>
                    <div className="text-brand-red text-xs mt-1 flex items-center gap-1">
                      <TrendingUp size={10} /> -18.3%
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'Criminal Check', pct: 94, color: 'bg-emerald-400' },
                    { label: 'Employment', pct: 87, color: 'bg-brand-red' },
                    { label: 'Education', pct: 78, color: 'bg-amber-400' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-gray-500">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full home-progress-bar`}
                          style={{ '--progress-width': `${item.pct}%`, animationDelay: `${i * 200 + 800}ms` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -left-12 top-1/3 home-float-card home-glass-card p-4 rounded-2xl max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Verified ✓</div>
                    <div className="text-gray-500 text-[10px]">Rajesh S. — 2m ago</div>
                  </div>
                </div>
              </div>

              {/* Floating accuracy card */}
              <div className="absolute -right-8 bottom-12 home-float-card-2 home-glass-card p-4 rounded-2xl" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                    <Shield size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">99.9%</div>
                    <div className="text-gray-500 text-[10px]">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── CountUp Stat Component ───────── */
function CountUpStat({ end, suffix, decimals = 0, label, icon: Icon, delay }: {
  end: number; suffix: string; decimals?: number; label: string; icon: React.ElementType; delay: number;
}) {
  const { ref, display } = useCountUp({ end, suffix, decimals, duration: 2200, delay });
  return (
    <div ref={ref} className="text-center group">
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors duration-300">
        <Icon size={22} className="text-brand-red" />
      </div>
      <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 tabular-nums">{display}</div>
      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ───────── Stats Section ───────── */
function StatsSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-2 relative -mt-16 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`home-stats-bar rounded-2xl p-6 sm:p-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <CountUpStat end={5000} suffix="+" label="Clients Served" icon={Briefcase} delay={0} />
            <CountUpStat end={99.9} suffix="%" decimals={1} label="Accuracy Rate" icon={CheckCircle} delay={200} />
            <CountUpStat end={24} suffix="h" label="Turnaround Time" icon={Zap} delay={400} />
            <CountUpStat end={100} suffix="%" label="Legally Compliant" icon={Shield} delay={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Services Section ───────── */
function ServicesSection() {
  const services = [
    { icon: Shield, title: 'Criminal Record Check', desc: 'Comprehensive court records and FIR verification across all jurisdictions.' },
    { icon: Briefcase, title: 'Employment Verification', desc: 'Confirm past employment history, designations, and tenure details.' },
    { icon: GraduationCap, title: 'Education Verification', desc: 'Validate degrees, certificates, and academic credentials with institutions.' },
    { icon: MapPin, title: 'Address Verification', desc: 'Verify current and permanent addresses through physical or digital checks.' },
    { icon: FlaskConical, title: 'Drug Testing', desc: 'Pre-employment drug and alcohol screening at certified laboratories.' },
    { icon: Users, title: 'Reference Check', desc: 'Professional reference verification from former supervisors and colleagues.' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full mb-4 border border-brand-red/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-5">
            Comprehensive Verification<br className="hidden sm:block" /> Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            End-to-end background screening services tailored to meet your hiring needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className={`group home-service-card scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-5 group-hover:from-brand-red group-hover:to-brand-red-dark transition-all duration-300">
                <service.icon size={26} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                Learn More <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-black text-white font-semibold rounded-xl hover:bg-brand-red transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/20 hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Why Choose Us Section ───────── */
function WhyChooseUsSection() {
  const features = [
    { icon: Zap, title: 'Fast & Accurate', desc: 'Get verification reports within 24 hours with 99.9% accuracy guaranteed.', color: 'from-amber-500 to-orange-600' },
    { icon: Shield, title: 'Legal Compliant', desc: 'All checks follow Indian IT Act, labor laws, and international FCRA guidelines.', color: 'from-brand-red to-red-700' },
    { icon: Lock, title: 'Secure & Encrypted', desc: 'Enterprise-grade encryption ensures candidate data remains confidential.', color: 'from-blue-500 to-indigo-600' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Our experts are available to assist you at every step of the process.', color: 'from-emerald-500 to-teal-600' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full mb-4 border border-brand-red/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-5 leading-tight">
              The Integrity Check <span className="text-brand-red">Advantage</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We combine cutting-edge technology with rigorous processes to deliver the most reliable background verification services in India.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-brand-red" />
                <span className="text-gray-600 font-medium">Pan-India Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-brand-red" />
                <span className="text-gray-600 font-medium">ISO Certified</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`home-feature-card scroll-reveal ${isRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-brand-black mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Industries Section ───────── */
const topIndustries = [
  { icon: Stethoscope, title: 'Healthcare & Hospitals', service: 'Degree & Criminal Check' },
  { icon: Laptop, title: 'IT & Technology', service: 'Employment & Education Verify' },
  { icon: Landmark, title: 'Banking & Finance', service: 'CIBIL & Identity Check' },
  { icon: Factory, title: 'Manufacturing', service: 'Address & Identity Verify' },
  { icon: ShoppingCart, title: 'Retail & E-commerce', service: 'Criminal & Address Check' },
  { icon: School, title: 'Education', service: 'Degree & Criminal Check' },
  { icon: UserSearch, title: 'Staffing & Recruitment', service: 'Fast Bulk Screening' },
  { icon: Building2, title: 'Government & PSU', service: 'Police Verification' },
  { icon: HomeIcon, title: 'Real Estate', service: 'Financial Background Check' },
  { icon: Truck, title: 'Logistics & Transport', service: 'License & Criminal Check' },
  { icon: Hotel, title: 'Hospitality & Hotels', service: 'Address & Criminal Check' },
  { icon: Wallet, title: 'NBFC & Insurance', service: 'CIBIL & Criminal Check' },
  { icon: FlaskConical, title: 'Pharma & Life Sciences', service: 'License & Education Verify' },
  { icon: Scale, title: 'Legal & Consulting', service: 'Professional License Check' },
  { icon: Heart, title: 'NGO & Non-Profit', service: 'Identity & Criminal Check' },
  { icon: ShieldCheck, title: 'Security Services', service: 'Police & Criminal Verify' },
];

function IndustriesSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full mb-4 border border-brand-red/20">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-5">
            Trusted Across <span className="text-brand-red">16+ Industries</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From Healthcare to Security — specialized background screening for every sector in India.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {topIndustries.map((item, i) => (
            <div
              key={i}
              className={`home-industry-card group scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${(i % 8) * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-3 group-hover:from-brand-red group-hover:to-brand-red-dark transition-all duration-300">
                <item.icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-bold text-brand-black mb-1 group-hover:text-brand-red transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-400 leading-snug">{item.service}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-black text-white font-semibold rounded-xl hover:bg-brand-red transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/20 hover:-translate-y-0.5"
          >
            View All Industries
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── How It Works Section ───────── */
function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Submit Request', desc: 'Upload candidate details securely through our portal or API integration.', icon: FileText },
    { num: '02', title: 'We Verify', desc: 'Our experts conduct thorough checks using proprietary databases and field networks.', icon: Search },
    { num: '03', title: 'Get Report', desc: 'Receive a comprehensive, tamper-proof verification report within 24 hours.', icon: CheckCircle },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 home-works-section relative overflow-hidden">
      <div className="absolute inset-0 home-hero-grid opacity-30" />
      <div className="home-orb home-orb-2" style={{ width: '300px', height: '300px', top: '10%', left: '80%' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-brand-red text-sm font-semibold rounded-full mb-4 border border-white/10">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Getting started with background verification has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center relative z-10 shadow-xl shadow-brand-red/25 home-step-icon">
                <step.icon size={28} className="text-white" />
              </div>
              <div className="text-brand-red text-xs font-bold mb-2 uppercase tracking-widest">Step {step.num}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials Section ───────── */
function TestimonialsSection() {
  const testimonials = [
    { name: 'Rajesh Sharma', role: 'HR Director, Tech Solutions Pvt. Ltd.', text: 'Integrity Check Services has transformed our hiring process. Their turnaround time and accuracy are unmatched in the industry.' },
    { name: 'Priya Patel', role: 'CEO, StartupHub India', text: 'We have been using their services for over 3 years. The detailed reports and excellent customer support make them our go-to partner.' },
    { name: 'Amit Kumar', role: 'Head of Talent, Global Infotech', text: 'The level of detail in their verification reports is exceptional. They caught discrepancies that other agencies missed.' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full mb-4 border border-brand-red/20">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black mb-5">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`home-testimonial-card scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-brand-black text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA Banner Section ───────── */
function CTABanner() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden home-cta-section">
      <div className="home-orb" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px', background: 'rgba(255,255,255,0.05)', filter: 'blur(80px)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Start Background Verification <span className="text-white/60">Today</span>
        </h2>
        <p className={`text-white/70 text-lg mb-10 max-w-2xl mx-auto transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          Get a free demo and see how we can help you hire with confidence.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get a Free Demo <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── Home Page ───────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
