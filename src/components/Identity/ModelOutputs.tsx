"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { UserCheck, Zap, ShieldAlert, Brain, Activity, Scan } from 'lucide-react';

export default function ModelOutputs({ result, isProcessing }: { result: any, isProcessing: boolean }) {
  const models = [
    {
      id: 'biometric',
      title: 'Biometric Recognition',
      icon: UserCheck,
      status: result?.biometric.status || 'Waiting',
      score: result?.biometric.confidence || 0,
      desc: 'Face & Voice Match'
    },
    {
      id: 'liveness',
      title: 'Liveness Detection',
      icon: Activity,
      status: result?.liveness.status || 'Waiting',
      type: result?.liveness.type || 'N/A',
      desc: 'Spoof Prevention'
    },
    {
      id: 'deepfake',
      title: 'Deepfake Detection',
      icon: Scan,
      status: result?.deepfake.status || 'Waiting',
      score: result?.deepfake.score || 0,
      desc: 'AI Generation Check'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {models.map((m) => (
        <Card key={m.id} className="border-[#E2E8F0] bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-[#F5F7FA] rounded-xl text-[#00BFA5]">
                <m.icon size={20} />
              </div>
              <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                m.status === 'Verified' || m.status === 'Live' || m.status === 'Real' ? 'bg-[#00BFA5]/10 text-[#00BFA5]' : 'bg-slate-100 text-slate-400'
              }`}>
                {m.status}
              </Badge>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-[#1E293B]">{m.title}</h4>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{m.desc}</p>
            </div>

            {m.id !== 'liveness' ? (
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-500">
                  <span>CONFIDENCE</span>
                  <span className="text-[#00BFA5]">{m.score}%</span>
                </div>
                <div className="w-full bg-[#F5F7FA] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#00BFA5] h-full transition-all duration-1000" 
                    style={{ width: isProcessing ? '40%' : `${m.score}%` }} 
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-xl">
                <div className="w-2 h-2 bg-[#00BFA5] rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Type: {m.type}</span>
              </div>
            )}

            {m.id === 'deepfake' && (
              <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Heatmap Overlay</span>
                <Switch className="data-[state=checked]:bg-[#00BFA5]" />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}