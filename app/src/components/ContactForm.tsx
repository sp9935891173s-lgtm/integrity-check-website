import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, CheckCircle, X } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { complianceAreas } from '@/data/compliance';
import { DialogClose } from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm({ isModal = false, category = "all" }: { isModal?: boolean, category?: "services" | "industries" | "compliance" | "all" }) {
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
    <div className={`relative bg-white rounded-xl border border-gray-200 p-8 shadow-card max-w-4xl mx-auto transition-all duration-700 ${isModal ? 'opacity-100 translate-y-0' : (isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}`}>
      {isModal && (
        <DialogClose className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-red transition-colors rounded-full hover:bg-gray-100">
          <X size={24} />
        </DialogClose>
      )}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-2">Get in Touch</h2>
        <p className="text-sm text-gray-500">Fill out the form below and our team will get back to you shortly.</p>
      </div>
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
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Full Name <span className="text-brand-red">*</span></label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Company Name <span className="text-brand-red">*</span></label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400" placeholder="Acme Corp" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Email Address <span className="text-brand-red">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address (e.g. name@domain.com)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Phone Number <span className="text-brand-red">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">+91</span>
                <input type="tel" name="phone" value={formData.phone} onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ''); // Only allow digits
                  if (val.length <= 10) setFormData(prev => ({ ...prev, phone: val }));
                }} required pattern="[0-9]{10}" minLength={10} maxLength={10} title="Please enter a valid 10-digit Indian phone number" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400" placeholder="9876543210" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Service Required <span className="text-brand-red">*</span></label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
              required
            >
              <SelectTrigger className="w-full px-4 py-3 h-auto bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent position="popper" className="max-h-[350px] overflow-y-auto bg-white border border-gray-100 shadow-xl rounded-lg z-[9999]">
                
                {(category === "all" || category === "services") && (
                  <SelectGroup>
                    <SelectLabel className="font-bold text-white px-4 py-2.5 bg-brand-black sticky top-0 z-10 text-[11px] uppercase tracking-widest shadow-sm flex items-center justify-between">
                      <span>Services</span>
                      <span className="w-full h-[1px] bg-white/20 ml-4"></span>
                    </SelectLabel>
                    {services.map(service => (
                      <SelectItem key={service.id} value={`service_${service.id}`} className="cursor-pointer py-2.5 px-4 text-sm hover:bg-red-50 hover:text-brand-red transition-colors pl-6">
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
                
                {(category === "all" || category === "industries") && (
                  <SelectGroup>
                    <SelectLabel className="font-bold text-white px-4 py-2.5 bg-brand-black sticky top-0 z-10 text-[11px] uppercase tracking-widest shadow-sm flex items-center justify-between mt-1">
                      <span>Industries</span>
                      <span className="w-full h-[1px] bg-white/20 ml-4"></span>
                    </SelectLabel>
                    {industries.map(industry => (
                      <SelectItem key={industry.id} value={`industry_${industry.id}`} className="cursor-pointer py-2.5 px-4 text-sm hover:bg-red-50 hover:text-brand-red transition-colors pl-6">
                        {industry.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
                
                {(category === "all" || category === "compliance") && (
                  <SelectGroup>
                    <SelectLabel className="font-bold text-white px-4 py-2.5 bg-brand-black sticky top-0 z-10 text-[11px] uppercase tracking-widest shadow-sm flex items-center justify-between mt-1">
                      <span>Compliance</span>
                      <span className="w-full h-[1px] bg-white/20 ml-4"></span>
                    </SelectLabel>
                    {complianceAreas.map(compliance => (
                      <SelectItem key={compliance.id} value={`compliance_${compliance.id}`} className="cursor-pointer py-2.5 px-4 text-sm hover:bg-red-50 hover:text-brand-red transition-colors pl-6">
                        {compliance.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}

                <SelectSeparator className="my-1 bg-gray-100" />
                <SelectItem value="custom" className="cursor-pointer py-3 px-4 text-sm font-semibold text-brand-red hover:bg-red-50">
                  Custom Package / Other Query
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm text-brand-black placeholder:text-gray-400 resize-none" placeholder="Tell us about your requirements..." />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-brand-red-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <Send size={18} />
            Submit Request
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
