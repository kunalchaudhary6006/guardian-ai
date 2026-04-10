"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Type, 
  Image as ImageIcon, 
  Video, 
  Mic, 
  Upload, 
  Link as LinkIcon, 
  Play, 
  Settings2, 
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';

export default function RawDataAnalyzer() {
  const [contentType, setContentType] = useState('text');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [step, setStep] = useState(0);

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setStep(1);
    
    const steps = [
      "Preprocessing content...",
      "Running model inference...",
      "Executing fusion engine...",
      "Matching against policies...",
      "Generating final decision..."
    ];

    let currentStep = 1;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        currentStep++;
        setStep(currentStep);
      } else {
        clearInterval(interval);
        toast.success("Analysis complete! Case GDN-20260203-8472 generated.");
        setIsAnalyzing(false);
      }
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Content Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { id: 'text', label: 'Text Moderation', icon: Type, cta: 'Paste Text / Upload File' },
          { id: 'image', label: 'Image Moderation', icon: ImageIcon, cta: 'Upload Image / Paste URL' },
          { id: 'video', label: 'Video Moderation', icon: Video, cta: 'Upload Video / Paste URL' },
          { id: 'audio', label: 'Audio Moderation', icon: Mic, cta: 'Upload Audio / Live Stream' },
        ].map((type) => (
          <Card 
            key={type.id}
            onClick={() => setContentType(type.id)}
            className={`cursor-pointer border-2 transition-all rounded-3xl overflow-hidden ${
              contentType === type.id ? 'border-blue-500 bg-blue-500/5' : 'border-[#1E293B] bg-[#0F172A] hover:border-slate-700'
            }`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className={`p-3 rounded-2xl ${contentType === type.id ? 'bg-blue-600 text-white' : 'bg-[#020617] text-slate-400'}`}>
                <type.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">{type.label}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{type.cta}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload & Settings Panel */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="border-2 border-dashed border-[#1E293B] rounded-3xl p-12 flex flex-col items-center justify-center gap-4 bg-[#020617]/50 group hover:border-blue-500/50 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold">Drag & drop content here</p>
                  <p className="text-xs text-slate-500 mt-1">or click to browse files</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                  <LinkIcon size={18} />
                </div>
                <Input 
                  placeholder="Paste URL for analysis..." 
                  className="pl-12 h-14 bg-[#020617] border-[#1E293B] text-white rounded-2xl focus:ring-blue-500/20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#1E293B]">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Model Selection</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['NLP (Text)', 'Vision (Image)', 'Temporal (Video)', 'Speech (Audio)'].map((m) => (
                      <div key={m} className="flex items-center justify-between p-3 bg-[#020617] rounded-xl border border-[#1E293B]">
                        <span className="text-xs text-slate-300">{m}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Moderation Settings</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs text-slate-400">Explainability</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="text-xs text-slate-400">Confidence Threshold</Label>
                        <span className="text-xs font-bold text-blue-400">85%</span>
                      </div>
                      <Slider defaultValue={[85]} max={100} step={1} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Execution Status */}
          {isAnalyzing && (
            <Card className="border-blue-500/30 bg-[#0F172A] rounded-3xl overflow-hidden animate-in slide-in-from-top-4">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Zap className="text-blue-400" size={18} fill="currentColor" /> Execution Pipeline
                  </h4>
                  <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Step {step} of 5</Badge>
                </div>
                <div className="relative flex justify-between before:absolute before:top-5 before:left-0 before:w-full before:h-0.5 before:bg-[#1E293B] z-0">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        step >= s ? 'bg-blue-600 border-blue-600 text-white' : 'bg-[#020617] border-[#1E293B] text-slate-600'
                      }`}>
                        {step > s ? <CheckCircle2 size={20} /> : <span className="text-xs font-bold">{s}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-[#020617] rounded-2xl font-mono text-[10px] text-slate-400 space-y-1">
                  <p className="text-blue-400">[12:30:01] Initializing multi-modal fusion engine...</p>
                  {step >= 2 && <p className="text-emerald-400">[12:30:02] Model inference successful (latency: 340ms)</p>}
                  {step >= 4 && <p className="text-amber-400">[12:30:04] Policy match detected: Global Hate Speech v2.1</p>}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Pre-Run Summary */}
        <div className="space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
            <CardContent className="p-8 space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Pre-Run Summary</h4>
              <div className="space-y-4">
                {[
                  { label: 'Input Type', value: 'Video + Audio', icon: Video },
                  { label: 'Models Selected', value: 'Vision + Speech', icon: Zap },
                  { label: 'Estimated Time', value: '6s', icon: Clock },
                  { label: 'Active Policy', value: 'Global Safety', icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className="text-slate-500" />
                      <span className="text-xs text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-xs font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleRunAnalysis}
                disabled={isAnalyzing}
                className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-900/20 gap-2"
              >
                {isAnalyzing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
                Run Analysis
              </Button>
              <p className="text-[10px] text-slate-500 text-center">Shortcut: Ctrl + Enter</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${className}`}>
    {children}
  </span>
);

const RefreshCw = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);