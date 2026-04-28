import { useParams, Link } from 'react-router';
import { complianceAreas } from '@/data/compliance';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  ArrowLeft, CheckCircle, Shield, 
  ArrowRight, Landmark, Scale, FileText, Lock
} from 'lucide-react';
import { useEffect } from 'react';

export default function ComplianceDetail() {
  const { id } = useParams();
  const area = complianceAreas.find(a => a.id === id);
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Area Not Found</h2>
          <Link to="/compliance" className="text-brand-red font-semibold flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Compliance
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section 
        style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #0a1a0a 100%)' }} 
        className="relative pt-44 pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 home-hero-grid opacity-20" />
        <div className="home-orb home-orb-1 opacity-40" style={{ top: '10%', right: '10%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/compliance" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Compliance
          </Link>
          
          <div ref={headerRef} className={`transition-all duration-700 ${headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-brand-red flex items-center justify-center shadow-xl shadow-brand-red/20 shrink-0">
                <area.icon size={40} className="text-white" />
              </div>
              <div>
                <span className={`inline-block px-4 py-1 text-xs font-bold rounded-full mb-4 border border-white/10 ${area.badgeColor} bg-opacity-10`}>
                  {area.category} Framework
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {area.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Landmark size={18} className="text-brand-red" />
                <span className="text-sm font-medium">{area.authority}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Lock size={18} className="text-brand-red" />
                <span className="text-sm font-medium">Effective Since {area.year}</span>
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
                    Compliance Overview
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {area.fullDesc}
                  </p>
                  <p className="text-gray-500 leading-relaxed italic border-l-4 border-gray-100 pl-6">
                    {area.desc}
                  </p>
                </div>

                {/* Key Points */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Key Compliance Points
                  </h2>
                  <div className="space-y-4">
                    {area.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-red transition-colors shrink-0">
                          <CheckCircle size={18} className="text-brand-red group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-700 pt-1.5">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Items */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-10 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-red rounded-full" />
                    Regulations & Acts
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {area.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <FileText size={18} className="text-brand-red" />
                        <span className="font-bold text-brand-black">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Authority Card */}
              <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Scale size={100} />
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-brand-red" />
                  Legal Framework
                </h3>
                <div className="space-y-6 relative z-10">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Governing Authority</p>
                    <p className="text-lg font-bold">{area.authority}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Statutory Year</p>
                    <p className="text-lg font-bold">{area.year}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Compliance Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <p className="text-lg font-bold text-green-400">Mandatory</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Card */}
              <div className="bg-brand-red rounded-3xl p-8 text-white shadow-xl shadow-brand-red/20">
                <h3 className="text-2xl font-bold mb-4">Stay Compliant</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Ensure your hiring process is fully compliant with the latest Indian and International laws.
                </p>
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 py-4 bg-white text-brand-red font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Consult Our Legal Team <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
