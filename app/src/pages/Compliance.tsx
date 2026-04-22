import { useState } from 'react';
import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, FileCheck, Globe, ChevronDown, ArrowRight, BookOpen, Server, UserCheck,
  Building2, CreditCard, GraduationCap, Landmark, IndianRupee, FileText, Scale, Lock
} from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative pt-44 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6">
          Trust &amp; Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Legal Compliance &amp; Data Security
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          We adhere to the highest standards of Indian legal compliance and data protection to ensure every verification is conducted lawfully and securely.
        </p>
      </div>
    </section>
  );
}

function ComplianceCard({
  icon: Icon, title, desc, items, index
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  items: string[];
  index: number;
}) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref} className={`bg-white rounded-xl p-8 border border-gray-100 hover:border-brand-red transition-all duration-300 hover:shadow-card-hover scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
        <Icon size={28} className="text-brand-red" />
      </div>
      <h3 className="text-xl font-semibold text-brand-black mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <FileCheck size={16} className="text-brand-red shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComplianceGrid() {
  const areas = [
    { icon: BookOpen, title: 'IT Act 2000 & Amendment 2008', desc: 'Our verification processes fully comply with the Information Technology Act 2000 and its 2008 amendment governing digital information and data protection in India.', items: ['Information Technology Act, 2000', 'IT Amendment Act 2008', 'Cyber security regulations', 'Digital signature compliance', 'Electronic records management'] },
    { icon: Lock, title: 'DPDP Act 2023', desc: "Full compliance with India's Digital Personal Data Protection Act 2023 — ensuring candidate data privacy and security at every step of the verification process.", items: ['Lawful data processing principles', 'Purpose limitation compliance', 'Data minimization standards', 'Right to access and correction', 'Right to erasure support'] },
    { icon: Server, title: 'Data Privacy & Security', desc: 'Enterprise-grade security infrastructure ensures all candidate data is protected with multi-layered encryption as per Indian and international standards.', items: ['AES-256 encryption at rest', 'TLS 1.3 for data in transit', 'SOC 2 Type II certified', 'ISO 27001 compliant', 'Regular security audits'] },
    { icon: UserCheck, title: 'Candidate Consent Process', desc: 'We ensure complete transparency by obtaining proper written consent before initiating any background verification as mandated by DPDP Act 2023.', items: ['Digital consent forms (DPDP compliant)', 'Purpose-specific authorization', 'Right to information provided', 'Consent withdrawal option', 'Audit trail maintained'] },
    { icon: Scale, title: 'Labour Laws & Employment Acts', desc: 'Full compliance with Indian labour laws and employment regulations — including all state-specific laws applicable to background screening.', items: ['Industrial Disputes Act 1947', 'Contract Labour Act 1970', 'Indian Contract Act 1872', 'State-specific employment laws', 'Shops & Establishment Act'] },
    { icon: GraduationCap, title: 'UGC & Education Verification', desc: 'Verification conducted as per University Grants Commission guidelines — with strict protocols for fake degree detection across all Indian institutions.', items: ['UGC approved university list', 'Board of Education verification', 'AICTE certified institutions', 'Distance learning verification', 'Foreign degree equivalence check'] },
    { icon: IndianRupee, title: 'EPFO & PF Regulations', desc: 'Employee Provident Fund Organization regulations compliance — UAN and PF verification as per EPFO guidelines for accurate employment history confirmation.', items: ['EPFO database verification', 'UAN number authentication', 'PF contribution history check', 'Employer verification via EPFO', 'Employment period confirmation'] },
    { icon: CreditCard, title: 'RBI KYC & SEBI Guidelines', desc: 'Strict compliance with RBI KYC/AML guidelines and SEBI employee screening norms for financial sector and banking industry clients.', items: ['RBI KYC/AML Guidelines', 'SEBI Employee Screening Norms', 'IRDAI compliance for insurance', 'AMFI guidelines for mutual funds', 'Banking sector specific checks'] },
    { icon: Building2, title: 'MCA21 / ROC Database', desc: 'Ministry of Corporate Affairs MCA21 portal and Registrar of Companies database checks for vendor, director and company background verification.', items: ['Director Identification Number (DIN)', 'Company registration check', 'ROC filing verification', 'GST registration validation', 'Blacklisted company check'] },
    { icon: FileText, title: 'RTI Act & Public Records', desc: 'Right to Information Act 2005 based access to public records — government database checks and court record verification across India.', items: ['RTI Act 2005 compliance', 'Public court records access', 'Police verification records', 'Government database checks', 'Electoral roll verification'] },
    { icon: Landmark, title: 'FCRA Compliance', desc: 'Foreign Contribution Regulation Act compliance for international background checks and overseas candidate verification across 150+ countries.', items: ['FCRA registration verification', 'International screening protocols', 'Cross-border data transfer rules', 'Overseas employment verification', '150+ countries coverage'] },
    { icon: Globe, title: 'GDPR & International Standards', desc: 'For international clients and overseas candidates, we fully comply with GDPR and global data protection standards alongside all applicable Indian laws.', items: ['GDPR Article 6 lawful basis', 'Data subject rights management', 'Cross-border transfer protocols', 'Standard Contractual Clauses', 'DPO coordination available'] },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-red text-sm font-semibold rounded-full mb-4">Our Commitment</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Built on Trust &amp; Compliance</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Every verification we conduct follows strict Indian legal protocols and industry best practices.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, i) => (<ComplianceCard key={i} {...area} index={i} />))}
        </div>
      </div>
    </section>
  );
}

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
            <div key={i} className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-brand-black pr-4">{faq.q}</span>
                <ChevronDown size={20} className={`text-brand-red shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
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

function CTASection() {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-brand-black">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Shield size={48} className="text-brand-red mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ensure Compliance with Every Hire</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Partner with us to maintain the highest standards of Indian legal compliance in your hiring process.</p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg">
          Schedule a Consultation
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default function Compliance() {
  return (
    <>
      <HeroSection />
      <ComplianceGrid />
      <FAQSection />
      <CTASection />
    </>
  );
}