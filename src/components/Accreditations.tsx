import { useScrollReveal } from '@/hooks/useScrollReveal';

import ccsImg from '@/assets/accreditations/ccs.png';
import gcloudImg from '@/assets/accreditations/gcloud.png';
import cyberEssentialsImg from '@/assets/accreditations/cyber-essentials.png';
import iso9001Img from '@/assets/accreditations/iso-9001.png';
import iso14001Img from '@/assets/accreditations/iso-14001.png';
import iso27001Img from '@/assets/accreditations/iso-27001.png';
import nidirectImg from '@/assets/accreditations/nidirect.png';
import disclosureScotlandImg from '@/assets/accreditations/disclosure-scotland.png';
import dbsImg from '@/assets/accreditations/dbs.png';
import cifasImg from '@/assets/accreditations/cifas.png';
import pbsaImg from '@/assets/accreditations/pbsa.png';

const accreditations = [
  {
    id: 'ccs',
    name: 'Crown Commercial Service',
    title: 'Supplier',
    desc: 'Government procurement framework supplier.',
    image: ccsImg,
    color: 'bg-slate-100 text-slate-700',
    borderColor: 'border-slate-200'
  },
  {
    id: 'gcloud',
    name: 'HM Government G-Cloud',
    title: 'Supplier',
    desc: 'Approved cloud services provider for public sector.',
    image: gcloudImg,
    color: 'bg-blue-50 text-blue-700',
    borderColor: 'border-blue-100'
  },
  {
    id: 'cyber-essentials',
    name: 'Cyber Essentials',
    title: 'Certified',
    desc: 'Verified protection against cyber threats.',
    image: cyberEssentialsImg,
    color: 'bg-cyan-50 text-cyan-700',
    borderColor: 'border-cyan-100'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    title: 'Quality Assured',
    desc: 'International standard for quality management.',
    image: iso9001Img,
    color: 'bg-amber-50 text-amber-700',
    borderColor: 'border-amber-100'
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015',
    title: 'Green Business',
    desc: 'Environmental management system standard.',
    image: iso14001Img,
    color: 'bg-emerald-50 text-emerald-700',
    borderColor: 'border-emerald-100'
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001',
    title: 'Information Security',
    desc: 'Highest standard for data security management.',
    image: iso27001Img,
    color: 'bg-indigo-50 text-indigo-700',
    borderColor: 'border-indigo-100',
    link: '/certificates/ISO-27001.pdf'
  },
  {
    id: 'nidirect',
    name: 'nidirect',
    title: 'Government Services',
    desc: 'Official government services partner.',
    image: nidirectImg,
    color: 'bg-sky-50 text-sky-700',
    borderColor: 'border-sky-100'
  },
  {
    id: 'disclosure-scotland',
    name: 'Disclosure Scotland',
    title: 'Registered Body',
    desc: 'Official provider for Scottish criminal records.',
    image: disclosureScotlandImg,
    color: 'bg-teal-50 text-teal-700',
    borderColor: 'border-teal-100'
  },
  {
    id: 'dbs',
    name: 'Disclosure & Barring Service',
    title: 'DBS Registered',
    desc: 'Helping employers make safer recruitment decisions.',
    image: dbsImg,
    color: 'bg-purple-50 text-purple-700',
    borderColor: 'border-purple-100'
  },
  {
    id: 'cifas',
    name: 'Cifas',
    title: 'READY',
    desc: 'UK\'s leading fraud prevention service.',
    image: cifasImg,
    color: 'bg-rose-50 text-rose-700',
    borderColor: 'border-rose-100'
  },
  {
    id: 'pbsa',
    name: 'PBSA',
    title: 'Professional Member',
    desc: 'Professional Background Screening Association.',
    image: pbsaImg,
    color: 'bg-blue-100 text-blue-900',
    borderColor: 'border-blue-200'
  }
];

interface AccreditationsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  isDark?: boolean;
}

export default function Accreditations({ 
  className = "", 
  title = "Accreditations & Certifications",
  subtitle = "Globally recognized standards that validate our commitment to security, quality, and excellence.",
  isDark = false
}: AccreditationsProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className={`py-20 ${isDark ? 'bg-brand-black text-white' : 'bg-gray-50'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">
            Trust & Credentials
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-brand-black'}`}>
            {title}
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {accreditations.map((acc, i) => {
            const content = (
              <div
                className={`group relative p-6 rounded-2xl border transition-all duration-300 h-full ${
                  isRevealed ? 'revealed' : ''
                } ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                    : 'bg-white border-gray-100 hover:shadow-xl hover:border-brand-red/20'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`w-full h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={acc.image} 
                    alt={acc.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className={`text-[11px] font-bold leading-tight mb-1 ${isDark ? 'text-white' : 'text-brand-black'}`}>
                  {acc.name}
                </h3>
                <p className="text-brand-red text-[9px] font-bold uppercase tracking-wider mb-2">
                  {acc.title}
                </p>
                <p className={`text-[9px] leading-relaxed line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {acc.desc}
                </p>
                
                {/* Subtle accent hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-red group-hover:w-1/2 transition-all duration-300 rounded-t-full" />
              </div>
            );

            return acc.link ? (
              <a 
                key={acc.id} 
                href={acc.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div key={acc.id} className="h-full">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
