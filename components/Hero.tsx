
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=2000" 
          alt="Travel Banner"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full">
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-bold tracking-tight">5.0/5 Top Rated Agency in Lodhran</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg">
            Experience the <span className="text-blue-400">World</span>, 
            One Wave at a Time.
          </h1>
          
          <p className="text-xl text-slate-200 max-w-lg leading-relaxed font-light">
            Luxury vacations, business travel, and adventure tours tailored for you by World Wave International Travel and Tours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold flex items-center justify-center transition-all active:scale-95"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
