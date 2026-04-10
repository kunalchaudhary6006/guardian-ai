"use client";

import React from 'react';
import { FileText, Download, Search, Filter, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function DeepDiveReports() {
  const reports = [
    { title: 'Q1 Threat Landscape', date: 'Mar 12, 2024', size: '2.4 MB', type: 'PDF' },
    { title: 'User Behavior Analysis', date: 'Mar 10, 2024', size: '1.8 MB', type: 'CSV' },
    { title: 'Policy Impact Study', date: 'Mar 05, 2024', size: '4.2 MB', type: 'PDF' },
  ];

  const handleDownload = (title: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1000)), {
      loading: `Generating ${title}...`,
      success: `${title} downloaded successfully.`,
      error: 'Download failed'
    });
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <BarChart2 className="text-indigo-400" size={20} /> Deep Dive Reports
        </h3>
        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-white">
          <Filter size={14} className="mr-2" /> Filter
        </Button>
      </div>

      <div className="space-y-3">
        {reports.map((report, i) => (
          <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{report.title}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{report.date} • {report.size}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => handleDownload(report.title)}
              className="text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-xl"
            >
              <Download size={16} />
            </Button>
          </div>
        ))}
      </div>

      <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 font-bold gap-2">
        <Search size={18} /> Generate Custom Report
      </Button>
    </div>
  );
}