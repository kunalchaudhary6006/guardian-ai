"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Circle, Clock, Brain } from 'lucide-react';

const nodes = [
  { title: 'Anomaly Detected', time: '14:22:01', model: 'Isolation Forest', confidence: 98, status: 'complete' },
  { title: 'Multi-Modal Correlation', time: '14:22:05', model: 'Correlation Engine', confidence: 94, status: 'complete' },
  { title: 'Severity Classified', time: '14:22:10', model: 'XGBoost Classifier', confidence: 96, status: 'complete' },
  { title: 'Playbook Suggested', time: '14:22:15', model: 'Decision Logic', confidence: 91, status: 'complete' },
  { title: 'Human Approval Pending', time: '14:22:20', model: 'System Wait', confidence: 0, status: 'pending' },
];

export default function DecisionTimeline() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl mb-8">
      <CardHeader className="p-8 pb-0">
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Brain className="text-blue-400" size={20} /> AI Decision Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-500/50 before:to-transparent">
          {nodes.map((node, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1E293B] bg-[#020617] text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {node.status === 'complete' ? <CheckCircle2 size={18} /> : <Circle className="animate-pulse" size={18} />}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-[#1E293B] bg-[#020617] shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white">{node.title}</div>
                  <time className="font-mono text-[10px] text-slate-500">{node.time}</time>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={10} /> {node.model}
                  </div>
                  {node.confidence > 0 && (
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      {node.confidence}% Conf.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}