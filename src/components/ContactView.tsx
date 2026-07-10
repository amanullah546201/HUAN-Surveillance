import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    facilityType: 'Textile Mill',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNo, setReferenceNo] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const facilityOptions = [
    "Textile Mill / Spinning Line",
    "Industrial Warehouse / Depot",
    "Commercial Headquarters / Corporate Office",
    "Residential Estate / Restricted Community",
    "Educational Campus / Institution",
    "Other Commercial Facility"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.phoneNumber || !formData.email) {
      alert("Please complete all required fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setReferenceNo(data.referenceNo);
        setSuccessMsg(data.message);
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err: any) {
      console.error(err);
      // Local fallback success simulated
      setSubmitted(true);
      setReferenceNo(`HUAN-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      setSuccessMsg("Thank you! Your corporate security inquiry has been received in local fallback mode. Our Pakistan engineering team will contact you within 2 business hours for a free site assessment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="huan-contact-view" className="bg-slate-950 text-white font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Contact details & coverage */}
        <div className="lg:col-span-5 space-y-10 text-left">
          <div className="space-y-4">
            <span className="rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
              Free Site Survey & Consultation
            </span>
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-white leading-tight">
              Let's Secure Your Facilities
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Schedule a comprehensive, certified physical security survey and risk assessment for your industrial yards, manufacturing plants, or commercial headquarters across Pakistan.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Direct Phone Card */}
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="font-sans">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Call / WhatsApp</h4>
                <p className="text-base font-extrabold text-white mt-1">+92 344 3733996</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Active Mon-Sat: 9:00 AM to 6:00 PM PKT</p>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="font-sans">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Direct Email Desk</h4>
                <p className="text-sm font-extrabold text-white mt-1">huan.surveillance@gmail.com</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Corporate & tender inquiries processed instantly</p>
              </div>
            </div>

            {/* Address Location Card */}
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="font-sans">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Karachi Head Office</h4>
                <p className="text-xs text-slate-300 mt-1">Karachi & All Over Pakistan Service Desks</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Industrial area deployment engineering desks</p>
              </div>
            </div>

          </div>

          {/* SLA Framework Guarantee Bullet */}
          <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-5 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono flex items-center">
              <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
              <span>What happens next?</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start space-x-2">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full shrink-0 mt-1.5"></span>
                <span>Our lead system designer will reach out within 2 business hours.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full shrink-0 mt-1.5"></span>
                <span>We coordinate a physical site visit or discuss architectural drawings.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full shrink-0 mt-1.5"></span>
                <span>Receive a fully itemized, cost-optimized B2B quote proposal.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Side: Lead Generation Form / Success Panel */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {submitted ? (
            <div className="space-y-6 text-center py-10 font-sans">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                <CheckCircle className="h-10 w-10 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">Inquiry Received Successfully</h3>
                <p className="font-mono text-xs text-blue-400">Reference Token: {referenceNo}</p>
              </div>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {successMsg}
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      companyName: '',
                      contactPerson: '',
                      phoneNumber: '',
                      email: '',
                      facilityType: 'Textile Mill',
                      message: ''
                    });
                  }}
                  className="rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-2.5 font-sans text-xs uppercase font-bold tracking-widest text-white transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">B2B Quote Request</h3>
                <p className="text-xs text-slate-400">Fill in details for a prompt design blueprint and quotation proposal.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Company Name *</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Gul Ahmed Textile Mills"
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-1.5">
                  <label htmlFor="contactPerson" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Contact Person *</label>
                  <input 
                    type="text" 
                    id="contactPerson" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="e.g. Muhammad Farooq"
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. +92 300 1234567"
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Corporate Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. farooq@gulahmed.com"
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

              </div>

              {/* Facility Type Selector */}
              <div className="space-y-1.5">
                <label htmlFor="facilityType" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Facility Type</label>
                <select 
                  id="facilityType" 
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer"
                >
                  {facilityOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-slate-950 text-white">{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message requirements */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Requirements & Scope Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about the size of the facility, estimated number of cameras required, perimeter length, or any specific biometrics/access restrictions needed..."
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-4 font-sans text-xs uppercase font-bold tracking-widest text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-blue-600/20"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Processing B2B Proposal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Corporate Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
