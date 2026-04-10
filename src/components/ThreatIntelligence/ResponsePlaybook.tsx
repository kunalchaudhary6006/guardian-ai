"use client";

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Ban, RefreshCw, Bell, CheckCircle2, XCircle, Settings2 } from 'lucide-react';
import { toast } from 'sonner';

interface ResponsePlaybookProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ResponsePlaybook({ open, onOpenChange }: ResponsePlaybookProps) {
  const actions = [
    { id: 'block', label: 'Block Suspicious IPs', icon: Ban, desc: 'Automatically block 145 flagged IP addresses.', status: 'ready' },
    { id: 'reset', label: 'Force Password Reset', icon: RefreshCw, desc: 'Require new passwords for 1.2K affected accounts.', status: 'ready' },
    { id: 'monitor', label: 'Increase Monitoring', icon: ShieldCheck, desc: 'Enable deep packet inspection for all traffic.', status: 'active' },
    { id: 'notify', label: 'Notify SOC Team', icon: Bell, desc: 'Alert on-call security operations center.', status: 'ready' },
  ];

  const handleAction = (label: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1000)), {
      loading: `Executing: ${label}...`,
      success: `${label} executed successfully.`,
      error: 'Action failed'
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-[#0F172A] border-[#1E293B] text-white w-full sm:max-w-md p-0">
        <div className="h-full flex flex-col">
          <SheetHeader className="p-8 border-b border-[#1E293B]">
            <div className="flex items-center justify-between mb-2">
              <SheetTitle className="text-white text-2xl font-black uppercase tracking-tighter">AI Response Playbooks</SheetTitle>
              <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">High Confidence</Badge>
            </div>
            <SheetDescription className="text-slate-400">
              Automated security protocols suggested by the AI Decision Engine.
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {actions.map((action) => (
              <div key={action.id} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-4 group hover:border-blue-500/30 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/10 rounded-xl text-blue-400">
                      <action.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{action.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{action.desc}</p>
                    </div>
                  </div>
                  {action.status === 'active' && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-none text-[8px] font-black uppercase tracking-widest">Active</Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleAction(action.label)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 text-[10px] font-black uppercase tracking-widest gap-2"
                  >
                    <CheckCircle2 size={14} /> Approve
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl h-9 text-[10px] font-black uppercase tracking-widest gap-2"
                  >
                    <Settings2 size={14} /> Modify
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-8 border-t border-[#1E293B] bg-[#020617]/50">
            <Button 
              variant="ghost" 
              className="w-full text-rose-400 hover:bg-rose-500/10 rounded-xl gap-2 font-bold"
              onClick={() => onOpenChange(false)}
            >
              <XCircle size={18} /> Reject All Recommendations
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}