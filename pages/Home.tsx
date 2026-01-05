
import React from 'react';
import Hero from '../components/Hero';
import TravelPlannerAI from '../components/TravelPlannerAI';
import { DESTINATIONS, TESTIMONIALS } from '../constants';
import { Star, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Your Premier Travel Partner in Lodhran</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            With a perfect 5.0 rating, World Wave International Travel and Tours is dedicated to crafting personalized experiences that turn your travel dreams into reality. From luxury cruises to adventurous mountain treks, we bring the world to your doorstep.
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-black mb-4">Handpicked Destinations</h2>
            <p className="text-slate-600 max-w-lg">
              Explore our most popular and curated travel spots for the upcoming season.
            </p>
          </div>
          <Link to="/services" className="text-blue-600 font-bold flex items-center space-x-1 hover:translate-x-1 transition-transform">
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-3xl h-[450px] shadow-lg">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-900/40 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">
                  {dest.category}
                </span>
                <h3 className="text-3xl font-bold mb-1">{dest.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{dest.country}</p>
                <Link to="/contact" className="text-white text-xs font-bold py-2 px-4 border border-white/30 rounded-lg hover:bg-white hover:text-slate-900 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & AI Section */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-black leading-tight text-slate-900">Why Travelers Trust Us</h2>
                <p className="text-slate-600 text-lg">
                  We blend local expertise with global standards to ensure every trip is a masterpiece.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: 'Licensed & Secure', desc: 'Regulated agency ensuring your funds and safety.' },
                  { icon: <Award className="w-8 h-8 text-blue-600" />, title: '5-Star Excellence', desc: 'Proudly serving Lodhran with top-rated consulting.' },
                  { icon: <Clock className="w-8 h-8 text-blue-600" />, title: '24/7 Support', desc: 'Real-time assistance during your travels.' },
                  { icon: <Star className="w-8 h-8 text-blue-600" />, title: 'Elite Access', desc: 'Premium bookings for flights and 5-star hotels.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col space-y-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    {item.icon}
                    <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <TravelPlannerAI />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-slate-900">Happy Travelers</h2>
          <p className="text-slate-600">Don't just take our word for it—listen to our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed flex-grow">"{t.content}"</p>
              <div className="flex items-center space-x-4 border-t border-slate-50 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
