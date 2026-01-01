
import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, LayoutDashboard, ScrollText, Sparkles, Download, Search, X, Activity } from 'lucide-react';
import { VideoScript, TimeSlot } from './types';
import { generateBatchScripts } from './services/geminiService';
import { generateStaticSchedule } from './data/contentData';
import Dashboard from './components/Dashboard';
import ContentCalendar from './components/ContentCalendar';
import ScriptView from './components/ScriptView';

const COMPLETED_SCRIPTS_KEY = 'vincify_completed_scripts_v1';
const SCRIPT_POSITIONS_KEY = 'vincify_script_positions_v1';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'strategy'>('strategy');
  const [scripts, setScripts] = useState<VideoScript[]>([]);
  const [scriptPositions, setScriptPositions] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedScript, setSelectedScript] = useState<VideoScript | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persistence helpers
  const getSavedCompletedIds = (): string[] => {
    const saved = localStorage.getItem(COMPLETED_SCRIPTS_KEY);
    return saved ? JSON.parse(saved) : [];
  };

  const getSavedPositions = (): Record<string, string[]> => {
    const saved = localStorage.getItem(SCRIPT_POSITIONS_KEY);
    return saved ? JSON.parse(saved) : {};
  };

  const saveState = (updatedScripts: VideoScript[], updatedPositions: Record<string, string[]>) => {
    const completedIds = updatedScripts.filter(s => s.completed).map(s => s.id);
    localStorage.setItem(COMPLETED_SCRIPTS_KEY, JSON.stringify(completedIds));
    localStorage.setItem(SCRIPT_POSITIONS_KEY, JSON.stringify(updatedPositions));
  };

  const loadSchedule = useCallback(() => {
    const fullPlan = generateStaticSchedule();
    const completedIds = getSavedCompletedIds();
    const savedPositions = getSavedPositions();
    
    const persistedPlan = fullPlan.map(script => ({
      ...script,
      completed: completedIds.includes(script.id)
    }));
    
    // If no saved positions, initialize them from the default plan
    const initialPositions: Record<string, string[]> = { ...savedPositions };
    if (Object.keys(initialPositions).length === 0) {
      persistedPlan.forEach(s => {
        const key = `${s.day}-${s.slot}`;
        if (!initialPositions[key]) initialPositions[key] = [];
        initialPositions[key].push(s.id);
      });
    }
    
    setScripts(persistedPlan);
    setScriptPositions(initialPositions);
  }, []);

  useEffect(() => {
    loadSchedule();
  }, [loadSchedule]);

  const toggleScriptStatus = (id: string) => {
    setScripts(prev => {
      const updated = prev.map(s => s.id === id ? { ...s, completed: !s.completed } : s);
      saveState(updated, scriptPositions);
      if (selectedScript && selectedScript.id === id) {
        setSelectedScript({ ...selectedScript, completed: !selectedScript.completed });
      }
      return updated;
    });
  };

  const handleMoveScript = (scriptId: string, toDay: number, toSlot: TimeSlot) => {
    setScriptPositions(prev => {
      const newPositions = { ...prev };
      const toKey = `${toDay}-${toSlot}`;

      // Remove script from its current position
      Object.keys(newPositions).forEach(key => {
        newPositions[key] = newPositions[key].filter(id => id !== scriptId);
      });

      // Add to new position (prepending for stacking visual)
      if (!newPositions[toKey]) newPositions[toKey] = [];
      newPositions[toKey] = [scriptId, ...newPositions[toKey]];

      saveState(scripts, newPositions);
      return newPositions;
    });
  };

  const generateFullPlan = async () => {
    setIsLoading(true);
    try {
      const fullPlan: VideoScript[] = [];
      for (let i = 1; i <= 30; i += 5) {
        const batch = await generateBatchScripts(i, 5);
        fullPlan.push(...batch);
      }
      
      const completedIds = getSavedCompletedIds();
      const planWithStatus = fullPlan.map(s => ({
        ...s,
        completed: completedIds.includes(s.id)
      }));
      
      setScripts(planWithStatus);
      // Reset positions to default for new AI plan
      const newPos: Record<string, string[]> = {};
      planWithStatus.forEach(s => {
        const key = `${s.day}-${s.slot}`;
        if (!newPos[key]) newPos[key] = [];
        newPos[key].push(s.id);
      });
      setScriptPositions(newPos);
      saveState(planWithStatus, newPos);
    } catch (error) {
      console.error("Failed to generate AI plan", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredScripts = scripts.filter(s => 
    s.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen bg-[#0c0c0c] text-stone-200 flex flex-col font-sans overflow-hidden">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-stone-800/50 bg-[#0c0c0c]/80 backdrop-blur-xl py-3 px-6 shrink-0 z-50">
        <div className="flex items-center gap-4 justify-start">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-lg dark-academia-font text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">V</div>
          <div className="hidden xl:block">
            <h1 className="text-lg font-bold dark-academia-font tracking-tight text-white leading-tight">Vincify</h1>
            <p className="text-[9px] text-amber-500 font-bold tracking-[0.2em] uppercase">Strategy Console</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <nav className="flex items-center gap-1 bg-stone-900/50 p-1 rounded-xl border border-stone-800/50">
            <TabButton 
              active={activeTab === 'strategy'} 
              onClick={() => setActiveTab('strategy')} 
              icon={<Calendar size={16} />} 
              label="Campaign Strategy" 
            />
            <TabButton 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
              icon={<LayoutDashboard size={16} />} 
              label="Overview" 
            />
          </nav>
        </div>

        <div className="flex items-center gap-4 justify-end">
          <div className="hidden xl:flex items-center gap-4">
            {activeTab === 'strategy' ? (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <h2 className="text-[11px] font-bold dark-academia-font text-stone-200">30-Day Matrix</h2>
                  <span className="text-[8px] text-stone-600 font-black uppercase tracking-widest">Growth Layer</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-900/40 border border-stone-800/50 rounded-lg px-3 py-1.5 w-48 focus-within:w-64 transition-all duration-300">
                  <Search size={12} className="text-stone-600" />
                  <input 
                    type="text" 
                    placeholder="Filter scripts..." 
                    className="bg-transparent outline-none text-[10px] w-full text-white placeholder-stone-700 font-bold uppercase tracking-wider"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <h2 className="text-[11px] font-bold dark-academia-font text-stone-200">Analytics</h2>
                  <span className="text-[8px] text-amber-500/80 font-black uppercase tracking-widest">Active Ops</span>
                </div>
                <div className="flex items-center gap-3 bg-stone-900/20 border border-stone-800/30 rounded-lg px-3 py-1.5">
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                     <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest">Live</span>
                   </div>
                   <Activity size={12} className="text-stone-600" />
                </div>
              </div>
            )}
            <div className="h-6 w-px bg-stone-800/50 mx-1" />
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={generateFullPlan}
              disabled={isLoading}
              className="hidden lg:flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all disabled:opacity-50 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <Sparkles size={14} />
              {isLoading ? 'Syncing...' : 'Sync AI Plan'}
            </button>
            <button className="bg-stone-900/80 p-2 rounded-lg text-stone-400 hover:text-white border border-stone-800/50 transition-colors">
              <Download size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative">
        {activeTab === 'dashboard' && (
          <div className="h-full overflow-y-auto p-6 md:p-12 w-full bg-[#0c0c0c] animate-in fade-in duration-500">
            <Dashboard scripts={scripts} />
          </div>
        )}
        
        {activeTab === 'strategy' && (
          <div className="flex h-full w-full overflow-hidden animate-in fade-in duration-500">
            <div className="w-3/4 flex flex-col border-r border-stone-800/50 h-full relative">
              <div className="flex-1 overflow-hidden">
                <ContentCalendar 
                  scripts={filteredScripts} 
                  scriptPositions={scriptPositions}
                  onSelectScript={setSelectedScript} 
                  onToggleStatus={toggleScriptStatus}
                  onMoveScript={handleMoveScript}
                />
              </div>
            </div>

            <div className="w-1/4 h-full bg-[#0c0c0c] flex flex-col overflow-y-auto border-l border-stone-800/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
              {selectedScript ? (
                <div className="p-0 animate-in fade-in slide-in-from-right-4 duration-500 h-full">
                  <div className="p-4 border-b border-stone-800/50 flex items-center justify-between sticky top-0 bg-[#0c0c0c] z-10">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.2em]">Active Blueprint</h3>
                      {selectedScript.completed && (
                        <div className="bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border border-green-500/20">
                          Completed
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedScript(null)}
                      className="p-1 text-stone-600 hover:text-white transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="p-4">
                    <ScriptView 
                      scripts={filteredScripts} 
                      selectedScript={selectedScript} 
                      onSelectScript={setSelectedScript}
                      hideExplorer={true}
                      isSidebar={true}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-stone-800 border-l border-stone-800/50">
                   <ScrollText size={48} strokeWidth={1} className="mb-4 opacity-20" />
                   <p className="text-xs font-bold uppercase tracking-[0.2em] max-w-[200px] leading-relaxed">Select a matrix cell to view the script blueprint</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="md:hidden bg-[#0c0c0c] border-t border-stone-800/50 shrink-0 p-3 flex justify-around backdrop-blur-xl">
        <button onClick={() => setActiveTab('strategy')} className={`p-2 rounded-lg ${activeTab === 'strategy' ? 'text-amber-500' : 'text-stone-600'}`}><Calendar size={20}/></button>
        <button onClick={() => setActiveTab('dashboard')} className={`p-2 rounded-lg ${activeTab === 'dashboard' ? 'text-amber-500' : 'text-stone-600'}`}><LayoutDashboard size={20}/></button>
      </footer>
    </div>
  );
};

const TabButton: React.FC<{ active: boolean, onClick: () => void, icon: React.ReactNode, label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${active ? 'bg-stone-800 text-white shadow-lg border border-stone-700/50' : 'hover:bg-stone-800/30 text-stone-600'}`}
  >
    <div className={active ? 'text-amber-500' : ''}>{icon}</div>
    <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">{label}</span>
  </button>
);

export default App;
