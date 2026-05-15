import { useEffect } from 'react';
import { 
  Shield, Building, Building2, Landmark, 
  Stethoscope, Laptop, Truck, GraduationCap, 
  CheckCircle2, ArrowRight, Star
} from 'lucide-react';
import ContactModal from '../components/ContactModal';

const generalPackages = [
  {
    name: 'Basic',
    target: 'Small Businesses',
    description: 'Essential verification for entry-level roles.',
    icon: Shield,
    checks: [
      'Identity Verification (Aadhaar/PAN)',
      'Address Verification',
      'Criminal Record Check'
    ],
    popular: false,
    featured: false,
  },
  {
    name: 'Standard',
    target: 'Mid-size Companies',
    description: 'Comprehensive screening for standard hiring.',
    icon: Building,
    checks: [
      'Identity Verification',
      'Address Verification',
      'Criminal Record Check',
      'Employment History (1 employer)',
      'Education Verification (1 degree)',
      'Reference Check'
    ],
    popular: true,
    featured: false,
  },
  {
    name: 'Professional',
    target: 'Corporate Entities',
    description: 'Advanced checks for specialized roles.',
    icon: Building2,
    checks: [
      'Identity + Address Verification',
      'Criminal + Court Record Check',
      'Employment History (2 employers)',
      'Education Verification (2 degrees)',
      'Reference Check (2 references)',
      'CIBIL Credit Check',
      'UAN/PF Verification'
    ],
    popular: false,
    featured: true, // Make this one stand out significantly
  },
  {
    name: 'Executive',
    target: 'Senior Management',
    description: 'Deep-dive screening for leadership.',
    icon: Star,
    checks: [
      'All Professional checks',
      'Global Database & Watchlist Check',
      'Directorship & DIN Check',
      'Social Media Check',
      'Media & Internet Check',
      'Professional License Verification',
      'ITR/Form 26AS Verification'
    ],
    popular: false,
    featured: false,
  },
  {
    name: 'Comprehensive',
    target: 'Banks & Govt',
    description: 'The ultimate risk mitigation package.',
    icon: Landmark,
    checks: [
      'All Executive checks',
      'Drug & Alcohol Testing',
      'Police Clearance Certificate',
      'Civil Court Record Check',
      'Sex Offender Check',
      'Vendor/Supplier Verification'
    ],
    popular: false,
    featured: false,
  }
];

const industryPackages = [
  { name: 'Healthcare', icon: Stethoscope, checks: ['Criminal & Court Check', 'Medical License Verification', 'Education Verification', 'Drug Testing', 'Address Verification', 'Identity Verification'] },
  { name: 'IT & Tech', icon: Laptop, checks: ['Employment History (3x)', 'Education Verification', 'Identity Check', 'Global Screening', 'Social Media Check', 'Reference Check'] },
  { name: 'Banking & Finance', icon: Landmark, checks: ['CIBIL Credit Check', 'Criminal Check', 'Identity Verification', 'Directorship Check', 'DIN Verification', 'Economic Default Check', 'ITR Verification'] },
  { name: 'Driver & Logistics', icon: Truck, checks: ['Criminal Check', 'Driving License Verification', 'Address Verification', 'Drug Testing', 'Police Clearance Certificate'] },
  { name: 'Education', icon: GraduationCap, checks: ['Criminal Record Check', 'Education Verification', 'Identity Verification', 'Address Verification', 'Reference Check', 'Sex Offender Check'] },
  { name: 'Government & PSU', icon: Building2, checks: ['Police Verification', 'Criminal Court Check', 'Identity Verification', 'Address Verification', 'Education Verification', 'Employment History', 'Civil Court Record'] }
];

export default function Packages() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-32 bg-brand-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-red text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in-up backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Verification Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">Packages</span> List
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Enterprise-grade background screening solutions. Choose the right level of verification to mitigate risk and ensure compliance for your organization.
          </p>
        </div>
      </section>

      {/* Core Packages Section */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {generalPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                id={pkg.name.toLowerCase()}
                className={`scroll-reveal relative flex flex-col w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 ${
                  pkg.featured
                    ? 'bg-brand-black text-white shadow-2xl scale-105 lg:-mt-8 z-10 border border-brand-red/30'
                    : 'bg-white text-brand-black shadow-xl border border-gray-100 hover:shadow-2xl hover:border-red-100'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow effect for featured */}
                {pkg.featured && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-red/20 to-transparent opacity-50 pointer-events-none" />
                )}

                {/* Badges */}
                {pkg.popular && !pkg.featured && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-brand-red to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                {pkg.featured && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-red-500 to-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(204,0,0,0.4)] border border-red-400/50">
                    Recommended
                  </div>
                )}

                {/* Header */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    pkg.featured ? 'bg-gradient-to-br from-brand-red to-red-700 text-white shadow-lg' : 'bg-red-50 text-brand-red'
                  }`}>
                    <pkg.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <div className={`text-sm font-semibold mb-4 ${pkg.featured ? 'text-brand-red' : 'text-brand-red'}`}>
                    {pkg.target}
                  </div>
                  <p className={`text-sm mb-8 ${pkg.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Checks List */}
                <div className="relative z-10 flex-grow">
                  <div className={`h-px w-full mb-6 ${pkg.featured ? 'bg-white/10' : 'bg-gray-100'}`} />
                  <ul className="space-y-4 mb-8">
                    {pkg.checks.map((check, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <CheckCircle2 size={20} className={`shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${
                          pkg.featured ? 'text-brand-red' : 'text-brand-red'
                        }`} />
                        <span className={`text-sm font-medium ${pkg.featured ? 'text-gray-300' : 'text-gray-700'}`}>
                          {check}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="relative z-10 mt-auto">
                  <ContactModal>
                    <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      pkg.featured 
                        ? 'bg-brand-red text-white hover:bg-brand-red-dark hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]' 
                        : 'bg-gray-50 text-brand-black hover:bg-brand-red hover:text-white border border-gray-200 hover:border-brand-red'
                    }`}>
                      Book Demo
                      <ArrowRight size={18} />
                    </button>
                  </ContactModal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specific Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6 tracking-tight">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Specific</span> Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Compliance isn't one-size-fits-all. We've tailored specialized verification frameworks to meet the strict regulatory demands of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="scroll-reveal group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-red/20 shadow-sm hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors duration-500 shadow-sm">
                    <pkg.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black">{pkg.name}</h3>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {pkg.checks.map((check, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red/40 group-hover:bg-brand-red transition-colors shrink-0" />
                      <span className="text-sm font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-brand-red to-red-900 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden scroll-reveal border border-red-400/20">
            {/* Animated Glow Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10 drop-shadow-lg">
              Require a Custom Enterprise Plan?
            </h2>
            <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto mb-10 relative z-10 font-light">
              Our compliance experts can architect a bespoke background screening framework aligned perfectly with your organization's unique risk profile and hiring scale.
            </p>
            <ContactModal>
              <button className="px-10 py-5 bg-white text-brand-red font-extrabold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative z-10 flex items-center gap-3 mx-auto text-lg">
                Request Custom Consultation
                <ArrowRight size={22} />
              </button>
            </ContactModal>
          </div>
        </div>
      </section>
    </div>
  );
}
