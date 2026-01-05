
import React from 'react';
import { 
  Phone, Mail, MapPin, 
  Send, MessageCircle, Instagram 
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received! Our travel specialist will call you shortly.");
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Let's Connect</h1>
        <p className="text-slate-400 max-w-xl mx-auto px-4 font-light text-lg">
          We're here to turn your travel plans into reality. Reach out via any of the channels below.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Direct Lines</h4>
                  <div className="flex flex-col space-y-1 font-semibold text-slate-600 text-sm">
                    {CONTACT_INFO.phones.map(p => <span key={p}>{p}</span>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                  <p className="text-slate-600 font-semibold text-sm break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-[2rem] shadow-xl border border-green-100 group transition-all hover:bg-green-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-2xl shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-green-900 mb-1">Fast Response</h4>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-bold hover:underline flex items-center gap-1"
                  >
                    Chat on WhatsApp <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener" className="p-3 bg-white rounded-xl shadow-sm hover:text-blue-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener" className="p-3 bg-white rounded-xl shadow-sm hover:text-blue-600 transition-colors">
                  <span className="font-black">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-50">
            <h2 className="text-3xl font-black mb-8 text-slate-900">Plan Your Journey</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Contact Number</label>
                  <input required type="tel" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="+92 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Needed</label>
                <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-600">
                  <option>Visa Consulting</option>
                  <option>International Tour Package</option>
                  <option>Domestic (Pakistan) Tour</option>
                  <option>Ticket Reservation</option>
                  <option>Hotel Booking</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Requirements</label>
                <textarea required rows={4} className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Tell us about your destination and preferences..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-xl transition-all active:scale-95">
                <span>Request Quotation</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-white rounded-[3rem] p-4 shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex items-center gap-2 mb-6 p-4">
            <MapPin className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl font-bold">Find Us in Lodhran</h3>
          </div>
          <div className="h-[450px] w-full rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110906.58284534735!2d71.55403067664402!3d29.53589410317544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9560a6723223%3A0xc493f0b986872583!2sSaad%20Plaza%2C%20Lodhran%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715694300000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
