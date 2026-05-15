import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  MapPin, Phone, Mail, Send, CheckCircle, ShieldCheck,
  Building2, Globe
} from 'lucide-react';
import { services } from '@/data/services';

function HeroSection() {
  return (
    <section className="relative pt-44 pb-32 bg-brand-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red opacity-15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900 opacity-20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-red text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in-up backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          Enterprise Support
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Let's Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Future</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
          Connect with our verification experts. Whether you need a custom enterprise solution or have questions about our services, we're here to help.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '', service: '', message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Indian phone number validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', companyName: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { ref, isRevealed } = useScrollReveal();

  return (
    <section id="contact-form" className="py-24 relative z-20 -mt-20 bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Form */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-brand-black mb-3">Request a Consultation</h2>
                <p className="text-gray-500">Fill out the form below and our compliance team will contact you within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
                  <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-green-100 animate-ping opacity-20" />
                    <CheckCircle size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-black mb-4">Request Received!</h3>
                  <p className="text-lg text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out to Integrity Check Services. An expert will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name <span className="text-brand-red">*</span></label>
                      <input 
                        type="text" name="fullName" value={formData.fullName} onChange={handleChange} required 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Company Name <span className="text-brand-red">*</span></label>
                      <input 
                        type="text" name="companyName" value={formData.companyName} onChange={handleChange} required 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Work Email <span className="text-brand-red">*</span></label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium" 
                        placeholder="john@company.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number <span className="text-brand-red">*</span></label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
                        maxLength={10} minLength={10} pattern="[0-9]{10}"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium" 
                        placeholder="10-digit mobile number" 
                        title="Please enter exactly 10 digits"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Required <span className="text-brand-red">*</span></label>
                    <div className="relative">
                      <select 
                        name="service" value={formData.service} onChange={handleChange} required 
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your primary requirement</option>
                        <optgroup label="Comprehensive Packages">
                          <option value="pkg-standard">Standard Screening Package</option>
                          <option value="pkg-professional">Professional Screening Package</option>
                          <option value="pkg-executive">Executive Screening Package</option>
                        </optgroup>
                        <optgroup label="Specific Services">
                          {services.slice(0, 8).map(service => (
                            <option key={service.id} value={service.id}>{service.title}</option>
                          ))}
                        </optgroup>
                        <option value="custom">Custom Enterprise Solution</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">How can we help?</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} rows={4} 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-black font-medium resize-none" 
                      placeholder="Tell us about your verification volume, specific compliance needs, or any other requirements..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 px-8 bg-brand-red text-white font-extrabold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_10px_20px_rgba(204,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(204,0,0,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                  >
                    Submit Request
                    <Send size={20} />
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Your information is secure and encrypted. We never share your data.
                  </p>
                </form>
              )}
            </div>

            {/* Right Side: Info Panel */}
            <div className="lg:w-2/5 bg-gradient-to-br from-brand-black to-gray-900 p-10 md:p-14 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm font-medium mb-1 uppercase tracking-wider">Call Us Directly</div>
                      <a href="tel:+919350283562" className="text-xl font-bold hover:text-brand-red transition-colors block">+91-9350283562</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300">
                      <Mail size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm font-medium mb-1 uppercase tracking-wider">Email Support</div>
                      <a href="mailto:info@integritycheckservices.com" className="text-lg font-bold hover:text-brand-red transition-colors block break-all">info@integritycheckservices.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm font-medium mb-1 uppercase tracking-wider">Headquarters</div>
                      <address className="text-white font-medium not-italic leading-relaxed">
                        D-9, Ground Floor, Sector-3,<br />
                        Noida, Gautambuddha Nagar,<br />
                        Uttar Pradesh - 201301
                      </address>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-10 border-t border-white/10">
                  <h4 className="text-white/50 text-sm font-medium mb-6 uppercase tracking-wider">Why Choose Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <ShieldCheck size={20} className="text-brand-red shrink-0" />
                      <span className="font-medium">100% Data Security & Privacy</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Globe size={20} className="text-brand-red shrink-0" />
                      <span className="font-medium">Pan-India & Global Coverage</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Building2 size={20} className="text-brand-red shrink-0" />
                      <span className="font-medium">Trusted by 500+ Enterprises</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <section className="pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
            <div className="rounded-2xl overflow-hidden h-[450px] relative bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.3910!3d28.5986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%203%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location"
              />
              {/* Optional: Overlay gradient for premium feel */}
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ContactForm />
      <MapSection />
    </div>
  );
}
