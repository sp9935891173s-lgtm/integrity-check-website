import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const ourSolutions = [
  { path: '/services', label: 'Criminal Background Check' },
  { path: '/services', label: 'Employment Verification' },
  { path: '/services', label: 'Education Verification' },
  { path: '/services', label: 'Address Verification' },
  { path: '/services', label: 'Identity Verification' },
  { path: '/services', label: 'Drug & Alcohol Testing' },
];

const resources = [
  { path: '/', label: 'Blog' },
  { path: '/', label: 'Case Studies' },
  { path: '/', label: 'Product Updates' },
  { path: '/', label: 'Help Center' },
  { path: '/compliance', label: 'Compliance' },
  { path: '/contact', label: 'Contact Us' },
];

const screeningPackages = [
  { path: '/services', label: 'Basic Screening' },
  { path: '/services', label: 'Standard Screening' },
  { path: '/services', label: 'Advanced Screening' },
  { path: '/services', label: 'Executive Screening' },
  { path: '/services', label: 'High Risk Screening' },
  { path: '/services', label: 'Vendor Screening' },
];

const industries = [
  { path: '/industries', label: 'HR & Staffing' },
  { path: '/industries', label: 'IT & Technology' },
  { path: '/industries', label: 'Banking & Finance' },
  { path: '/industries', label: 'Healthcare' },
  { path: '/industries', label: 'Real Estate' },
  { path: '/industries', label: 'Logistics' },
];




export default function Footer() {
  return (
    <footer style={{ background: '#0d1117' }} className="text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + About */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="block">
              <img src="/logo.png" alt="Integrity Check Services" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted background screening and verification services company. Helping businesses hire smarter since 2024.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-white text-sm font-bold mb-2 uppercase tracking-wider">Powered by</p>
              <a href="https://www.complygate.co.uk/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/logo2.png"
                  alt="ComplyGate"
                  className="h-14 w-auto rounded-md p-2"
                  style={{ background: 'rgba(255,255,255,0.95)' }}
                />
              </a>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Our Solutions</h4>
            <ul className="space-y-3">
              {ourSolutions.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-brand-red text-xs">›</span>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-brand-red text-xs">›</span>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Screening Packages */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Screening Packages</h4>
            <ul className="space-y-3">
              {screeningPackages.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-brand-red text-xs">›</span>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">Industries We Serve</h4>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-brand-red text-xs">›</span>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
            <a href="tel:+919350283562" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-brand-red" />
              +91-9350283562
            </a>
            <a href="mailto:info@integritycheckservices.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-brand-red" />
              info@integritycheckservices.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-red" />
              D-9, Ground Floor, Sector-3, Noida, UP - 201301
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            
            </span>
          </div>
        </div>
      </div>

      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-sm">
          © 2026 Integrity Check Services Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>

    </footer>
  );
}