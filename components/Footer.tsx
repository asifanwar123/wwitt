
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, Phone, Mail, MapPin, 
  Instagram, MessageCircle 
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Plane className="w-8 h-8 text-blue-500 rotate-45" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none">World Wave</span>
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">Travel & Tours</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your gateway to the world. We provide professional, personalized, and luxury travel services from the heart of Lodhran.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.socials.instagram} className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.socials.tiktok} className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <span className="font-bold text-sm">T</span>
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="p-2 bg-slate-800 rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/tools" className="hover:text-blue-400 transition-colors font-bold text-blue-400">Currency Converter</Link></li>
              <li><Link to="/media" className="hover:text-blue-400 transition-colors">Gallery & Media</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Luxury Vacations</li>
              <li>Corporate Travel</li>
              <li>Visa Assistance</li>
              <li>Ticket Bookings</li>
              <li>Adventure Tours</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <div className="flex flex-col">
                {CONTACT_INFO.phones.map(p => <span key={p}>{p}</span>)}
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="break-all">{CONTACT_INFO.email}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} World Wave International Travel & Tours. All Rights Reserved.</p>
          <p className="mt-2 text-slate-600">DTS Lahore License: {CONTACT_INFO.license}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
