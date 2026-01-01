import React, { useState, useEffect } from 'react';
import { VideoScript, ContentCategory } from '../types.ts';
import { Copy, Calendar, Clock, ScrollText, Check, Mic2, Zap, Brain, Lightbulb, ArrowRightCircle, MessageSquare } from 'lucide-react';

interface ScriptViewProps {
  scripts: VideoScript[];
  selectedScript: VideoScript | null;
  onSelectScript: (s: VideoScript) => void;
  hideExplorer?: boolean;
  isSidebar?: boolean;
}

const ScriptView: React.FC<ScriptViewProps> = ({ scripts, selectedScript, onSelectScript, hideExplorer = false, isSidebar = false }) => {
  const [localDescription, setLocalDescription] = useState('');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  useEffect(() => {
    if (selectedScript) {
      setLocalDescription(selectedScript.description);
    }
  }, [selectedScript]);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getCategoryTheme = (cat: string) => {
    if (cat.includes('Historical')) return 'text-amber-500 border-amber-500/20 bg-amber-500/5';
    if (cat.includes('Anti-Status')) return 'text-stone-400 border-stone-500/20 bg-stone-500/5';
    return 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5';
  };

  const detailContent = selectedScript ? (
    <div className={`space-y-10 relative ${isSidebar ? 'pb-12' : 'bg-[#141414] p-8 md:p-12 rounded-[40px] border border-stone-800/50 shadow-2xl overflow-hidden'}`}>
      {!isSidebar && <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 -mr-40 -mt-40 rounded-full blur-[120px] pointer-events-none"></div>}
      
      {/* Header Info */}
      <div className={`flex flex-col gap-4 border-b border-stone-800/50 ${isSidebar ? 'pb-6' : 'pb-8 flex-row items-center justify-between gap-6'}`}>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-stone-500">
            <Calendar size={14} className="text-amber-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Day {selectedScript.day}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <Clock size={14} className="text-amber-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">{selectedScript.slot}</span>
          </div>
          <div className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase border tracking-widest ${getCategoryTheme(selectedScript.category)}`}>
            {selectedScript.category.split(':')[0]}
          </div>
        </div>
        <button 
          onClick={() => copyToClipboard(selectedScript.narratorScript, 'full')} 
          className="flex items-center justify-center gap-2 px-4 py-2 bg-stone-900 text-stone-400 rounded-xl hover:text-white border border-stone-800 transition-all active:scale-95 text-[9px] font-black uppercase tracking-widest"
        >
          {copiedSection === 'full' ? <Check size={12} className="text-amber-500" /> : <Copy size={12}/>}
          {copiedSection === 'full' ? 'Copied' : 'Copy Narrator Script'}
        </button>
      </div>

      <div className={isSidebar ? 'space-y-12' : 'flex flex-col gap-12'}>
        <div className="space-y-12">
          
          {/* 1. NARRATOR FULL FLOW (TELEPROMPTER) */}
          <section className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-[32px] space-y-4 shadow-[0_10px_40px_rgba(245,158,11,0.05)]">
            <div className="flex items-center gap-3 mb-2">
              <Mic2 size={18} className="text-amber-500" />
              <label className="text-[10px] font-black uppercase text-amber-500/60 tracking-[0.3em] block">Full Narrator Script</label>
            </div>
            <p className="text-2xl font-bold dark-academia-font text-white leading-[1.6] selection:bg-amber-500 selection:text-black">
              "{selectedScript.narratorScript}"
            </p>
          </section>

          {/* 2. SOCIAL CAPTION (PLACED HIGHER AS REQUESTED) */}
          <section className="space-y-6 bg-stone-900/20 border border-stone-800/40 p-8 rounded-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare size={18} className="text-stone-500" />
                <label className="text-[10px] font-black uppercase text-stone-600 tracking-[0.3em] block">Social Caption</label>
              </div>
              <button 
                onClick={() => copyToClipboard(localDescription, 'description')}
                className="text-stone-600 hover:text-amber-500 transition-colors"
              >
                {copiedSection === 'description' ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
            <textarea
              value={localDescription}
              onChange={(e) => setLocalDescription(e.target.value)}
              className="w-full bg-transparent border-none rounded-none p-0 text-lg font-medium text-stone-300 leading-relaxed focus:outline-none transition-all resize-none min-h-[120px] dark-academia-font"
            />
            <div className="pt-4 border-t border-stone-800/30">
              <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.3em] block mb-3">Target Keywords</label>
              <div className="flex flex-wrap gap-2">
                {selectedScript.keywords?.map(k => (
                  <span key={k} className="text-sm font-bold text-amber-500/60 hover:text-amber-500 transition-colors cursor-default">
                    #{k}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 3. BLUEPRINT BREAKDOWN */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <ScrollText size={18} className="text-stone-600" />
              <h3 className="text-[10px] font-black uppercase text-stone-600 tracking-[0.3em]">Blueprint Breakdown</h3>
            </div>
            
            <div className={`grid grid-cols-1 ${isSidebar ? 'gap-6' : 'md:grid-cols-2 gap-8'}`}>
              <SegmentCard 
                icon={<Zap size={16} className="text-amber-500" />} 
                label="The Hook" 
                content={selectedScript.hook} 
                onCopy={() => copyToClipboard(selectedScript.hook, 'hook')}
                isCopied={copiedSection === 'hook'}
              />
              <SegmentCard 
                icon={<Brain size={16} className="text-stone-400" />} 
                label="The Value" 
                content={selectedScript.value} 
                onCopy={() => copyToClipboard(selectedScript.value, 'value')}
                isCopied={copiedSection === 'value'}
              />
              <SegmentCard 
                icon={<Lightbulb size={16} className="text-amber-400" />} 
                label="The Solution" 
                content={selectedScript.product} 
                onCopy={() => copyToClipboard(selectedScript.product, 'product')}
                isCopied={copiedSection === 'product'}
              />
              <SegmentCard 
                icon={<ArrowRightCircle size={16} className="text-stone-400" />} 
                label="Call to Action" 
                content={selectedScript.cta} 
                onCopy={() => copyToClipboard(selectedScript.cta, 'cta')}
                isCopied={copiedSection === 'cta'}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : null;

  if (hideExplorer) return detailContent || null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-[700px] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="lg:w-[380px] bg-[#141414] border border-stone-800/50 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        <div className="p-6 border-b border-stone-800/50 bg-stone-900/20">
          <h3 className="font-bold text-white dark-academia-font text-lg">Strategy Library</h3>
          <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1">{scripts.length} Assets Loaded</p>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-stone-800/20">
          {scripts.map((script) => (
            <button
              key={script.id}
              onClick={() => onSelectScript(script)}
              className={`w-full text-left p-5 transition-all flex gap-4 items-start border-l-4 ${selectedScript?.id === script.id ? 'bg-amber-500/5 border-amber-500' : 'border-transparent hover:bg-stone-900/40'}`}
            >
              <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 shrink-0 flex items-center justify-center font-bold text-stone-500 text-[10px]">
                {script.day}
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-black uppercase text-stone-600 tracking-tighter">{script.slot}</span>
                <p className={`text-sm font-bold truncate ${selectedScript?.id === script.id ? 'text-white' : 'text-stone-400'}`}>{script.hook}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedScript ? detailContent : null}
    </div>
  );
};

const SegmentCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  content: string;
  onCopy: () => void;
  isCopied: boolean;
}> = ({ icon, label, content, onCopy, isCopied }) => (
  <div className="group/segment bg-stone-900/40 border border-stone-800/50 rounded-3xl p-6 hover:border-amber-500/30 transition-all duration-500">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 group-hover/segment:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <span className="text-[9px] font-black uppercase text-stone-500 tracking-[0.2em]">{label}</span>
      </div>
      <button 
        onClick={onCopy}
        className="text-stone-700 hover:text-white transition-colors"
      >
        {isCopied ? <Check size={14} className="text-amber-500" /> : <Copy size={14} />}
      </button>
    </div>
    <p className="text-lg font-medium dark-academia-font text-stone-300 leading-relaxed">
      {content}
    </p>
  </div>
);

export default ScriptView;