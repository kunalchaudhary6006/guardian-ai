"use client";

import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, XCircle, Eye, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ModerationLiveQueue() {
  const [items, setItems] = useState([
    { id: 'Q-1', user: 'anon_92', content: 'Check out this link: bit.ly/fake-site', score: 88, type: 'Phishing' },
    { id: 'Q-2', user: 'troll_master', content: 'You guys are all idiots!', score: 94, type: 'Hate Speech' },
  ]);

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    toast.success(`Content ${id} ${action}ed`);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Sparkles className="text-blue-400" size={20} /> AI Moderation Queue
        </h3>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Real-time</span>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400 text-xs font-bold">
                  {item.user[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{item.user}</p>
                  <p className="text-[10px] text-slate-500">{item.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold">AI Confidence</p>
                <p className="text-sm font-black text-blue-400">{item.score}%</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic">"{item.content}"</p>
            <div className="flex gap-2 pt-2">
              <Button 
                onClick={() => handleAction(item.id, 'approve')}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-9 text-xs font-bold gap-2"
              >
                <CheckCircle size={14} /> Approve
              </Button>
              <Button 
                onClick={() => handleAction(item.id, 'reject')}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white rounded-xl h-9 text-xs font-bold gap-2"
              >
                <XCircle size={14} /> Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}