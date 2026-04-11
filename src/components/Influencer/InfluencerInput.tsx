"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Zap, RefreshCw } from 'lucide-react';

export default function InfluencerInput({ onVerify, isVerifying }: { onVerify: (v: string) => void, isVerifying: boolean }) {
  const [input, setInput] = useState("");

  return (
    <Card className="border-blue-500/30 bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Username (@davidkim), Profile URL, or ID..."
              className="pl-12 h-14 bg-[#020617] border-[#1E293B] text-white rounded-2xl focus:ring-blue-500/20 text-lg"
              onKeyPress={(e) => e.key === 'Enter' && onVerify(input)}
            />
          </div>
          <Button 
            onClick={() => onVerify(input)}
            disabled={isVerifying || !input}
            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-blue-900/20 gap-2"
          >
            {isVerifying ? <RefreshCw className="animate-spin" size={20} /> : <Zap size={20} fill="currentColor" />}
            Verify Influencer
          </Button>
        </div>
        <div className="mt-4 flex gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>Supported: Instagram</span>
          <span>•</span>
          <span>TikTok</span>
          <span>•</span>
          <span>YouTube</span>
          <span>•</span>
          <span>X (Twitter)</span>
        </div>
      </CardContent>
    </Card>
  );
}