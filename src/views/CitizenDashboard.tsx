import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import { Droplets, Wind, Recycle, Activity, ArrowUpRight, Leaf, Plus } from 'lucide-react';
import { LogActionModal } from '../components/LogActionModal';

const impactData = [
  { name: 'Mon', carbon: 12 },
  { name: 'Tue', carbon: 19 },
  { name: 'Wed', carbon: 15 },
  { name: 'Thu', carbon: 28 },
  { name: 'Fri', carbon: 24 },
  { name: 'Sat', carbon: 35 },
  { name: 'Sun', carbon: 42 },
];

const initialActions = [
  { id: 1, title: 'Reported Water Leak', time: '2h ago', points: '+50', type: 'report' },
  { id: 2, title: 'Transit Trailblazer', time: 'Yesterday', points: '+250', type: 'challenge' },
  { id: 3, title: 'Community Cleanup', time: 'Oct 12', points: '+300', type: 'event' },
  { id: 4, title: 'Zero Waste Groceries', time: 'Oct 10', points: '+100', type: 'lifestyle' },
];

export function CitizenDashboard() {
  const [isLoggingAction, setIsLoggingAction] = useState(false);
  const [recentActions, setRecentActions] = useState(initialActions);

  const handleLogAction = (title: string, points: number) => {
    const newAction = {
      id: Date.now(),
      title,
      time: 'Just now',
      points: `+${points}`,
      type: 'user-logged'
    };
    setRecentActions(prev => [newAction, ...prev].slice(0, 5)); // Keep top 5
  };

  return (
    <div className="relative flex-1 h-screen overflow-y-auto bg-[#050505] text-zinc-50 selection:bg-emerald-500/30">
      {/* Ambient Background (Static to prevent lag) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-8 md:p-12 pl-[300px] md:pl-[320px]">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2 flex items-center gap-2">
              <Activity size={16} /> Live Impact Sync
            </h2>
            <h1 className="text-5xl md:text-6xl font-light tracking-tighter">
              Your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ecosystem</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] rounded-full py-2 px-6 backdrop-blur-md">
              <span className="text-sm text-zinc-400">Global Rank</span>
              <span className="text-lg font-bold text-white">Top 12%</span>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <ArrowUpRight size={16} /> +4%
              </span>
            </div>
            <button 
              onClick={() => setIsLoggingAction(true)}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <Plus size={20} />
              Log Impact
            </button>
          </div>
        </motion.header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Carbon Card (Spans 8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-8 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 relative overflow-hidden backdrop-blur-2xl group hover:bg-white/[0.04] transition-colors duration-500 min-h-[360px] flex flex-col"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">Carbon Offset</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-7xl md:text-8xl font-black tracking-tighter text-white">142</h3>
                  <span className="text-2xl text-zinc-500 font-light">kg</span>
                </div>
                <p className="text-emerald-400 text-sm font-medium mt-2 flex items-center gap-2">
                  <Leaf size={16} /> Equivalent to planting 6 trees
                </p>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400">
                <Wind size={28} />
              </div>
            </div>

            {/* Integrated Chart */}
            <div className="absolute bottom-0 left-0 right-0 h-3/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    cursor={{ stroke: '#ffffff20', strokeWidth: 1, strokeDasharray: '4 4' }}
                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid #ffffff10', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                  />
                  <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
                  <Area 
                    type="monotone" 
                    dataKey="carbon" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    fill="url(#colorCarbon)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Activity Timeline (Spans 4 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:row-span-2 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-medium">Action Log</h3>
              <button className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">View All</button>
            </div>
            
            <div className="flex-1 relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent"></div>
              
              <div className="space-y-8 relative z-10">
                {recentActions.map((action, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    key={action.id} 
                    className="flex gap-6 group"
                  >
                    <div className="relative mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#050505] border-2 border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 scale-0 group-hover:scale-100 transition-transform"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">{action.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{action.time}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                        {action.points}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Water Conserved (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 backdrop-blur-2xl hover:bg-white/[0.04] transition-colors duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                <Droplets size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Water</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-black tracking-tighter text-white">850</h3>
                <span className="text-lg text-zinc-500 font-light">Liters</span>
              </div>
              <p className="text-cyan-400 text-sm font-medium mt-2">+12% vs last month</p>
            </div>
          </motion.div>

          {/* Waste Recycled (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 backdrop-blur-2xl hover:bg-white/[0.04] transition-colors duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform duration-500">
                <Recycle size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Waste</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-black tracking-tighter text-white">24</h3>
                <span className="text-lg text-zinc-500 font-light">kg</span>
              </div>
              <p className="text-teal-400 text-sm font-medium mt-2">3 active streaks</p>
            </div>
          </motion.div>

        </div>
      </div>

      <LogActionModal 
        isOpen={isLoggingAction} 
        onClose={() => setIsLoggingAction(false)} 
        onLogAction={handleLogAction}
      />
    </div>
  );
}
