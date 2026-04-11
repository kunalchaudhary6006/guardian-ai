"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Instagram, Linkedin, Chrome } from 'lucide-react';

export default function IntegrationsHub() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader className="p-6 border-b border-[#1E293B]">
        <CardTitle className="text-white text-sm uppercase tracking-widest">Integrations Hub</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          { name: 'Google Ads', icon: Chrome, status: 'Connected', color: 'text-blue-400' },
          { name: 'Meta Ads', icon: Instagram, status: 'Connected', color: 'text-pink-500' },
          { name: 'Instagram', icon: Instagram, status: 'Connected', color: 'text-pink-500' },
          { name: 'LinkedIn', icon: Linkedin, status: 'Not Connected', color: 'text-blue-600' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl group hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center ${item.color}`}>
                <item.icon size={16} />
              </div>
              <span className="text-xs font-bold text-white">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={item.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}>
                {item.status}
              </Badge>
              {item.status !== 'Connected' && (
                <Button variant="ghost" size="sm" className="h-7 text-[8px] font-black uppercase tracking-widest text-blue-400 hover:bg-blue-500/10">Connect</Button>
              )}
            </div>
          </div>
        ))}
        <p className="text-[10px] text-slate-500 italic text-center pt-2">
          Rule: All integrations must be connected before campaign launch.
        </p>
      </CardContent>
    </Card>
  );
}