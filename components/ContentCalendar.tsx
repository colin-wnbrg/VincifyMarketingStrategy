import React, { useState } from 'react';
import { VideoScript, TimeSlot, ContentCategory } from '../types.ts';
import { ExternalLink, Clock, Calendar as CalendarIcon, FileText, Sparkles, CheckCircle2, RotateCcw, Layers } from 'lucide-react';

interface ContentCalendarProps {
  scripts: VideoScript[];
  scriptPositions: Record<string, string[]>;
  onSelectScript: (script: VideoScript) => void;
  onToggleStatus: (id: string) => void;
  onMoveScript: (id: string, day: number, slot: TimeSlot) => void;
}

const ContentCalendar: React.FC<ContentCalendarProps> = ({ 
  scripts, 
  scriptPositions,
  onSelectScript, 
  onToggleStatus,
  onMoveScript
}) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const slots = [TimeSlot.Morning, TimeSlot.MidDay, TimeSlot.Evening];
  const [dragOverCell, setDragOverCell] = useState<string | null>(null);

  const columnWidthStyle = { 
    width: 'calc((75vw - 192px) / 3)', 
    minWidth: '400px',
    maxWidth: 'calc((75vw - 192px) / 3)'
  };

  const rowHeightStyle = { 
    height: 'calc((100vh - 380px) / 3)',
    minHeight: '310px'
  };

  const handleDragOver = (e: React.DragEvent, cellId: string) => {
    e.preventDefault();
    setDragOverCell(cellId);
  };

  const handleDrop = (e: React.DragEvent, day: number, slot: TimeSlot) => {
    e.preventDefault();
    setDragOverCell(null);
    const scriptId = e.dataTransfer.getData('scriptId');
    if (scriptId) {
      onMoveScript(scriptId, day, slot);
    }
  };

  return (
    <div className="h-full w-full overflow-x-auto overflow-y-hidden bg-[#0c0c0c] scrollbar-thin relative pb-60">
      <table className="text-left border-collapse table-fixed" style={{ width: 'max-content' }}>
        <thead>
          <tr className="bg-stone-900/60 border-b border-stone-800/50 sticky top-0 z-30 h-24">
            <th className="px-8 text-[12px] font-black uppercase tracking-[0.4em] text-stone-600 w-48 sticky left-0 bg-[#0c0c0c] z-40 border-r border-stone-800/50 backdrop-blur-md">
              <div className="flex items-center gap-3"><Clock size={16}/> Distribution</div>
            </th>
            {days.map(day => (
              <th key={day} className="px-10 text-[13px] font-black uppercase tracking-[0.4em] text-stone-400 border-r border-stone-800/20" style={columnWidthStyle}>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-3">
                    <CalendarIcon size={14} className="text-amber-500" />
                    <span className="text-stone-200">Day {day < 10 ? `0${day}` : day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={11} className="text-amber-500/20" />
                    <span className="text-[9px] text-stone-700 tracking-[0.3em] font-black uppercase">Active Layer</span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800/20">
          {slots.map(slot => (
            <tr key={slot} className="group border-b border-stone-800/10" style={rowHeightStyle}>
              <td className="px-8 align-middle sticky left-0 bg-[#0c0c0c] z-20 border-r border-stone-800/50 backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-stone-500 dark-academia-font leading-none mb-2">
                    {slot}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500/40 animate-pulse" />
                    <span className="text-[10px] font-bold text-stone-800 uppercase tracking-[0.2em]">Transmission</span>
                  </div>
                </div>
              </td>
              {days.map(day => {
                const cellId = `${day}-${slot}`;
                const cellScriptIds = scriptPositions[cellId] || [];
                const cellScripts = cellScriptIds.map(id => scripts.find(s => s.id === id)).filter(Boolean) as VideoScript[];
                
                return (
                  <td 
                    key={cellId} 
                    className={`p-5 align-top border-r border-stone-800/10 transition-colors duration-200 ${dragOverCell === cellId ? 'bg-amber-500/5' : ''}`} 
                    style={columnWidthStyle}
                    onDragOver={(e) => handleDragOver(e, cellId)}
                    onDragLeave={() => setDragOverCell(null)}
                    onDrop={(e) => handleDrop(e, day, slot)}
                  >
                    {cellScripts.length > 0 ? (
                      <ScriptStack 
                        scripts={cellScripts} 
                        onClick={onSelectScript} 
                        onToggleStatus={onToggleStatus} 
                      />
                    ) : (
                      <div className="h-full rounded-[1.5rem] bg-stone-900/10 border border-dashed border-stone-800/20 flex items-center justify-center italic text-stone-800/20 text-[10px] tracking-widest uppercase font-black">
                        Empty Slot
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-60 w-full pointer-events-none"></div>
    </div>
  );
};

const ScriptStack: React.FC<{
  scripts: VideoScript[];
  onClick: (s: VideoScript) => void;
  onToggleStatus: (id: string) => void;
}> = ({ scripts, onClick, onToggleStatus }) => {
  return (
    <div className="relative w-full h-full group/stack">
      {/* Visual Stack Background Cards */}
      {scripts.slice(1, 3).map((_, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 rounded-[2.5rem] border border-stone-800/50 bg-[#141414] translate-x-${(idx + 1) * 2} translate-y-${(idx + 1) * 2} -z-${idx + 1} opacity-${60 - (idx * 20)}`}
          style={{ 
            transform: `translate(${(idx + 1) * 8}px, ${(idx + 1) * 8}px)`,
            zIndex: -idx - 1
          }}
        />
      ))}
      
      {/* Top Interactive Card */}
      <ScriptCell 
        script={scripts[0]} 
        stackCount={scripts.length}
        onClick={onClick} 
        onToggleStatus={onToggleStatus} 
      />
    </div>
  );
};

const ScriptCell: React.FC<{ 
  script: VideoScript, 
  stackCount: number,
  onClick: (s: VideoScript) => void,
  onToggleStatus: (id: string) => void
}> = ({ script, stackCount, onClick, onToggleStatus }) => {
  const isCatA = script.category === ContentCategory.A;
  const isCatB = script.category === ContentCategory.B;
  const isCompleted = script.completed;

  const containerClasses = isCompleted 
    ? "bg-[#0a0a0a] border-green-900/40 opacity-70 grayscale-[0.3]"
    : isCatA 
    ? "bg-[#1f1d14] border-amber-900/50 hover:border-amber-500 shadow-[inset_0_0_40px_rgba(245,158,11,0.08)]" 
    : isCatB 
    ? "bg-[#1c1c1c] border-stone-800 hover:border-stone-500 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]"
    : "bg-[#1e1713] border-orange-950/50 hover:border-orange-600 shadow-[inset_0_0_40px_rgba(249,115,22,0.05)]";

  const categoryLabel = isCatA ? 'History' : isCatB ? 'Market' : 'Aesthetic';
                   
  const chipColor = isCompleted ? 'border-green-900/30 text-green-700 bg-green-900/10' :
                   isCatA ? 'border-amber-500/30 text-amber-500 bg-amber-500/10' : 
                   isCatB ? 'border-stone-500/40 text-stone-300 bg-stone-500/10' : 
                   'border-orange-500/30 text-orange-400 bg-orange-500/10';

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('scriptId', script.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div 
      draggable
      onDragStart={handleDragStart}
      className={`group/card relative w-full h-full rounded-[2.5rem] border transition-all duration-500 ease-out overflow-hidden cursor-grab active:cursor-grabbing ${containerClasses} ${isCompleted ? '' : 'hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]'}`}
    >
      <button 
        onClick={() => onClick(script)}
        className="w-full text-left p-7 h-full flex flex-col active:scale-[0.97] active:duration-100"
      >
        <div className="flex-1 overflow-hidden space-y-5">
          <div className="flex items-center justify-between mb-1 gap-2">
            <div className="flex items-center gap-2 flex-1">
              <span className={`text-[10px] px-3.5 py-1.5 rounded-full border font-black uppercase tracking-[0.2em] transition-colors duration-500 whitespace-nowrap ${chipColor}`}>
                {isCompleted ? 'Done' : categoryLabel}
              </span>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleStatus(script.id);
                }}
                className={`flex items-center gap-2 text-[10px] px-3.5 py-1.5 rounded-full border font-black uppercase tracking-[0.2em] transition-all duration-300 opacity-0 group-hover/card:opacity-100 whitespace-nowrap ${chipColor} hover:brightness-125 active:scale-95`}
              >
                {isCompleted ? <RotateCcw size={12} /> : <CheckCircle2 size={12} />}
                {isCompleted ? 'Undo' : 'Mark as Completed'}
              </button>
            </div>

            {stackCount > 1 && (
              <div className="flex items-center gap-1 bg-amber-500 text-black px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest animate-in zoom-in duration-300">
                <Layers size={10} />
                <span>Stack: {stackCount}</span>
              </div>
            )}

            <ExternalLink 
              size={18} 
              className={`transition-all duration-500 ease-out shrink-0 ${isCompleted ? 'text-green-900' : 'text-stone-700 group-hover/card:text-amber-500 group-hover/card:scale-110 group-hover/card:rotate-12'}`} 
            />
          </div>
          
          <div className="space-y-4">
            <h4 className={`text-xl font-bold leading-tight dark-academia-font transition-colors duration-500 line-clamp-2 ${isCompleted ? 'text-stone-600 line-through' : 'text-stone-100 group-hover/card:text-white'}`}>
              "{script.hook}"
            </h4>
            
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 group-hover/card:text-stone-500 transition-colors duration-500">Cognitive Value</label>
              <p className={`text-base leading-snug line-clamp-3 transition-colors duration-500 ${isCompleted ? 'text-stone-700' : 'text-stone-400 group-hover/card:text-stone-300'}`}>
                {script.value}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-stone-800/40 flex items-center justify-between shrink-0">
          <div className="flex gap-3">
            {script.keywords?.slice(0, 2).map(k => (
              <span key={k} className="text-[10px] font-black text-stone-500 uppercase tracking-widest bg-stone-900/40 px-3 py-1 rounded transition-colors duration-500 group-hover/card:text-stone-400">
                #{k}
              </span>
            ))}
          </div>
          <div className={`flex items-center gap-2 transition-all duration-500 ${isCompleted ? 'text-green-700' : 'text-stone-700 group-hover/card:text-amber-500'}`}>
            <FileText size={16} className="group-hover/card:scale-110 transition-transform duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">Blueprint</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ContentCalendar;