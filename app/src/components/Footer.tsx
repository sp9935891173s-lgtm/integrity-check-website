import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const screeningLinks = [
  { path: '/services', label: 'Criminal Background Check' },
  { path: '/services', label: 'Employment Verification' },
  { path: '/services', label: 'Education Verification' },
  { path: '/services', label: 'Address Verification' },
  { path: '/services', label: 'Identity Verification' },
  { path: '/services', label: 'Drug & Alcohol Testing' },
  { path: '/services', label: 'Credit Check / CIBIL' },
  { path: '/services', label: 'Reference Check' },
  { path: '/services', label: 'Social Media Check' },
  { path: '/services', label: 'Global Screening' },
  { path: '/services', label: 'UAN / PF Verification' },
  { path: '/services', label: 'Vendor Verification' },
];

const industryLinks = [
  { path: '/industries', label: 'Healthcare' },
  { path: '/industries', label: 'IT & Technology' },
  { path: '/industries', label: 'Banking & Finance' },
  { path: '/industries', label: 'Manufacturing' },
  { path: '/industries', label: 'Retail & E-commerce' },
  { path: '/industries', label: 'Education' },
  { path: '/industries', label: 'Staffing & Recruitment' },
  { path: '/industries', label: 'Government & PSU' },
];

const informationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/compliance', label: 'Compliance' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a1628 100%)' }} className="text-white">

      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay Updated with Integrity Check</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on background verification and compliance news.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red"
              />
              <button className="px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors text-sm shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="block">
              <img src="/logo.png" alt="Integrity Check Services" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted background screening and verification services company. Helping businesses hire smarter since 2024.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors duration-200"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-white text-lg font-bold mb-3 uppercase tracking-wider">Powered by</p>
              <a href="https://www.complygate.co.uk/" target="_blank" rel="noopener noreferrer">
              <img src="/logo2.png" alt="ComplyGate" className="h-16 w-auto rounded-md p-2" style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)'}} />
              </a>
            </div>
          </div>

          {/* Screening Services */}
          <div>
            <h4 className="text-xs font-bold mb-5 text-white uppercase tracking-wider">Screening Services</h4>
            <ul className="space-y-2.5">
              {screeningLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Information */}
          <div>
            <h4 className="text-xs font-bold mb-5 text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-bold mt-8 mb-5 text-white uppercase tracking-wider">Information</h4>
            <ul className="space-y-2.5">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-xs font-bold mb-5 text-white uppercase tracking-wider">Compliance</h4>
            <ul className="space-y-2.5">
              {['IT Act 2000', 'DPDP Act 2023', 'Labour Laws', 'UGC Guidelines', 'RBI KYC Norms', 'SEBI Regulations', 'EPFO / PF Rules', 'RTI Act 2005', 'FCRA Compliance', 'GDPR Standards'].map((item) => (
                <li key={item}>
                  <Link to="/compliance" className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xs font-bold mb-5 text-white uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">D-9, Ground Floor, Sector-3, Noida, Gautambuddha Nagar, UP - 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <a href="tel:+919350283562" className="text-gray-400 text-sm hover:text-brand-red transition-colors">
                  +91-9350283562
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red shrink-0" />
                <a href="mailto:info@integritycheckservices.com" className="text-gray-400 text-sm hover:text-brand-red transition-colors">
                  info@integritycheckservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Sat, 9AM - 6PM</span>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xs font-bold mb-4 text-white uppercase tracking-wider">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['FCRA', 'ISO 27001', 'SOC 2', 'DPDP'].map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300 font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Integrity Check Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
}