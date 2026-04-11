"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ShieldCheck, FileText, Heart, Globe, Users, MoreHorizontal } from 'lucide-react';

const campaigns = [
  { name: 'Summer Launch 2024', status: 'Active', risk: 12, factor: 'None', ads: 45, flagged: 0, lastScan: '2m ago', models: ['mod', 'pol', 'sent', 'cont', 'crea'] },
  { name: 'Influencer Collab X', status: 'Review', risk: 45, factor: 'Creator Risk', ads: 12, flagged: 2, lastScan: '15m ago', models: ['mod', 'sent', 'crea'] },
  { name: 'Global Brand Awareness', status: 'Active', risk: 8, factor: 'None', ads: 120, flagged: 1, lastScan: '1h ago', models: ['mod', 'pol', 'cont'] },
];

export default function CampaignsTable() {
  return (
    <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl overflow-hidden shadow-xl">
      <div className="p-6 border-b border-[#1E293B] flex items-center justify-between">
        <h3 className="text-white font-bold">Active Campaigns</h3>
        <Button variant="outline" size="sm" className="text-slate-300 border-[#1E293B] bg-[#020617] hover:bg-[#1E293B] hover:text-white rounded-xl">View All</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#020617]">
            <TableRow className="border-[#1E293B] hover:bg-transparent">
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Campaign Name</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Status</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Risk Score</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Top Risk Factor</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Ads / Flagged</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Models Triggered</TableHead>
              <TableHead className="text-slate-500 text-[10px] uppercase font-black tracking-widest text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((c, i) => (
              <TableRow key={i} className="border-[#1E293B] hover:bg-[#1E293B]/30 transition-colors cursor-pointer group">
                <TableCell className="font-bold text-white text-sm">{c.name}</TableCell>
                <TableCell>
                  <Badge className={c.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}>
                    {c.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-12 bg-[#020617] h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full ${c.risk > 40 ? 'bg-rose-500' : 'bg-blue-500'}`} style={{ width: `${c.risk}%` }} />
                    </div>
                    <span className="text-xs font-bold text-white">{c.risk}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-slate-400">{c.factor}</TableCell>
                <TableCell className="text-xs text-slate-400">{c.ads} / <span className={c.flagged > 0 ? 'text-rose-400 font-bold' : ''}>{c.flagged}</span></TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {c.models.includes('mod') && <ShieldCheck size={14} className="text-blue-400" />}
                    {c.models.includes('pol') && <FileText size={14} className="text-emerald-400" />}
                    {c.models.includes('sent') && <Heart size={14} className="text-rose-400" />}
                    {c.models.includes('cont') && <Globe size={14} className="text-indigo-400" />}
                    {c.models.includes('crea') && <Users size={14} className="text-amber-400" />}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="icon" className="rounded-xl border-[#1E293B] bg-[#020617] hover:bg-blue-500/10 text-slate-400 hover:text-blue-400">
                    <Eye size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}