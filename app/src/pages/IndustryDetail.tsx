import { useParams, Link } from 'react-router';
import { industries } from '@/data/industries';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  ArrowLeft, CheckCircle, Clock, ShieldCheck, 
  ArrowRight, Building2, Briefcase, Info
} from 'lucide-react';
import { useEffect } from 'react';

export default function IndustryDetail() {
  const { id } = useParams();
  const industry = industries.find(ind => ind.id === id);
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h2>
          <Link to="/industries" className="text-brand-red font-semibold flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section 
        style={{ background: 'linear-gradient(135deg, #060612 0%, #0d1a2b 60%, #1a0520 100%)' }} 
        className="relative pt-44 pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 home-hero-grid opacity-20" />
        <div className="home-orb home-orb-1 opacity-40" style={{ top: '10%', right: '10%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/industries" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Industries
          </Link>
          
          <div ref={headerRef} className={`transition-all duration-700 ${headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-brand-red flex items-center justify-center shadow-xl shadow-brand-red/20 shrink-0">
                <industry.icon size={40} className="text-white" />
              </div>
              <div>
                <span className={`inline-block px-4 py-1 text-xs font-bold rounded-full mb-4 border border-white/10 ${industry.badgeColor} bg-opacity-10`}>
                  {industry.category} Industry
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {industry.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Clock size={18} className="text-brand-red" />
                <span className="text-sm font-medium">Avg. TAT: {industry.turnaround}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <ShieldCheck size={18} className="text-brand-red" />
                <span className="text-sm font-medium">{industry.compliance}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              <div ref={contentRef} className={`space-y-12 transition-all duration-700 ${contentRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Industry Overview
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {industry.fullDesc}
                  </p>
                  <p className="text-gray-500 leading-relaxed italic border-l-4 border-gray-100 pl-6">
                    {industry.desc}
                  </p>
                </div>

                {/* Key Checks */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Recommended Checks
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industry.checks.map((check, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-red transition-colors">
                          <CheckCircle size={18} className="text-brand-red group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-700">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Included */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-10 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Core Solutions
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {industry.services.map((service, i) => (
                      <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Briefcase size={60} />
                        </div>
                        <h4 className="font-bold text-brand-black mb-2">{service}</h4>
                        <p className="text-gray-500 text-sm">Comprehensive screening specialized for {industry.title.split(' ')[0]} professionals.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Stats Card */}
              <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Building2 size={100} />
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Info size={20} className="text-brand-red" />
                  Quick Info
                </h3>
                <div className="space-y-6 relative z-10">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Turnaround Time</p>
                    <p className="text-lg font-bold">{industry.turnaround}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Compliance Standard</p>
                    <p className="text-lg font-bold">{industry.compliance}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Coverage</p>
                    <p className="text-lg font-bold">Pan-India & Global</p>
                  </div>
                </div>
              </div>

              {/* Get Started Card */}
              <div className="bg-brand-red rounded-3xl p-8 text-white shadow-xl shadow-brand-red/20">
                <h3 className="text-2xl font-bold mb-4">Start Screening</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Get a customized background verification package tailored for your industry needs.
                </p>
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 py-4 bg-white text-brand-red font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Our Experts <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-brand-red font-bold text-sm tracking-wider uppercase mb-2 block">Who We Serve</span>
              <h2 className="text-3xl font-bold text-brand-black">Related Industries</h2>
            </div>
            <Link to="/industries" className="text-brand-red font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries
              .filter(ind => ind.id !== industry.id && ind.category === industry.category)
              .slice(0, 3)
              .map((ind) => (
                <Link 
                  key={ind.id} 
                  to={`/industries/${ind.id}`}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-red transition-all hover:shadow-xl shadow-gray-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                    <ind.icon size={24} />
                  </div>
                  <h4 className="font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{ind.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{ind.desc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
