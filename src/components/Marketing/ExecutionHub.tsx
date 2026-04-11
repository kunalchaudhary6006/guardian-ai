"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ExecutionHub({ onLaunch }: { onLaunch: () => void }) {
  const [isLaunching, setIsLaunching] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    toast.loading("Validating campaign and connecting to ad networks...");
    
    setTimeout(() => {
      setIsLaunching(false);
      setIsLaunched(true);
      onLaunch();
      toast.success("Campaign Successfully Launched!", {
        description: "Ads are now running on Google and Meta networks."
      });
    }, 3000);
  };

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl overflow-hidden">
      <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
        <CardTitle className="text-white text-lg uppercase tracking-widest">4. Campaign Execution Hub</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Pre-Launch Validation</h4>
              <div className="space-y-3">
                {[
                  { label: 'Campaign Config', status: 'Valid', icon: CheckCircle2, color: 'text-emerald-500' },
                  { label: 'Compliance Check', status: 'Approved', icon: CheckCircle2, color: 'text-emerald-500' },
                  { label: 'Integrations', status: 'Connected', icon: CheckCircle2, color: 'text-emerald-500' },
                  { label: 'Budget Setup', status: 'Configured', icon: CheckCircle2, color: 'text-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{item.label}</span>
                    <span className={`font-black uppercase tracking-widest flex items-center gap-1 ${item.color}`}>
                      <item.icon size={12} /> {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-teal-600/5 border border-teal-500/20 rounded-2xl">
              <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-2">Budget Allocation</p>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-white">
                    <span>Google Ads</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-[#020617] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-[60%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-white">
                    <span>Meta Ads</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-[#020617] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-[40%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-4 border-t border-[#1E293B]">
          {isLaunched ? (
            <div className="flex flex-col items-center gap-3 animate-in zoom-in duration-500">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border-2 border-emerald-500/20">
                <CheckCircle2 size={32} />
              </div>
              <p className="text-lg font-black text-white uppercase tracking-tighter">Campaign Running</p>
            </div>
          ) : (
            <Button 
              onClick={handleLaunch}
              disabled={isLaunching}
              className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white rounded-2xl px-12 h-16 font-black uppercase tracking-widest text-lg shadow-2xl shadow-teal-900/40 gap-3"
            >
              {isLaunching ? <Loader2 className="animate-spin" size={24} /> : <Rocket size={24} />}
              {isLaunching ? "Launching..." : "Launch Ads Now"}
            </Button>
          )}
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Securely connecting to Google & Meta Ads API
          </p>
        </div>
      </CardContent>
    </Card>
  );
}