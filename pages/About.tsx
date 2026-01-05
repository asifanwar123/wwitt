
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CheckCircle2, History, Target, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" alt="Adventure" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Journey</h1>
          <p className="text-slate-300 max-w-xl mx-auto px-4 font-light text-lg">
            Dedicated to bringing global travel standards to Lodhran.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <History className="w-10 h-10 text-blue-600" />, 
              title: 'Our Roots', 
              text: 'World Wave International started with a passion for discovery and a commitment to Lodhran.' 
            },
            { 
              icon: <Target className="w-10 h-10 text-blue-600" />, 
              title: 'Our Goal', 
              text: 'To simplify complex travel logistics while providing unmatched luxury and adventure.' 
            },
            { 
              icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, 
              title: 'Compliance', 
              text: `Registered and licensed by DTS Lahore (${CONTACT_INFO.license}) for your peace of mind.` 
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-50 text-center flex flex-col items-center hover:translate-y-[-5px] transition-transform">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000" alt="Travel Culture" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-[2rem] text-white shadow-2xl hidden md:block">
            <p className="text-4xl font-bold">100%</p>
            <p className="text-xs uppercase tracking-widest font-bold">Hassle-Free Booking</p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Expertise You Can Count On</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            World Wave International Travel and Tours stands as a symbol of reliability in Southern Punjab. We bridge the gap between local travelers and global destinations with integrity and flair.
          </p>
          
          <ul className="space-y-5">
            {[
              'Direct partnerships with major international airlines.',
              'Specialized visa consulting for Europe, North America, and Gulf.',
              'Customized tour packages for families and groups.',
              'Dedicated corporate travel desk for business efficiency.',
            ].map((point, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-slate-800 font-medium">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-slate-100">
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">NR</div>
                <div>
                  <p className="font-bold text-slate-900">Naeem Rasool</p>
                  <p className="text-xs text-slate-500">Managing Director</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
