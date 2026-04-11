"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ExternalLink,
  Zap,
  Info
} from 'lucide-react';
import { toast } from 'sonner';

export default function ModerationResults() {
  const handleAction = (action: string) => {
    toast.success(`Content ${action}ed successfully.`);
  };

  return (
    <div className="space-y-8">
      {/* Case Header */}
      <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-rose-600/10 rounded-3xl flex items-center justify-center text-rose-500 border border-rose-500/20">
              <ShieldAlert size={32} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Case GDN-20260203-8472</h2>
                <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">High Risk</Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>Input: Manual Upload</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full" />
                <span>Timestamp: Feb 13, 2026 12:30 PM</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B] gap-2">
              <Download size={16} /> Export JSON
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2 font-bold">
              <ExternalLink size={16} /> Send to Enforcement
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Model Output Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="bg-[#0F172A] border border-[#1E293B] p-1 h-auto gap-1 w-full md:w-auto">
              {['Text', 'Image', 'Video', 'Audio'].map((t) => (
                <TabsTrigger key={t} value={t.toLowerCase()} className="flex-1 md:flex-none px-8 py-2.5 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 text-xs font-bold uppercase tracking-widest">
                  {t} Output
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="text" className="mt-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-bold">Text Analysis Results</h4>
                    <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">Risk: 72%</Badge>
                  </div>
                  <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl text-slate-300 leading-relaxed">
                    "Get rich quick with our <span className="bg-rose-500/20 text-rose-400 px-1 rounded border border-rose-500/30">guaranteed returns</span> program. No risk involved! Just send your <span className="bg-rose-500/20 text-rose-400 px-1 rounded border border-rose-500/30">private keys</span> to start."
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Financial Scam', 'Phishing', 'Spam', 'Urgency'].map((cat) => (
                      <div key={cat} className="p-3 bg-[#020617] border border-[#1E293B] rounded-xl text-center">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{cat}</p>
                        <p className="text-xs font-bold text-white">Detected</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Fusion & Risk Engine */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="border-b border-[#1E293B] p-8">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Zap className="text-blue-400" size={20} fill="currentColor" /> Fusion & Risk Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center relative">
                    <div className="w-48 h-48 rounded-full border-8 border-[#020617] flex flex-col items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full border-8 border-rose-500 border-t-transparent rotate-[135deg]" />
                      <span className="text-4xl font-black text-white">78</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Weighted Score</span>
                    </div>
                    <Badge className="mt-4 bg-rose-500/10 text-rose-400 border-rose-500/20 px-4 py-1">High Risk Decision</Badge>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Model Contributions</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Text Model', score: 72, color: 'bg-rose-500' },
                      { label: 'Image Model', score: 85, color: 'bg-rose-500' },
                      { label: 'Video Model', score: 60, color: 'bg-amber-500' },
                      { label: 'Audio Model', score: 40, color: 'bg-emerald-500' },
                    ].map((m) => (
                      <div key={m.label} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold">
                          <span className="text-slate-400">{m.label}</span>
                          <span className="text-white">{m.score}%</span>
                        </div>
                        <div className="w-full bg-[#020617] h-1.5 rounded-full overflow-hidden">
                          <div className={`${m.color} h-full`} style={{ width: `${m.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <Info size={10} /> AI Reasoning
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "High risk score driven by correlation between financial keywords in text and suspicious QR code detected in image frame 42."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Moderation Actions */}
        <div className="space-y-6">
          <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-widest">Moderation Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => handleAction('Allow')}
                className="w-full bg-blue-500 text-white hover:bg-blue-400 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2 border-none"
              >
                <CheckCircle2 size={16} /> Allow Content
              </Button>
              <Button 
                onClick={() => handleAction('Flag')}
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2"
              >
                <AlertTriangle size={16} /> Flag for Review
              </Button>
              <Button 
                onClick={() => handleAction('Block')}
                variant="outline" 
                className="w-full border-rose-400/30 text-rose-200 hover:bg-rose-500/20 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2"
              >
                <XCircle size={16} /> Block Content
              </Button>
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Button variant="ghost" className="w-full text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest">Escalate to Human</Button>
                <Button variant="ghost" className="w-full text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest">Mark False Positive</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}