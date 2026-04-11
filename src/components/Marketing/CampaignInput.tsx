"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function CampaignInput({ onStart, active }: { onStart: (d: any) => void, active: boolean }) {
  return (
    <Card className={`border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl transition-all duration-500 ${active ? 'ring-2 ring-blue-500/50' : ''}`}>
      <CardHeader className="p-8 border-b border-[#1E293B]">
        <CardTitle className="text-white text-lg uppercase tracking-widest">1. Campaign Configuration</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-white text-xs font-bold uppercase tracking-widest">Campaign Name</Label>
            <Input placeholder="e.g. Summer Launch 2024" className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-12" />
          </div>
          <div className="space-y-2">
            <Label className="text-white text-xs font-bold uppercase tracking-widest">Industry</Label>
            <Select>
              <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-12">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="health">Health & Wellness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-white text-xs font-bold uppercase tracking-widest">Monthly Budget ($)</Label>
            <Input type="number" placeholder="5000" className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-12" />
          </div>
          <div className="space-y-2">
            <Label className="text-white text-xs font-bold uppercase tracking-widest">Target Region</Label>
            <Input placeholder="e.g. North America, Europe" className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-12" />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-white text-xs font-bold uppercase tracking-widest">Target Platforms</Label>
          <div className="flex flex-wrap gap-2">
            {['Google Ads', 'Meta Ads', 'Instagram', 'LinkedIn', 'TikTok'].map(p => (
              <Badge key={p} className="bg-[#020617] border-[#1E293B] text-slate-400 px-4 py-2 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                {p}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#1E293B] flex justify-end">
          <Button 
            onClick={() => onStart({})}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-900/20"
          >
            Start AI Campaign
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}