import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { VideoScript, ContentCategory } from '../types.ts';
import { BookOpen, UserCheck, Sparkles, BrainCircuit, TrendingUp, Target, Layers, CheckCircle2 } from 'lucide-react';

interface DashboardProps {
  scripts: VideoScript[];
}

const Dashboard: React.FC<DashboardProps> = ({ scripts }) => {
  const completedCount = scripts.filter(s => s.completed).length;
  const completionRate = scripts.length > 0 ? Math.round((completedCount / scripts.length) * 100) : 0;

  const categoryStats = Object.values(ContentCategory)
    .filter(cat => cat !== ContentCategory.D)
    .map(cat => ({
      name: cat.split(':')[0],
      value: scripts.filter(s => s.category === cat).length,
      done: scripts.filter(s => s.category === cat && s.completed).length
    }));

  const COLORS = ['#fbbf24', '#78716c', '#6366f1'];

  return (
    <div className="max-w-screen-2xl mx-auto space-y-12 pb-32 animate-in fade-in duration-700">
      {/* Top Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          icon={<CheckCircle2 className={completionRate === 100 ? "text-green-500" : "text-amber-500"} size={24} />} 
          title="Execution Progress" 
          value={`${completionRate}% Done`} 
          subtitle={`${completedCount} of ${scripts.length} assets transmitted`}
          theme="amber"
          progress={completionRate}
        />
        <StatCard 
          icon={<UserCheck className="text-stone-300" size={24} />} 
          title="Authority Index" 
          value={`${scripts.filter(s => s.category === ContentCategory.A).length} Historical`} 
          subtitle="Leveraging Da Vinci's Legacy"
          theme="stone"
        />
        <StatCard 
          icon={<BookOpen className="text-stone-300" size={24} />} 
          title="Market Friction" 
          value={`${scripts.filter(s => s.category === ContentCategory.B).length} Disruptors`} 
          subtitle="Challenging Passive Learning"
          theme="stone"
        />
        <StatCard 
          icon={<Sparkles className="text-indigo-400" size={24} />} 
          title="Vibe Saturation" 
          value={`${scripts.filter(s => s.category === ContentCategory.C).length} Promos`} 
          subtitle="Dark Academia Aesthetic"
          theme="indigo"
        />
      </section>

      {/* Middle Grid: Charts & Strategic Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 bg-[#141414] p-10 rounded-[3rem] border border-stone-800/50 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-1000"></div>
          
          <div className="flex items-center justify-between mb-12 relative z-10">
            <div>
              <h3 className="text-2xl font-bold dark-academia-font text-stone-100 mb-1">Architecture Overview</h3>
              <p className="text-[10px] text-stone-600 font-black uppercase tracking-[0.3em]">Volume by strategic category</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
              <TrendingUp size={14} className="text-amber-500" />
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Optimized Reach</span>
            </div>
          </div>
          
          <div className="h-[400px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryStats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                <XAxis 
                  dataKey="name" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{fill: '#78716c', fontWeight: 'bold'}} 
                  dy={10}
                />
                <YAxis 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{fill: '#78716c', fontWeight: 'bold'}} 
                />
                <Tooltip 
                  cursor={{fill: '#1a1a1a'}}
                  contentStyle={{
                    backgroundColor: '#0c0c0c', 
                    borderRadius: '24px', 
                    border: '1px solid #333', 
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                    padding: '16px'
                  }}
                  itemStyle={{color: '#fbbf24', fontSize: '12px', fontWeight: 'bold'}}
                  labelStyle={{color: '#fff', marginBottom: '8px'}}
                  formatter={(value: any, name: any, props: any) => {
                    if (name === 'done') return [value, 'Completed'];
                    return [value, 'Total Planned'];
                  }}
                />
                <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={60}>
                  {categoryStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.3} />
                  ))}
                </Bar>
                <Bar dataKey="done" radius={[12, 12, 0, 0]} barSize={60}>
                  {categoryStats.map((entry, index) => (
                    <Cell key={`cell-done-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-[#1c1c1c] p-10 rounded-[3rem] border border-stone-800/50 shadow-2xl flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Target size={20} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold dark-academia-font text-white">Strategic Pillars</h3>
                <p className="text-[10px] text-stone-600 font-black uppercase tracking-widest">Growth logic v1.0</p>
              </div>
            </div>
            
            <div className="space-y-8 flex-1">
              <PillarItem num="01" title="Historical Authority" desc="Positioning Vincify as the modern codex, leveraging the Da Vinci mystique to capture intent." />
              <PillarItem num="02" title="Market Disruption" desc="Challenging passive content consumption. Positioning summaries as shallow, and Vincify as deep mastery." />
              <PillarItem num="03" title="Curiosity Arbitrage" desc="Using random curiosity gaps to open loops that only the Vincify AI tutor can close." />
            </div>

            <div className="mt-10 pt-8 border-t border-stone-800/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Layers size={18} className="text-stone-700" />
                <span className="text-[11px] font-black text-stone-500 uppercase tracking-[0.2em]">Ready for Transmission</span>
              </div>
              <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center font-bold text-amber-500">
                {scripts.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PillarItem: React.FC<{num: string, title: string, desc: string}> = ({ num, title, desc }) => (
  <div className="flex gap-6 group">
    <span className="text-3xl font-black text-stone-800 dark-academia-font group-hover:text-amber-500/30 transition-all duration-500">{num}</span>
    <div className="space-y-1">
      <p className="font-bold text-base text-stone-100 transition-colors group-hover:text-white">{title}</p>
      <p className="text-stone-500 text-[13px] leading-relaxed group-hover:text-stone-400 transition-colors">{desc}</p>
    </div>
  </div>
);

const StatCard: React.FC<{
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  subtitle: string,
  theme: 'amber' | 'stone' | 'indigo',
  progress?: number
}> = ({ icon, title, value, subtitle, theme, progress }) => {
  const themes = {
    amber: "bg-[#1f1d14] border-amber-900/50 hover:border-amber-500 shadow-[inset_0_0_40px_rgba(245,158,11,0.08)]",
    stone: "bg-[#1c1c1c] border-stone-800 hover:border-stone-500 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]",
    indigo: "bg-[#181824] border-indigo-900/50 hover:border-indigo-500 shadow-[inset_0_0_40px_rgba(99,102,241,0.08)]"
  };

  return (
    <div className={`p-8 rounded-[2.5rem] border transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)] group h-full flex flex-col ${themes[theme]}`}>
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-stone-900/50 rounded-2xl w-fit border border-stone-800/50 group-hover:scale-110 group-hover:bg-stone-900 transition-all">
          {icon}
        </div>
        {progress !== undefined && (
          <div className="w-12 h-12 rounded-full border-2 border-stone-800 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="24" cy="24" r="21" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3" 
                className="text-stone-900"
              />
              <circle 
                cx="24" cy="24" r="21" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * progress / 100)}
                className="text-amber-500 transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[10px] font-black text-white">{progress}%</span>
          </div>
        )}
      </div>
      <p className="text-stone-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{title}</p>
      <h4 className="text-3xl font-bold text-white mb-2 dark-academia-font leading-tight group-hover:text-amber-400 transition-colors">{value}</h4>
      <p className="text-stone-600 text-[11px] font-medium leading-relaxed italic group-hover:text-stone-500 transition-colors">{subtitle}</p>
    </div>
  );
};

export default Dashboard;