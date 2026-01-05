
import React, { useEffect } from 'react';

const Media = () => {
  const tiktokVideos = [
    { url: 'https://www.tiktok.com/@m.naeem149/video/7531400044914724114', id: '7531400044914724114' },
    { url: 'https://www.tiktok.com/@its.awais.186/video/7559235051846749462', id: '7559235051846749462' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
  ];

  useEffect(() => {
    // Reload TikTok embeds if they don't render correctly on hydration
    // Cast window to any to avoid TypeScript errors for 'twttr' which is typically provided by an external script
    const win = window as any;
    if (win.twttr) {
      win.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="pb-24">
       <section className="bg-slate-50 py-24 text-center">
        <h1 className="text-5xl font-black mb-4 text-slate-900">Media Highlights</h1>
        <p className="text-slate-600 max-w-lg mx-auto font-light px-4">
          Experience the world through our lens. Real moments from our travelers and official updates.
        </p>
      </section>

      {/* TikTok Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-3 text-slate-900">
          <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-bold tracking-widest">TIKTOK</span>
          Our Social Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {tiktokVideos.map((video) => (
            <div key={video.id} className="w-full max-w-[325px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white ring-1 ring-slate-100">
               <blockquote 
                className="tiktok-embed" 
                cite={video.url} 
                data-video-id={video.id} 
                style={{ maxWidth: '605px', minWidth: '325px' }}
              >
                <section>
                  <a target="_blank" title={`video-${video.id}`} href={video.url}>Loading Video...</a>
                </section>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-12 text-slate-900">Curated Destinations</h2>
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <img 
                src={src} 
                alt={`Travel ${idx}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
