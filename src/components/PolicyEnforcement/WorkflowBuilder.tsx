"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, ArrowRight, Settings2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function WorkflowBuilder() {
  const blocks = [
    { id: 1, label: 'Violation Detection Model', type: 'trigger' },
    { id: 2, label: 'Risk Threshold Evaluation', type: 'logic' },
    { id: 3, label: 'Repeat Offender Analysis', type: 'logic' },
    { id: 4, label: 'Enforcement Action Selection', type: 'action' },
    { id: 5, label: 'Audit Logging Engine', type: 'system' },
  ];

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl overflow-hidden">
      <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Zap className="text-blue-400" size={20} fill="currentColor" /> AI Enforcement Workflow
            </CardTitle>
            <p className="text-xs text-slate-500 mt-1">Configure how Guardian AI models respond automatically.</p>
          </div>
          <Button variant="outline" size="sm" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">
            <Settings2 size={16} className="mr-2" /> Config
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-4">
          {blocks.map((block, i) => (
            <React.Fragment key={block.id}>
              <div className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl group hover:border-blue-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#0F172A] border border-[#1E293B] flex items-center justify-center text-[10px] font-black text-slate-500">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-white">{block.label}</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white">
                    <Settings2 size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500 hover:bg-rose-500/10">
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
              {i < blocks.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowRight className="text-slate-700 rotate-90" size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full border-dashed border-[#1E293B] text-slate-500 hover:text-blue-400 hover:border-blue-500/50 rounded-2xl h-12 gap-2"
            onClick={() => toast.info("Opening workflow block library...")}
          >
            <Plus size={18} /> Add Workflow Block
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1E293B] grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Action Types</p>
            <div className="flex flex-wrap gap-2">
              {['Flag', 'Notify', 'Suspend', 'Shadow Ban'].map(a => (
                <Badge key={a} variant="outline" className="border-[#1E293B] text-slate-400 text-[8px] uppercase font-black">{a}</Badge>
              ))}
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg shadow-blue-900/20">
            Deploy Workflow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}