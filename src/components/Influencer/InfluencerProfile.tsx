"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Instagram, Users, Heart, ShieldCheck } from 'lucide-react';

export default function InfluencerProfile({ data }: { data: any }) {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
      <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-blue-900/20">
          {data.name[0].toUpperCase()}
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{data.name}</h2>
            <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20 px-3 py-1">{data.handle}</Badge>
            <Instagram className="text-pink-500 mx-auto md:mx-0" size={20} />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Followers</p>
              <p className="text-xl font-black text-white flex items-center gap-2">
                <Users size={16} className="text-blue-400" /> {data.followers}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Engagement</p>
              <p className="text-xl font-black text-white flex items-center gap-2">
                <Heart size={16} className="text-rose-500" /> {data.engagement}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Authenticity</p>
              <p className="text-xl font-black text-emerald-400 flex items-center gap-2">
                <ShieldCheck size={16} /> {data.authenticity}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}