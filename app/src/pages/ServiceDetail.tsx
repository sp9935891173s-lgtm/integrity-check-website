import { useParams, Link } from 'react-router';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  ArrowLeft, CheckCircle, Clock, FileText, 
  ShieldCheck, ArrowRight, MessageSquare 
} from 'lucide-react';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Link to="/services" className="text-brand-red font-semibold flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section 
        style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #1a0520 100%)' }} 
        className="relative pt-44 pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 home-hero-grid opacity-20" />
        <div className="home-orb home-orb-1 opacity-40" style={{ top: '10%', right: '10%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
          
          <div ref={headerRef} className={`transition-all duration-700 ${headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-brand-red flex items-center justify-center shadow-xl shadow-brand-red/20 shrink-0">
                <service.icon size={40} className="text-white" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-white/10 text-brand-red text-sm font-semibold rounded-full border border-white/10 mb-4">
                  {service.category} Verification
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Clock size={18} className="text-brand-red" />
                <span className="text-sm font-medium">TAT: {service.tat}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <ShieldCheck size={18} className="text-brand-red" />
                <span className="text-sm font-medium">100% Compliant</span>
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
                    Service Overview
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.longDesc}
                  </p>
                  <p className="text-gray-500 leading-relaxed italic border-l-4 border-gray-100 pl-6">
                    {service.desc}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-red transition-colors">
                          <CheckCircle size={18} className="text-brand-red group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                {service.process && (
                  <div>
                    <h2 className="text-2xl font-bold text-brand-black mb-10 flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                      Our Verification Process
                    </h2>
                    <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                      {service.process.map((step, i) => (
                        <div key={i} className="relative pl-12 group">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-brand-red flex items-center justify-center z-10 group-hover:bg-brand-red transition-colors">
                            <span className="text-brand-red font-bold text-sm group-hover:text-white transition-colors">{i + 1}</span>
                          </div>
                          <div className="p-6 bg-white rounded-2xl border border-gray-100 group-hover:border-brand-red/20 group-hover:shadow-lg group-hover:shadow-gray-100 transition-all">
                            <p className="text-gray-700 font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Documents Required */}
              <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FileText size={100} />
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText size={20} className="text-brand-red" />
                  Documents Required
                </h3>
                <ul className="space-y-4 relative z-10">
                  {service.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 italic">
                    *Note: Digital copies are usually sufficient for initial screening.
                  </p>
                </div>
              </div>

              {/* Get Started Card */}
              <div className="bg-brand-red rounded-3xl p-8 text-white shadow-xl shadow-brand-red/20">
                <h3 className="text-2xl font-bold mb-4">Start Verification</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Ready to verify your candidates with the most reliable background check platform?
                </p>
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 py-4 bg-white text-brand-red font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>

              {/* Need Help? */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} />
                </div>
                <h4 className="font-bold text-brand-black mb-2">Need Help?</h4>
                <p className="text-gray-500 text-sm mb-6">Have questions about this service or custom requirements?</p>
                <a href="tel:+911234567890" className="text-brand-red font-bold text-lg hover:underline">
                  +91 12345 67890
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Services Slider (Simulated) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-brand-red font-bold text-sm tracking-wider uppercase mb-2 block">Explore More</span>
              <h2 className="text-3xl font-bold text-brand-black">Other Services You May Need</h2>
            </div>
            <Link to="/services" className="text-brand-red font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id && s.category === service.category)
              .slice(0, 3)
              .map((s) => (
                <Link 
                  key={s.id} 
                  to={`/services/${s.id}`}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-red transition-all hover:shadow-xl shadow-gray-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                    <s.icon size={24} />
                  </div>
                  <h4 className="font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{s.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{s.desc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
