"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Search, 
  Download, 
  Plus, 
  Zap,
  Layout,
  Type,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

export default function MarketingStudio() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (type: string) => {
    setIsGenerating(true);
    toast.loading(`Generating ${type}...`);
    setTimeout(() => {
      setIsGenerating(false);
      toast.dismiss();
      toast.success(`${type} generated successfully!`);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Creative Studio</h1>
          <p className="text-slate-400">Generate high-converting ad copy, images, and video assets.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl gap-2 h-11 px-6 border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B]">
            <Download size={18} /> Export All
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20">
            <Plus size={18} /> New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="text-blue-400" size={20} /> AI Asset Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white">Creative Prompt</Label>
                <Textarea 
                  placeholder="Describe the creative you want to generate (e.g. A high-energy fitness motivation video for Instagram Reels)..." 
                  className="bg-[#020617] border-[#1E293B] text-white rounded-2xl min-h-[120px] focus:ring-blue-500/20"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleGenerate('Ad Copy')}
                  className="flex-col h-24 border-[#1E293B] bg-[#020617] text-white hover:bg-[#1E293B] rounded-2xl gap-2"
                >
                  <Type size={20} className="text-blue-400" />
                  <span className="text-xs">Ad Copy</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleGenerate('Image')}
                  className="flex-col h-24 border-[#1E293B] bg-[#020617] text-white hover:bg-[#1E293B] rounded-2xl gap-2"
                >
                  <ImageIcon size={20} className="text-indigo-400" />
                  <span className="text-xs">Image</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleGenerate('Video')}
                  className="flex-col h-24 border-[#1E293B] bg-[#020617] text-white hover:bg-[#1E293B] rounded-2xl gap-2"
                >
                  <Video size={20} className="text-violet-400" />
                  <span className="text-xs">Video</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleGenerate('SEO Meta')}
                  className="flex-col h-24 border-[#1E293B] bg-[#020617] text-white hover:bg-[#1E293B] rounded-2xl gap-2"
                >
                  <Search size={20} className="text-emerald-400" />
                  <span className="text-xs">SEO Meta</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
              <CardHeader>
                <CardTitle className="text-white text-sm font-bold uppercase tracking-widest">Recent Generations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Fitness Reel v1', type: 'Video', date: '2h ago' },
                  { title: 'Summer Sale Copy', type: 'Text', date: '5h ago' },
                  { title: 'Hero Banner v2', type: 'Image', date: '1d ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400">
                        <Zap size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{item.title}</p>
                        <p className="text-[10px] text-slate-500">{item.type} • {item.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white">
                      <Download size={16} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
              <CardHeader>
                <CardTitle className="text-white text-sm font-bold uppercase tracking-widest">SEO Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                  <p className="text-xs text-slate-400 mb-2">Top Keywords for your industry:</p>
                  <div className="flex flex-wrap gap-2">
                    {['fitness app', 'workout plan', 'health tech', 'AI coach'].map(k => (
                      <span key={k} className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-lg">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#1E293B] text-white rounded-xl gap-2">
                  <Globe size={16} /> Run SEO Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white">Platform Previews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full" />
                  <span className="text-xs font-bold text-white">Meta Ads Preview</span>
                </div>
                <div className="aspect-video bg-slate-800 rounded-xl mb-3 flex items-center justify-center">
                  <ImageIcon className="text-slate-700" size={48} />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-slate-800 rounded" />
                  <div className="h-2 w-1/2 bg-slate-800 rounded" />
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                Push to Publishing Engine
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}