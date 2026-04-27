import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Globe, ChevronDown, ArrowRight, BookOpen, Server, UserCheck,
  Building2, CreditCard, GraduationCap, Landmark, IndianRupee, FileText, Scale, Lock,
  X, CheckCircle
} from 'lucide-react';

const complianceCategories = ['All', 'Data Privacy', 'Employment', 'Finance', 'Education', 'International'];

const areas = [
  {
    icon: BookOpen,
    title: 'IT Act 2000 & Amendment 2008',
    category: 'Data Privacy',
    badge: 'Data Privacy',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Our verification processes fully comply with the Information Technology Act 2000 and its 2008 amendment governing digital information and data protection in India.',
    fullDesc: 'Information Technology Act 2000 India ka primary cyber law hai jo digital information, electronic records aur cyber crimes ko regulate karta hai. Hamari verification services is act ke sabhi provisions ke according operate karti hain, ensuring lawful digital data processing aur secure electronic communication.',
    items: ['Information Technology Act, 2000', 'IT Amendment Act 2008', 'Cyber security regulations', 'Digital signature compliance', 'Electronic records management'],
    keyPoints: ['Section 43A — Data protection for sensitive personal information', 'Section 72A — Punishment for disclosure of information in breach of lawful contract', 'Section 66 — Computer related offences prevention', 'IT (Intermediary Guidelines) Rules 2021 compliance', 'CERT-In incident reporting adherence'],
    authority: 'Ministry of Electronics & IT',
    year: '2000 (Amended 2008)',
  },
  {
    icon: Lock,
    title: 'DPDP Act 2023',
    category: 'Data Privacy',
    badge: 'Data Privacy',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: "Full compliance with India's Digital Personal Data Protection Act 2023 — ensuring candidate data privacy and security at every step.",
    fullDesc: "DPDP Act 2023 India ka naya landmark data protection law hai jo candidate ke personal data ko protect karta hai. Hamari verification process mein har step par DPDP Act ke provisions follow kiye jaate hain — consent lena, data minimize karna, aur candidate ke rights protect karna.",
    items: ['Lawful data processing principles', 'Purpose limitation compliance', 'Data minimization standards', 'Right to access and correction', 'Right to erasure support'],
    keyPoints: ['Explicit written consent mandatory before verification', 'Right to Access personal data anytime', 'Right to Correction of inaccurate data', 'Right to Erasure upon request', 'Data Fiduciary obligations fully met', 'Grievance redressal mechanism in place'],
    authority: 'Ministry of Electronics & IT',
    year: '2023',
  },
  {
    icon: Server,
    title: 'Data Privacy & Security',
    category: 'Data Privacy',
    badge: 'Data Privacy',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Enterprise-grade security infrastructure ensures all candidate data is protected with multi-layered encryption as per Indian and international standards.',
    fullDesc: 'Hamari security infrastructure industry-leading standards follow karti hai. AES-256 encryption, TLS 1.3 protocols, aur SOC 2 Type II certification ensure karte hain ki candidate data hamesha safe aur secure rahe — transit mein bhi aur storage mein bhi.',
    items: ['AES-256 encryption at rest', 'TLS 1.3 for data in transit', 'SOC 2 Type II certified', 'ISO 27001 compliant', 'Regular security audits'],
    keyPoints: ['AES-256 bit encryption for all stored data', 'TLS 1.3 protocol for all data transmissions', 'SOC 2 Type II annual certification', 'ISO 27001:2022 information security management', 'Quarterly penetration testing', 'Zero-trust security architecture'],
    authority: 'CERT-In / ISO',
    year: 'Ongoing',
  },
  {
    icon: UserCheck,
    title: 'Candidate Consent Process',
    category: 'Data Privacy',
    badge: 'Data Privacy',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'We ensure complete transparency by obtaining proper written consent before initiating any background verification as mandated by DPDP Act 2023.',
    fullDesc: 'DPDP Act 2023 ke under candidate consent sabse pehla aur mandatory step hai. Hamari digital consent process transparent, candidate-friendly aur legally watertight hai. Candidate kabhi bhi consent withdraw kar sakta hai aur apna data delete karwa sakta hai.',
    items: ['Digital consent forms (DPDP compliant)', 'Purpose-specific authorization', 'Right to information provided', 'Consent withdrawal option', 'Audit trail maintained'],
    keyPoints: ['Multi-language consent forms available', 'Purpose-specific granular consent', 'Timestamp-verified digital signatures', 'Complete audit trail maintained', 'Withdrawal mechanism always active', 'Candidate portal for data access'],
    authority: 'DPDP Authority (India)',
    year: '2023',
  },
  {
    icon: Scale,
    title: 'Labour Laws & Employment Acts',
    category: 'Employment',
    badge: 'Employment',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'Full compliance with Indian labour laws and employment regulations — including all state-specific laws applicable to background screening.',
    fullDesc: 'Indian labour laws complex aur state-specific hote hain. Hamari team har state ke employment laws, Industrial Disputes Act, Contract Labour Act aur Shops & Establishment Act ke according verification conduct karti hai, ensuring employer legally protected rahe.',
    items: ['Industrial Disputes Act 1947', 'Contract Labour Act 1970', 'Indian Contract Act 1872', 'State-specific employment laws', 'Shops & Establishment Act'],
    keyPoints: ['Employment verification per Industrial Disputes Act', 'Contract Labour (Regulation & Abolition) Act compliance', 'Wrongful employment claim prevention', 'State-wise labour law adherence', 'Reference check legal framework', 'Termination record verification protocol'],
    authority: 'Ministry of Labour & Employment',
    year: 'Multiple Acts',
  },
  {
    icon: GraduationCap,
    title: 'UGC & Education Verification',
    category: 'Education',
    badge: 'Education',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    desc: 'Verification conducted as per University Grants Commission guidelines — with strict protocols for fake degree detection across all Indian institutions.',
    fullDesc: 'India mein degree fraud ek growing problem hai. UGC approved university list, AICTE certified institutions aur Board of Education databases se direct verification karte hain. Fake degree detection mein hamari accuracy rate 99.9% hai.',
    items: ['UGC approved university list', 'Board of Education verification', 'AICTE certified institutions', 'Distance learning verification', 'Foreign degree equivalence check'],
    keyPoints: ['UGC approved universities database access', 'Direct verification from issuing institutions', 'AICTE certification check', 'Distance education verification (IGNOU, etc.)', 'State Board verification (10th/12th)', 'Foreign degree equivalence from AIU'],
    authority: 'UGC / AICTE / AIU',
    year: 'UGC Act 1956',
  },
  {
    icon: IndianRupee,
    title: 'EPFO & PF Regulations',
    category: 'Employment',
    badge: 'Employment',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'Employee Provident Fund Organization regulations compliance — UAN and PF verification as per EPFO guidelines.',
    fullDesc: 'EPFO database se direct UAN verification aur PF contribution history check karte hain jo employment history ka most authentic proof hai. Yeh method fake employment claims detect karne mein highly effective hai aur EPFO regulations ke fully compliant hai.',
    items: ['EPFO database verification', 'UAN number authentication', 'PF contribution history check', 'Employer verification via EPFO', 'Employment period confirmation'],
    keyPoints: ['Direct EPFO database access', 'UAN-based employment history', 'PF contribution period verification', 'Employer ECR (Electronic Challan cum Return) check', 'Salary bracket estimation from PF data', 'Multiple employer history tracking'],
    authority: 'EPFO / Ministry of Labour',
    year: 'EPF Act 1952',
  },
  {
    icon: CreditCard,
    title: 'RBI KYC & SEBI Guidelines',
    category: 'Finance',
    badge: 'Finance',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Strict compliance with RBI KYC/AML guidelines and SEBI employee screening norms for financial sector clients.',
    fullDesc: 'Banking aur financial services sector mein RBI aur SEBI ke guidelines mandatory hain. Hamara financial sector verification package RBI KYC/AML guidelines, SEBI employee screening norms, IRDAI guidelines aur AMFI requirements sab cover karta hai.',
    items: ['RBI KYC/AML Guidelines', 'SEBI Employee Screening Norms', 'IRDAI compliance for insurance', 'AMFI guidelines for mutual funds', 'Banking sector specific checks'],
    keyPoints: ['RBI Master Direction on KYC compliance', 'SEBI LODR Regulation — key personnel screening', 'IRDAI agent verification requirements', 'AML (Anti-Money Laundering) screening', 'PEP (Politically Exposed Persons) check', 'CIBIL credit score verification'],
    authority: 'RBI / SEBI / IRDAI',
    year: 'Multiple Regulations',
  },
  {
    icon: Building2,
    title: 'MCA21 / ROC Database',
    category: 'Finance',
    badge: 'Finance',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Ministry of Corporate Affairs MCA21 portal and ROC database checks for vendor, director and company background verification.',
    fullDesc: 'MCA21 aur ROC database se company aur director verification karte hain — DIN check, company registration, GST validation sab ek integrated check mein. Vendor verification aur third-party due diligence ke liye yeh essential hai.',
    items: ['Director Identification Number (DIN)', 'Company registration check', 'ROC filing verification', 'GST registration validation', 'Blacklisted company check'],
    keyPoints: ['DIN (Director Identification Number) verification', 'MCA21 company database check', 'ROC filing status verification', 'GST registration aur return filing check', 'Defaulter company list screening', 'NCLT/NCLAT case history check'],
    authority: 'Ministry of Corporate Affairs',
    year: 'Companies Act 2013',
  },
  {
    icon: FileText,
    title: 'RTI Act & Public Records',
    category: 'Employment',
    badge: 'Employment',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'Right to Information Act 2005 based access to public records — government database checks and court record verification across India.',
    fullDesc: 'RTI Act 2005 ke under public records access karte hain jo government databases, court records aur police verification mein help karta hai. Electoral roll verification, court case history aur government employee records — sab RTI framework ke under legally accessible hain.',
    items: ['RTI Act 2005 compliance', 'Public court records access', 'Police verification records', 'Government database checks', 'Electoral roll verification'],
    keyPoints: ['RTI Act 2005 framework based public access', 'High Court / District Court records', 'Police Station records (where applicable)', 'Electoral Roll verification (Voter ID)', 'Land Records (for Real Estate)', 'Government servant verification'],
    authority: 'Central Information Commission',
    year: 'RTI Act 2005',
  },
  {
    icon: Landmark,
    title: 'FCRA Compliance',
    category: 'International',
    badge: 'International',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'Foreign Contribution Regulation Act compliance for international background checks and overseas candidate verification across 150+ countries.',
    fullDesc: 'FCRA compliance international clients aur overseas candidates ke liye mandatory hai. 150+ countries mein hamara global verification network ensure karta hai ki cross-border checks legally compliant aur accurate hon — FCRA regulations ke under.',
    items: ['FCRA registration verification', 'International screening protocols', 'Cross-border data transfer rules', 'Overseas employment verification', '150+ countries coverage'],
    keyPoints: ['FCRA Act 2010 compliance', 'International data transfer protocols', '150+ countries verification network', 'Overseas employment & education check', 'Interpol watchlist screening', 'Global sanctions list check'],
    authority: 'Ministry of Home Affairs',
    year: 'FCRA Act 2010',
  },
  {
    icon: Globe,
    title: 'GDPR & International Standards',
    category: 'International',
    badge: 'International',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'For international clients and overseas candidates, we fully comply with GDPR and global data protection standards alongside all applicable Indian laws.',
    fullDesc: 'International clients ke liye GDPR compliance essential hai. Hamari team GDPR Article 6 lawful basis, Standard Contractual Clauses aur data subject rights management mein expert hai. EU aur UK clients ke liye dedicated compliance pathway available hai.',
    items: ['GDPR Article 6 lawful basis', 'Data subject rights management', 'Cross-border transfer protocols', 'Standard Contractual Clauses', 'DPO coordination available'],
    keyPoints: ['GDPR Article 6 — Lawful basis for processing', 'Data Subject Access Requests handling', 'Right to Erasure (Right to be Forgotten)', 'Standard Contractual Clauses (SCCs)', 'UK GDPR compliance available', 'DPO (Data Protection Officer) available'],
    authority: 'EU Data Protection Board',
    year: 'GDPR 2018',
  },
];

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 60%, #0a1a0a 100%)' }} className="relative pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 home-hero-grid opacity-30" />
      <div className="home-orb home-orb-1" style={{ top: '10%', right: '10%' }} />
      <div className="home-orb home-orb-2" style={{ bottom: '10%', left: '5%' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
          Trust & Security
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Legal{' '}
          <span className="home-gradient-text">Compliance</span>{' '}
          & Data Security
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We adhere to the highest standards of Indian legal compliance and data protection to ensure every verification is conducted lawfully and securely.
        </p>
      </div>
    </section>
  );
}

/* ───────── Modal — React Portal ───────── */
function ComplianceModal({ area, onClose }: { area: typeof areas[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modalContent = (
    <>
      <style>{`
        @keyframes cmpModalPop {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Full screen overlay — flex center */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
        onClick={onClose}
      >
        {/* Modal box */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: '#fff',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '88vh',
            overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
            animation: 'cmpModalPop 0.18s cubic-bezier(0.34,1.4,0.64,1) both',
            position: 'relative',
          }}
        >
          {/* Dark Header */}
          <div style={{ background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 100%)', borderRadius: '20px 20px 0 0', padding: '28px' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={16} color="white" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: 'rgba(229,57,53,0.2)', border: '1px solid rgba(229,57,53,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <area.icon size={28} color="#e53935" />
              </div>
              <div>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 600,
                  padding: '3px 10px', background: 'rgba(255,255,255,0.1)',
                  color: 'white', borderRadius: '999px', marginBottom: '8px',
                }}>
                  {area.badge}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', margin: 0 }}>
                  {area.title}
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{area.authority}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px' }}>Governing Authority</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{area.year}</div>
                <div style={{ color: '#9ca3af', fontSize: '11px' }}>Effective Since</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '28px' }}>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              {area.fullDesc}
            </p>

            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '14px' }}>
              Key Compliance Points
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {area.keyPoints.map((point, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '10px 12px', background: '#f9fafb', borderRadius: '10px',
                }}>
                  <CheckCircle size={15} color="#22c55e" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ color: '#374151', fontSize: '13px' }}>{point}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '14px' }}>
              Included Checks
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {area.items.map((item, i) => (
                <span key={i} style={{
                  padding: '6px 14px', background: '#fff1f0',
                  color: '#e53935', fontSize: '12px', fontWeight: 500,
                  borderRadius: '999px', border: '1px solid #fecaca',
                }}>
                  {item}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={onClose}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', width: '100%', padding: '15px',
                background: '#e53935', color: 'white', fontWeight: 700,
                fontSize: '15px', borderRadius: '12px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(229,57,53,0.35)',
              }}
            >
              Get Compliant Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}

/* ───────── Compliance Card ───────── */
function ComplianceCard({ area, index, onClick }: { area: typeof areas[0]; index: number; onClick: () => void }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms`, transition: 'all 0.3s ease' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#e53935';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.borderColor = '#f3f4f6';
      }}
    >
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${area.badgeColor}`}>
        {area.badge}
      </span>
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
        <area.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">{area.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{area.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {area.items.slice(0, 3).map((item, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-full">{item}</span>
        ))}
        {area.items.length > 3 && (
          <span className="px-2 py-1 bg-red-50 text-brand-red text-[10px] font-medium rounded-full">+{area.items.length - 3} more</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-brand-red text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details <ArrowRight size={12} />
        </span>
        <span className="text-gray-400 text-[10px]">{area.authority}</span>
      </div>
    </div>
  );
}

/* ───────── FAQ ───────── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'Is background verification legal in India?', a: "Yes, background verification is completely legal in India when conducted with the candidate's consent. Our processes comply with the IT Act 2000, DPDP Act 2023, Indian labour laws, and Supreme Court guidelines on privacy and data protection." },
    { q: 'Is candidate consent required for background verification?', a: 'Absolutely. Under the DPDP Act 2023, explicit written consent from the candidate is mandatory before initiating any background check. Candidates also have the right to withdraw consent at any time.' },
    { q: 'How long does the verification process take?', a: 'Most standard verifications are completed within 24-48 hours. Employment and education verifications may take 3-5 business days. International checks typically require 5-10 business days.' },
    { q: 'Is candidate data stored securely?', a: 'Yes, we implement enterprise-grade security measures including AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and ISO 27001 compliant.' },
    { q: "What are the candidate's rights under DPDP Act 2023?", a: 'Candidates have the Right to Access their personal data, Right to Correction, Right to Erasure, and Right to Grievance Redressal. We fully respect and uphold all these rights.' },
    { q: 'What formats are verification reports delivered in?', a: 'Reports are delivered as secure PDF documents with tamper-evident features. We also offer API integration for direct data transfer into your HRMS or ATS systems.' },
    { q: 'Do you conduct verification for government and PSU sectors?', a: 'Yes, we conduct verifications for government, PSU, defence sector, and private companies with special protocols including RTI Act 2005 based public records access and security clearance procedures.' },
  ];
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our background verification process and compliance.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-brand-black pr-4 text-sm">{faq.q}</span>
                <ChevronDown size={18} className={`text-brand-red shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA ───────── */
function CTASection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-brand-black">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Shield size={48} className="text-brand-red mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ensure Compliance with Every Hire</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Partner with us to maintain the highest standards of Indian legal compliance in your hiring process.</p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-xl">
          Schedule a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

/* ───────── Main ───────── */
export default function Compliance() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? areas
    : areas.filter(a => a.category === activeCategory);

  return (
    <>
      <HeroSection />

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {complianceCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat ? 'bg-brand-red text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-70">({areas.filter(a => a.category === cat).length})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400 text-sm">
              Showing <span className="font-semibold text-brand-black">{filtered.length}</span> compliance frameworks
              {activeCategory !== 'All' && <> in <span className="text-brand-red font-semibold">{activeCategory}</span></>}
            </p>
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">Click any card for full details</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((area, i) => (
              <ComplianceCard
                key={area.title}
                area={area}
                index={i}
                onClick={() => setSelectedArea(area)}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />

      {selectedArea && (
        <ComplianceModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
        />
      )}
    </>
  );
}