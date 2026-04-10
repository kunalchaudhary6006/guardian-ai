"use client";

import React, { useState } from 'react';
import { Terminal, Play, ShieldCheck, ShieldAlert, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function PolicyRuleSimulator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);
  const [isTesting, setIsTesting] = useState(false);

  const runTest = () => {
    if (!input.trim()) return;
    setIsTesting(true);
    
    setTimeout(() => {
      const hasBadWords = /scam|idiot|fake|buy/i.test(input);
      setResult({
        status: hasBadWords ? 'Flagged' : 'Passed',
        reason: hasBadWords ? 'Matches restricted keyword patterns' : 'No policy violations detected',
        confidence: hasBadWords ? 98 : 99
      });
      setIsTesting(false);
      toast.success("Simulation complete");
    }, 1000);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Terminal className="text-emerald-400" size={20} /> Policy Sandbox
        </h3>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Test Environment</span>
      </div>

      <div className="space-y-4">
        <Textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter sample text to test against active policies..."
          className="bg-[#020617] border-[#1E293B] text-white rounded-2xl min-h-[100px] focus:ring-emerald-500/20"
        />
        
        <Button 
          onClick={runTest}
          disabled={isTesting || !input}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 font-bold gap-2 shadow-lg shadow-emerald-900/20"
        >
          {isTesting ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
          Run Policy Simulation
        </Button>

        {result && (
          <div className={`p-4 rounded-2xl border animate-in fade-in slide-in-from-top-2 ${
            result.status === 'Flagged' ? 'bg-rose-500/10 border-rose-500/20' : 'bg-emerald-500/10 border-emerald-500/20'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {result.status === 'Flagged' ? <ShieldAlert className="text-rose-500" size={18} /> : <ShieldCheck className="text-emerald-500" size={18} />}
                <span className={`font-bold text-sm ${result.status === 'Flagged' ? 'text-rose-500' : 'text-emerald-500'}`}>
                  {result.status}
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-500">{result.confidence}% Confidence</span>
            </div>
            <p className="text-xs text-slate-400">{result.reason}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const RefreshCw = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);