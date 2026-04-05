import React, { useState } from 'react';
import { Camera, MapPin, Upload, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function ReportIssue() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="relative flex-1 h-screen flex items-center justify-center bg-[#050505] text-white p-8 pl-[300px] md:pl-[320px] overflow-hidden">
        {/* Ambient Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative z-10 max-w-md w-full bg-white/[0.02] backdrop-blur-[50px] saturate-[1.5] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.4)] rounded-[32px] p-8 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
            >
              <AlertTriangle size={40} />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Issue Reported!</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">Thank you for being an Eco Warden. The municipal authority has been notified. You will receive 50 Leaves once resolved.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="w-full py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white rounded-2xl font-medium transition-colors shadow-inner"
            >
              Report Another Issue
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex-1 h-screen overflow-y-auto bg-[#050505] text-white p-8 md:p-12 pl-[300px] md:pl-[320px]">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold mb-3 tracking-tight">Report Civic Issue</h2>
          <p className="text-zinc-400 text-lg">Help authorities identify and resolve environmental hazards in your community.</p>
        </motion.header>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div className="relative bg-white/[0.02] backdrop-blur-[50px] saturate-[1.5] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.4)] rounded-[32px] p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Category */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Issue Category</label>
                <div className="relative">
                  <select className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/40 transition-all appearance-none shadow-inner cursor-pointer">
                    <option className="bg-zinc-900">Water Leakage (SDG 6)</option>
                    <option className="bg-zinc-900">Illegal Dumping (SDG 11)</option>
                    <option className="bg-zinc-900">Polluted Water Body (SDG 6)</option>
                    <option className="bg-zinc-900">Damaged Green Infrastructure (SDG 13)</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    ▼
                  </div>
                </div>
              </motion.div>

              {/* Photo Upload */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Evidence (Photo/Video)</label>
                <div className="border-2 border-dashed border-white/10 rounded-[28px] p-10 text-center hover:bg-white/[0.02] hover:border-white/20 transition-all cursor-pointer group bg-black/10 shadow-inner">
                  <div className="w-16 h-16 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shadow-sm">
                    <Camera size={24} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-zinc-200 font-medium mb-1">Tap to capture or upload</p>
                  <p className="text-xs text-zinc-500">AI will automatically analyze the image for categorization.</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Location</label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <MapPin size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500" />
                    <input 
                      type="text" 
                      placeholder="Fetching GPS coordinates..." 
                      className="w-full bg-black/20 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/40 transition-all shadow-inner"
                      defaultValue="40.7128° N, 74.0060° W"
                    />
                  </div>
                  <button type="button" className="px-6 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-2xl text-sm font-medium transition-colors shadow-inner">
                    Update
                  </button>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Additional Details</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the severity of the issue..."
                  className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/40 transition-all resize-none shadow-inner"
                ></textarea>
              </motion.div>
            </div>
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-[24px] font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            {isSubmitting ? 'Submitting to Authorities...' : (
              <>
                <Upload size={22} />
                Submit Report
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
