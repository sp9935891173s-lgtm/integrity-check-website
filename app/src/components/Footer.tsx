import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
  { path: '/compliance', label: 'Compliance' },
];

const serviceLinks = [
  { path: '/services', label: 'Criminal Background Check' },
  { path: '/services', label: 'Employment Verification' },
  { path: '/services', label: 'Education Verification' },
  { path: '/services', label: 'Address Verification' },
  { path: '/services', label: 'Drug Testing' },
  { path: '/services', label: 'Reference Check' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="block">
            <p className="text-white text-2xl font-bold">Powered by</p>
              <a href="https://www.complygate.co.uk/" target="_blank" rel="noopener noreferrer">
  <img src="/logo2.png" alt="ComplyGate" className="h-18 w-auto" />
</a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              United Kingdom's trusted background screening and HR compliance solutions provider. Helping businesses hire smarter and stay compliant since 2018
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">D-9, Ground Floor, Sector-3, Noida, UP - 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">+91-9350283562</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">info@integritycheckservices.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Sat, 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright 2024 Integrity Check Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
