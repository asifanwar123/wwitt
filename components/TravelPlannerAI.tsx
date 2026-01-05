
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Sparkles, Loader2, PlaneTakeoff } from 'lucide-react';

const TravelPlannerAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePlan = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);

    try {
      // Use process.env.API_KEY directly for initialization as per @google/genai guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a world-class travel consultant from World Wave International Travel and Tours Lodhran. Suggest an exciting and professional itinerary or travel advice for: ${query}. Use bullet points for the itinerary. Mention that we handle all the bookings and visa assistance.`,
        config: {
          systemInstruction: "You are the head consultant at World Wave International Travel and Tours. Be helpful, enthusiastic, and professional.",
        },
      });
      // The text property is a getter, not a method
      setResponse(result.text || 'Sorry, I could not generate a plan right now.');
    } catch (err) {
      setResponse("Our AI consultant is currently busy booking flights! Please contact our team directly for immediate assistance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <PlaneTakeoff className="w-48 h-48 rotate-12" />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6 text-blue-300" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">AI Trip Planner</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Plan Your Next Escape</h2>
        <p className="text-blue-100 mb-8 font-light">
          Describe your dream trip, and our AI consultant will draft a professional itinerary for you instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. 7 days luxury tour to Baku"
            className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handlePlan()}
          />
          <button
            onClick={handlePlan}
            disabled={loading}
            className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            <span>{loading ? 'Consulting...' : 'Get Plan'}</span>
          </button>
        </div>

        {response && (
          <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-4">
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-blue-50 leading-relaxed whitespace-pre-wrap">{response}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-tighter text-blue-300">Powered by Gemini AI</span>
              <button 
                onClick={() => setResponse(null)}
                className="text-xs text-blue-200 hover:text-white underline"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelPlannerAI;
