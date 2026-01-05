
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CURRENCIES } from '../constants';
import { 
  Calculator, ArrowRightLeft, TrendingUp, 
  Info, Sparkles, Loader2, CreditCard, Wallet 
} from 'lucide-react';

const Tools = () => {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [conversionResult, setConversionResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [insightLoading, setInsightLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `What is the current approximate exchange rate from ${fromCurrency} to ${toCurrency}? Just return a number representing how much 1 ${fromCurrency} is in ${toCurrency}. If you can't be precise, provide a very close estimate based on 2024/2025 trends.`,
      });
      
      const rateStr = response.text?.match(/\d+(\.\d+)?/)?.[0];
      if (rateStr) {
        const rate = parseFloat(rateStr);
        setConversionResult(parseFloat(amount) * rate);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getTravelInsight = async () => {
    setInsightLoading(true);
    setInsight(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am traveling from a region using ${fromCurrency} to a region using ${toCurrency}. Give me 3 bullet points of practical financial advice for a traveler. Should I carry cash? Are cards widely accepted? Any tip about ATMs or local exchange offices? Keep it concise and professional.`,
      });
      setInsight(response.text || "No insights available at the moment.");
    } catch (err) {
      setInsight("Our financial consultant is currently unavailable. Generally, carrying some local cash for small purchases is recommended.");
    } finally {
      setInsightLoading(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl"></div>
        <div className="relative z-10 px-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-500/30">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Traveler Utilities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Smart Travel Tools</h1>
          <p className="text-slate-400 max-w-xl mx-auto font-light text-lg">
            Plan your spending with our AI-powered currency converter and destination-specific financial guides.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Converter Card */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-slate-50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900">Currency Converter</h2>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-3xl font-bold p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="0.00"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">From</label>
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 font-bold"
                  >
                    {CURRENCIES.map(c => (
                      <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center md:pt-6">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 hidden md:block">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">To</label>
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 font-bold"
                  >
                    {CURRENCIES.map(c => (
                      <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                onClick={handleConvert}
                disabled={loading}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <span>Calculate Rate</span>}
              </button>

              {conversionResult !== null && !loading && (
                <div className="mt-8 p-8 bg-blue-50 rounded-[2rem] border border-blue-100 text-center animate-in fade-in zoom-in-95 duration-300">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Estimated Result</p>
                  <h3 className="text-4xl md:text-5xl font-black text-blue-900">
                    {conversionResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
                  </h3>
                  <p className="text-blue-500 mt-4 text-xs">Rates provided by AI for informational purposes only.</p>
                </div>
              )}
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-blue-200" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-100">AI Travel Advisor</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Traveler's Insight</h3>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                  Get specific advice on spending in {toCurrency} zones.
                </p>
                
                <button 
                  onClick={getTravelInsight}
                  disabled={insightLoading}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2"
                >
                  {insightLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Info className="w-4 h-4" />}
                  <span>Get Local Tips</span>
                </button>

                {insight && (
                  <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/10 text-xs leading-relaxed animate-in slide-in-from-bottom-4">
                    <div className="prose prose-invert prose-xs">
                      {insight.split('\n').map((line, i) => (
                        <p key={i} className="mb-2 last:mb-0">{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Wallet className="w-40 h-40" />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                Quick Tip
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Most international airports have higher exchange fees. We recommend using central city exchange offices or local bank ATMs for better rates.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Pairs */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h3 className="text-2xl font-black text-slate-900 mb-8">Popular Travel Pairs</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { pair: 'PKR → AED', tag: 'Dubai / UAE' },
            { pair: 'PKR → SAR', tag: 'Saudi / Umrah' },
            { pair: 'PKR → TRY', tag: 'Turkey' },
            { pair: 'PKR → USD', tag: 'Global' }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setFromCurrency('PKR');
                setToCurrency(item.pair.split(' → ')[1]);
              }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-left"
            >
              <p className="font-bold text-slate-900">{item.pair}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.tag}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tools;
