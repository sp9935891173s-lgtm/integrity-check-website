import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle
} from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative pt-44 pb-20 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 magnify-pattern" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Ready to start background verification? Reach out to our team for a free consultation and demo.
        </p>
      </div>
    </section>
  );
}

function ContactForm(): import("react/jsx-runtime").JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '', service: '', message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', companyName: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className={`lg:col-span-3 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-card">
              <h2 className="text-2xl font-bold text-brand-black mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-2">Thank You!</h3>
                  <p className="text-gray-500">We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">Company Name *</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-black mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm" placeholder="+91-XXXXXXXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">Service Required *</label>
                    <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm bg-white">
                      <option value="">Select a service</option>
                      <option value="criminal">Criminal Background Check</option>
                      <option value="employment">Employment Verification</option>
                      <option value="education">Education Verification</option>
                      <option value="address">Address Verification</option>
                      <option value="drug">Drug Testing</option>
                      <option value="reference">Reference Check</option>
                      <option value="credit">Credit History Check</option>
                      <option value="identity">Identity Verification</option>
                      <option value="global">Global / International Screening</option>
                      <option value="license">Professional License Verification</option>
                      <option value="social">Social Media Check</option>
                      <option value="database">Database &amp; Watchlist Check</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all text-sm resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg">
                    <Send size={18} />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className={`lg:col-span-2 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <div className="bg-brand-black rounded-xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><MapPin size={20} className="text-brand-red" /></div>
                  <div><div className="font-medium mb-1">Address</div><div className="text-gray-400 text-sm"> D-9, Ground Floor, Sector-3, Noida, Gautambuddha Nagar, Uttar Pradesh - 201301</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Phone size={20} className="text-brand-red" /></div>
                  <div><div className="font-medium mb-1">Phone</div><div className="text-gray-400 text-sm">+91-9350283562</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Mail size={20} className="text-brand-red" /></div>
                  <div><div className="font-medium mb-1">Email</div><div className="text-gray-400 text-sm">info@integritycheckservices.com</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Clock size={20} className="text-brand-red" /></div>
                  <div><div className="font-medium mb-1">Working Hours</div><div className="text-gray-400 text-sm">Monday - Saturday<br />9:00 AM - 6:00 PM IST</div></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Need urgent assistance?</p>
                <a href="tel:+91-XXXXXXXXXX" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 text-sm">
                  <Phone size={16} />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden border border-gray-200 h-[400px] bg-gray-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.3910!3d28.5986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%203%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location"
          />
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <MapSection />
    </>
  );
}
