"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, AlertCircle } from 'lucide-react';

export default function ContentModerationPanel() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <ShieldAlert className="text-rose-500" size={20} /> Content Moderation Evidence
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="aspect-video bg-[#020617] rounded-2xl border border-[#1E293B] flex items-center justify-center relative overflow-hidden group">
          <img src="/placeholder.svg" alt="Ad Preview" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-rose-500/20 backdrop-blur-sm border border-rose-500/30 p-4 rounded-2xl text-center">
              <AlertCircle className="text-rose-500 mx-auto mb-2" size={24} />
              <p className="text-xs font-bold text-white">Sensitive Content Detected</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Highlighted Risky Text</p>
            <div className="p-3 bg-[#020617] border border-[#1E293B] rounded-xl text-sm text-slate-300">
              "Get rich quick with our <span className="bg-rose-500/20 text-rose-400 px-1 rounded">guaranteed returns</span> program. No risk involved!"
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['NSFW: 0.02%', 'Violence: 0.01%', 'Hate: 0.05%', 'Sensitive: 91%'].map((label, i) => (
              <Badge key={i} className="bg-[#020617] border-[#1E293B] text-slate-400 px-3 py-1 rounded-lg">
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}