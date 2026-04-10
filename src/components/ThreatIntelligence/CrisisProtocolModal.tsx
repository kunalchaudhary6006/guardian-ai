"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ShieldAlert, Zap, TrendingUp, X } from 'lucide-react';
import { toast } from 'sonner';

interface CrisisProtocolModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CrisisProtocolModal({ open, onOpenChange }: CrisisProtocolModalProps) {
  const handleConfirm = () => {
    toast.promise(new Promise(r => setTimeout(r, 2000)), {
      loading: 'Activating National Crisis Protocol...',
      success: 'Crisis Protocol Active. All systems in lockdown mode.',
      error: 'Activation failed'
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0F172A] border-rose-500/30 text-white rounded-[2.5rem] max-w-lg p-0 overflow-hidden">
        <div className="bg-rose-600 p-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <ShieldAlert className="text-white" size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Crisis Protocol</h2>
              <Badge className="bg-white/20 text-white border-none text-[10px] font-black uppercase tracking-widest">High Confidence</Badge>
            </div>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-bold text-rose-400 flex items-center gap-2">
              <AlertTriangle size={18} /> AI Recommendation: Immediate Escalation
            </p>
            <div className="space-y-3">
              {[
                'Coordinated DDoS attack targeting core infrastructure',
                'Simultaneous brute-force attempts on 12k+ accounts',
                'Anomalous data egress detected in EU region',
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 shrink-0" />
                  {reason}
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-5 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Impact Forecast</p>
              <TrendingUp size={14} className="text-rose-400" />
            </div>
            <p className="text-lg font-black text-white">94% Probability of System Failure</p>
            <p className="text-xs text-slate-500 mt-1">If no action is taken within the next 12 minutes.</p>
          </div>
        </div>
        
        <DialogFooter className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="flex-1 border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl h-12 font-bold"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm}
            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white rounded-xl h-12 font-black uppercase tracking-widest shadow-lg shadow-rose-900/20"
          >
            Confirm Activation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}