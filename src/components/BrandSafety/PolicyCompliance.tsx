"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PolicyCompliance() {
  const [platform, setPlatform] = useState('google');

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg">Policy Compliance Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="google" onValueChange={setPlatform}>
          <TabsList className="bg-[#020617] border border-[#1E293B] p-1 h-auto gap-1 w-full">
            {['Google', 'Meta', 'ASCI', 'FTC'].map((p) => (
              <TabsTrigger key={p} value={p.toLowerCase()} className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl text-[10px] font-black uppercase tracking-widest py-2">
                {p}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl group">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" size={18} />
              <span className="text-sm text-slate-300">Allowed Claims</span>
            </div>
            <Info size={14} className="text-slate-600 group-hover:text-blue-400 cursor-help" />
          </div>
          <div className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl group">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-amber-500" size={18} />
              <span className="text-sm text-slate-300">Restricted Category</span>
            </div>
            <Info size={14} className="text-slate-600 group-hover:text-blue-400 cursor-help" />
          </div>
          <div className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl group">
            <div className="flex items-center gap-3">
              <XCircle className="text-rose-500" size={18} />
              <span className="text-sm text-slate-300">Disallowed Phrase</span>
            </div>
            <Info size={14} className="text-slate-600 group-hover:text-blue-400 cursor-help" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}