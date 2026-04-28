import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ isModal = false }: { isModal?: boolean }) {
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

  const formContent = (
    <div className={`bg-white rounded-xl border border-gray-200 p-8 shadow-card max-w-4xl mx-auto transition-all duration-700 ${isModal ? 'opacity-100 translate-y-0' : (isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}`}>
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
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="contact-form" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
}

  );
}
