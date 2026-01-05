
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-blue-600 py-32 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-black mb-6">World-Class Services</h1>
        <p className="text-blue-100 max-w-xl mx-auto px-4 font-light text-lg">
          Tailored solutions for every type of traveler. We handle the complexity, you enjoy the journey.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-slate-50 hover:shadow-2xl transition-shadow`}
            >
              <div className="flex-1 space-y-6">
                <div className="bg-blue-50 p-4 rounded-2xl w-fit">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                <div className="pt-4">
                   <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-blue-700 transition-all inline-flex shadow-lg shadow-blue-200"
                   >
                     <span>Book Consultation</span>
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
              <div className="flex-1 w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-inner bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-bold">Ready to Launch Your Next Journey?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Our travel specialists are ready to design a custom itinerary that fits your specific desires. Let's make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-blue-50 transition-colors w-full sm:w-auto shadow-xl">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
