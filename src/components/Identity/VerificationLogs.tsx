"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Download } from 'lucide-react';

const logs = [
  { time: '2026-04-11 10:00', user: 'user_01', type: 'MP4', result: 'Authentic' },
  { time: '2026-04-11 10:05', user: 'user_02', type: 'JPG', result: 'Fake' },
  { time: '2026-04-11 10:10', user: 'user_03', type: 'WAV', result: 'Suspicious' },
  { time: '2026-04-11 10:15', user: 'user_04', type: 'PNG', result: 'Authentic' },
];

export default function VerificationLogs() {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[2.5rem] overflow-hidden shadow-sm">
      <div className="p-8 border-b border-[#E2E8F0] bg-[#F5F7FA] flex items-center justify-between">
        <h3 className="text-sm font-black text-[#1E293B] uppercase tracking-widest">Verification Logs</h3>
        <Button variant="ghost" size="sm" className="text-[#00BFA5] font-bold text-xs hover:bg-[#00BFA5]/5">View All History</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#F5F7FA]">
            <TableRow className="border-[#E2E8F0] hover:bg-transparent">
              <TableHead className="px-8 py-4 text-slate-500 text-[10px] uppercase font-black tracking-widest">Timestamp</TableHead>
              <TableHead className="px-8 py-4 text-slate-500 text-[10px] uppercase font-black tracking-widest">User</TableHead>
              <TableHead className="px-8 py-4 text-slate-500 text-[10px] uppercase font-black tracking-widest">File Type</TableHead>
              <TableHead className="px-8 py-4 text-slate-500 text-[10px] uppercase font-black tracking-widest">Result</TableHead>
              <TableHead className="px-8 py-4 text-slate-500 text-[10px] uppercase font-black tracking-widest text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log, i) => (
              <TableRow 
                key={i} 
                className={`border-[#E2E8F0] transition-all hover:border-[#00BFA5] group ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'
                }`}
              >
                <TableCell className="px-8 py-5 text-xs font-medium text-slate-500">{log.time}</TableCell>
                <TableCell className="px-8 py-5 text-sm font-bold text-[#1E293B]">{log.user}</TableCell>
                <TableCell className="px-8 py-5">
                  <Badge variant="outline" className="border-[#E2E8F0] text-slate-400 text-[10px] font-bold">{log.type}</Badge>
                </TableCell>
                <TableCell className="px-8 py-5">
                  <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                    log.result === 'Authentic' ? 'bg-emerald-100 text-emerald-600' : 
                    log.result === 'Fake' ? 'bg-rose-100 text-rose-600' : 
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {log.result}
                  </Badge>
                </TableCell>
                <TableCell className="px-8 py-5 text-right">
                  <Button variant="ghost" size="sm" className="rounded-xl text-slate-400 hover:text-[#00BFA5] hover:bg-[#00BFA5]/5 gap-2">
                    {log.result === 'Fake' ? <Download size={14} /> : <Eye size={14} />}
                    <span className="text-[10px] font-black uppercase tracking-widest">{log.result === 'Fake' ? 'Export' : 'View'}</span>
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