"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShieldCheck, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export default function ComplianceCheck({ onApprove }: { onApprove: () => void }) {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg uppercase tracking-widest">3. Brand Safety & Policy Check</CardTitle>
        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Scan Complete</Badge>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Sentiment Score</p>
            <h3 className="text-3xl font-black text-white">92%</h3>
            <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">Positive</Badge>
          </div>
          <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Risk Level</p>
            <h3 className="text-3xl font-black text-emerald-500">LOW</h3>
            <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">Safe to Run</Badge>
          </div>
          <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Violations</p>
            <h3 className="text-3xl font-black text-white">0</h3>
            <Badge className="mt-2 bg-slate-800 text-slate-500">None Detected</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Policy Alignment Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Google Ads Policy', status: 'Compliant', icon: CheckCircle2, color: 'text-emerald-500' },
              { label: 'Meta Ads Policy', status: 'Compliant', icon: CheckCircle2, color: 'text-emerald-500' },
              { label: 'ASCI / FTC Guidelines', status: 'Compliant', icon: CheckCircle2, color: 'text-emerald-500' },
              { label: 'Brand Voice Alignment', status: '94% Match', icon: Info, color: 'text-blue-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-xl">
                <span className="text-xs text-slate-300 font-bold">{item.label}</span>
                <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${item.color}`}>
                  <item.icon size={14} /> {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#1E293B] flex justify-end gap-3">
          <Button variant="outline" className="border-[#1E293B] text-white rounded-xl h-12 font-bold">Manual Review</Button>
          <Button onClick={onApprove} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 h-12 font-black uppercase tracking-widest text-xs shadow-lg shadow-emerald-900/20">
            Approve & Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}