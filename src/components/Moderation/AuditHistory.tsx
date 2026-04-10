"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  History, 
  Search, 
  Download, 
  FileText, 
  ShieldCheck, 
  UserCheck, 
  Eye,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const history = [
  { id: 'GDN-20260203-8472', mode: 'Manual', models: 'Text+Image', risk: 78, decision: 'Blocked', time: 'Feb 13, 12:30 PM' },
  { id: 'GDN-20260203-8471', mode: 'Auto (X)', models: 'Text', risk: 12, decision: 'Allowed', time: 'Feb 13, 12:25 PM' },
  { id: 'GDN-20260203-8470', mode: 'Auto (FB)', models: 'Video', risk: 45, decision: 'Flagged', time: 'Feb 13, 12:10 PM' },
];

export default function AuditHistory() {
  return (
    <div className="space-y-8">
      <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardHeader className="p-8 border-b border-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CardTitle className="text-white text-lg">Case History</CardTitle>
            <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">1,247 Total Cases</Badge>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <Input className="pl-10 bg-[#020617] border-[#1E293B] text-white rounded-xl h-10" placeholder="Search Case ID..." />
            </div>
            <Button variant="outline" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">
              <Filter size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#020617]/50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="px-8 py-4">Case ID</th>
                  <th className="px-8 py-4">Input Mode</th>
                  <th className="px-8 py-4">Models Used</th>
                  <th className="px-8 py-4">Risk Score</th>
                  <th className="px-8 py-4">Decision</th>
                  <th className="px-8 py-4">Timestamp</th>
                  <th className="px-8 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-[#1E293B]/30 transition-colors group cursor-pointer">
                    <td className="px-8 py-5 font-bold text-white text-sm">{item.id}</td>
                    <td className="px-8 py-5 text-xs text-slate-400">{item.mode}</td>
                    <td className="px-8 py-5 text-xs text-slate-400">{item.models}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-[#020617] h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full ${item.risk > 70 ? 'bg-rose-500' : item.risk > 40 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${item.risk}%` }} />
                        </div>
                        <span className="text-xs font-bold text-white">{item.risk}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                        item.decision === 'Blocked' ? 'bg-rose-500/10 text-rose-400' : 
                        item.decision === 'Flagged' ? 'bg-amber-500/10 text-amber-400' : 
                        'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {item.decision}
                      </Badge>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500">{item.time}</td>
                    <td className="px-8 py-5 text-right">
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-500/10 text-slate-500 hover:text-blue-400">
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B]">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={20} /> Compliance & Audit Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                {[
                  { label: 'Explainability Logs', desc: 'Detailed model reasoning for all high-risk decisions.', status: 'Active' },
                  { label: 'Policy Match Trace', desc: 'Audit trail of which community guidelines were triggered.', status: 'Active' },
                  { label: 'Human Override Records', desc: 'Log of all manual changes to AI-generated decisions.', status: 'Active' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-[#020617] border border-[#1E293B] rounded-2xl group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-600/10 rounded-xl text-blue-400">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{log.label}</h4>
                        <p className="text-[10px] text-slate-500 mt-0.5">{log.desc}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:bg-blue-500/10">View Logs</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-widest">Audit Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-white text-blue-600 hover:bg-white/90 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2">
                <Download size={16} /> Export Compliance Report
              </Button>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2">
                <UserCheck size={16} /> Verify Chain of Custody
              </Button>
              <p className="text-[10px] text-white/60 text-center leading-relaxed">
                All moderation actions are cryptographically signed and stored for regulatory compliance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}