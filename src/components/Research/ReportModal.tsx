"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Share2, Mail, CheckCircle2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function ReportModal({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("AI Report generated successfully!");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#0F172A] border-[#1E293B] text-white rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter">AI Report Generator</DialogTitle>
          <DialogDescription className="text-slate-400">Generate formal, human-readable reports for stakeholders using Generative AI.</DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Executive Summary', desc: 'High-level overview for leadership.' },
              { title: 'Weekly Safety Report', desc: 'Detailed metrics and trend analysis.' },
              { title: 'Compliance Report', desc: 'Regulatory alignment and audit logs.' },
              { title: 'Regulator-Ready PDF', desc: 'Formal documentation for authorities.' },
            ].map((type, i) => (
              <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer group">
                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{type.title}</h4>
                <p className="text-[10px] text-slate-500 mt-1">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-white uppercase tracking-widest">Report Preview</p>
              <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Draft</Badge>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/5 rounded-full" />
              <div className="h-2 w-3/4 bg-white/5 rounded-full" />
              <div className="h-2 w-1/2 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#1E293B] text-white rounded-xl">Cancel</Button>
          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2 min-w-[160px]"
          >
            {isGenerating ? <RefreshCw className="animate-spin" size={18} /> : <FileText size={18} />}
            {isGenerating ? 'Generating...' : 'Generate AI Report'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}