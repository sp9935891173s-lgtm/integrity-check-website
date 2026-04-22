import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  Zap, Lock, Headphones,
  Star, ArrowRight, FileText, Search, CheckCircle
} from 'lucide-react';

/* ───────── Hero Section ───────── */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-brand-black overflow-hidden hero-pattern magnify-pattern flex items-center">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <Shield size={16} className="text-brand-red" />
            <span className="text-gray-300 text-sm font-medium">Trusted by 5000+ Companies Across India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            India's Most Trusted{' '}
            <span className="text-brand-red">Background Screening</span>{' '}
            & Verification Services
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Helping businesses hire smarter with accurate, fast, and legally compliant background checks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Request Free Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

/* ───────── Stats Section ───────── */
function StatsSection() {
  const stats = [
    { value: '5000+', label: 'Clients Served', icon: Briefcase },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { value: '24 Hour', label: 'Turnaround Time', icon: Zap },
    { value: '100%', label: 'Legally Compliant', icon: Shield },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                <stat.icon size={24} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-black mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Comprehensive Verification Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We offer end-to-end background screening services tailored to meet your hiring needs with speed and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className={`group bg-white rounded-xl p-8 border border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-card-hover scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-brand-red transition-colors duration-300">
                <service.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-red text-brand-red font-semibold rounded-lg hover:bg-brand-red hover:text-white transition-all duration-200"
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
    { icon: Zap, title: 'Fast & Accurate Results', desc: 'Get verification reports within 24 hours with 99.9% accuracy guaranteed.' },
    { icon: Shield, title: 'FCRA & Legal Compliant', desc: 'All checks follow Indian IT Act, labor laws, and international FCRA guidelines.' },
    { icon: Lock, title: 'Secure & Encrypted Data', desc: 'Enterprise-grade encryption ensures candidate data remains confidential and safe.' },
    { icon: Headphones, title: 'Dedicated Support Team', desc: 'Our experts are available to assist you at every step of the verification process.' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            The Integrity Check Advantage
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine cutting-edge technology with rigorous processes to deliver the most reliable background verification services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-card-hover border border-transparent hover:border-gray-100 transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center">
                <feature.icon size={32} className="text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
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
    <section ref={ref} className="py-20 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-brand-red text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting started with background verification has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-red/50 via-brand-red to-brand-red/50" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-red flex items-center justify-center relative z-10 shadow-lg shadow-brand-red/30">
                <step.icon size={28} className="text-white" />
              </div>
              <div className="text-brand-red text-sm font-bold mb-2">Step {step.num}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
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
    { name: 'Rajesh Sharma', role: 'HR Director, Tech Solutions Pvt. Ltd.', text: 'Integrity Check Services has transformed our hiring process. Their turnaround time and accuracy are unmatched in the industry. Highly recommended!' },
    { name: 'Priya Patel', role: 'CEO, StartupHub India', text: 'We have been using their services for over 3 years now. The detailed reports and excellent customer support make them our go-to verification partner.' },
    { name: 'Amit Kumar', role: 'Head of Talent, Global Infotech', text: 'The level of detail in their verification reports is exceptional. They caught discrepancies that other agencies missed. Truly professional service.' },
  ];

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by leading companies across India for reliable background verification services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-brand-black text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
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
    <section ref={ref} className="py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-6 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Start Background Verification Today
        </h2>
        <p className={`text-white/80 text-lg mb-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          Get a free demo and see how we can help you hire with confidence.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            Get a Free Demo
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
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
      <HowItWorksSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
