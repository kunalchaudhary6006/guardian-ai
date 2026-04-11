"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon, Video, Type, Sparkles, RefreshCw, Download, Play } from 'lucide-react';

export default function CreativeStudio({ onApprove }: { onApprove: () => void }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg uppercase tracking-widest">2. AI Creative Studio</CardTitle>
        <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20">AI Generated</Badge>
      </CardHeader>
      <CardContent className="p-8">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="bg-[#020617] border border-[#1E293B] p-1 h-auto gap-1 mb-8">
            <TabsTrigger value="image" className="flex-1 data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-xl text-[10px] font-black uppercase tracking-widest py-2.5 gap-2">
              <ImageIcon size={14} /> Image
            </TabsTrigger>
            <TabsTrigger value="video" className="flex-1 data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-xl text-[10px] font-black uppercase tracking-widest py-2.5 gap-2">
              <Video size={14} /> Video
            </TabsTrigger>
            <TabsTrigger value="caption" className="flex-1 data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-xl text-[10px] font-black uppercase tracking-widest py-2.5 gap-2">
              <Type size={14} /> Caption
            </TabsTrigger>
          </TabsList>

          <TabsContent value="image" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-[#020617] rounded-[2rem] border border-[#1E293B] flex items-center justify-center relative overflow-hidden group">
                {isGenerating ? (
                  <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="animate-spin text-indigo-500" size={32} />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Generating Visuals...</p>
                  </div>
                ) : (
                  <>
                    <img src="/placeholder.svg" alt="AI Creative" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                      <Button variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10">Preview Full</Button>
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">AI Prediction</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-white font-bold">Predicted CTR</span>
                    <span className="text-xl font-black text-indigo-400">4.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white font-bold">Engagement Score</span>
                    <span className="text-xl font-black text-emerald-400">8.4/10</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleRegenerate} variant="outline" className="flex-1 border-[#1E293B] text-white rounded-xl h-12 font-bold gap-2">
                    <RefreshCw size={16} /> Regenerate
                  </Button>
                  <Button onClick={onApprove} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 font-black uppercase tracking-widest text-[10px]">
                    Approve & Continue
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}