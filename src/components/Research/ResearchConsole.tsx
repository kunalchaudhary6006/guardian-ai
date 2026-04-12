"use client";

import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Upload, 
  Link as LinkIcon, 
  Play, 
  RefreshCw, 
  Database, 
  Globe, 
  ShieldAlert, 
  Clock,
  X,
  FileText
} from 'lucide-react';
import { toast } from 'sonner';

export default function ResearchConsole() {
  const [prompt, setPrompt] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mode, setMode] = useState('quick');
  
  // Functional states for external data
  const [externalData, setExternalData] = useState<{ name: string, type: 'file' | 'url' }[]>([]);
  const [isUrlInputOpen, setIsUrlInputOpen] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRunResearch = () => {
    if (!prompt.trim()) return;
    setIsAnalyzing(true);
    toast.loading("Initializing model pipeline...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Research session completed. Dashboard updated with new insights.");
      setIsAnalyzing(false);
    }, 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setExternalData(prev => [...prev, { name: file.name, type: 'file' }]);
      toast.success(`File "${file.name}" added to research context.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleAddUrl = () => {
    if (!urlInput.trim()) return;
    try {
      new URL(urlInput); // Basic validation
      setExternalData(prev => [...prev, { name: urlInput, type: 'url' }]);
      toast.success("URL added to research context.");
      setUrlInput("");
      setIsUrlInputOpen(false);
    } catch (e) {
      toast.error("Please enter a valid URL.");
    }
  };

  const removeData = (index: number) => {
    setExternalData(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="border-blue-500/30 bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">AI Research & Investigation Console</h2>
            <p className="text-slate-400 text-sm">Ask questions, upload data, and run AI-powered research across platform intelligence.</p>
          </div>
          <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20 px-3 py-1">
            <Clock size={14} className="mr-2" /> Last Sync: 2m ago
          </Badge>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask a research question or investigation prompt... (e.g., 'Why did hate speech spike last weekend?')"
              className="min-h-[120px] bg-[#020617] border-[#1E293B] text-white rounded-2xl p-4 focus:ring-blue-500/20 resize-none placeholder:text-slate-600"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setPrompt("")} className="text-slate-500 hover:text-white">Clear</Button>
              <Button 
                onClick={handleRunResearch}
                disabled={isAnalyzing || !prompt}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-bold gap-2 shadow-lg shadow-blue-900/20"
              >
                {isAnalyzing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
                Run Research
              </Button>
            </div>
          </div>

          {/* External Data List */}
          {externalData.length > 0 && (
            <div className="flex flex-wrap gap-2 p-3 bg-[#020617] rounded-xl border border-[#1E293B]">
              {externalData.map((data, i) => (
                <Badge key={i} variant="secondary" className="bg-[#0F172A] text-slate-300 border-[#1E293B] gap-2 py-1 px-3">
                  {data.type === 'file' ? <FileText size={12} /> : <LinkIcon size={12} />}
                  <span className="max-w-[150px] truncate">{data.name}</span>
                  <X size={12} className="cursor-pointer hover:text-rose-400" onClick={() => removeData(i)} />
                </Badge>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-[#1E293B]">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Data Sources</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'content', label: 'Platform Content', icon: Database },
                  { id: 'behavior', label: 'User Behavior', icon: Globe },
                  { id: 'mod', label: 'Moderation Logs', icon: ShieldAlert },
                  { id: 'threats', label: 'Threat Feeds', icon: Search },
                ].map((source) => (
                  <div key={source.id} className="flex items-center space-x-2">
                    <Checkbox id={source.id} defaultChecked className="border-[#1E293B] data-[state=checked]:bg-blue-600" />
                    <Label htmlFor={source.id} className="text-xs text-slate-400 cursor-pointer flex items-center gap-1">
                      <source.icon size={12} /> {source.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">External Input</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    onChange={handleFileUpload}
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 border-[#1E293B] text-white rounded-xl gap-2 text-xs"
                  >
                    <Upload size={14} /> Upload File
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsUrlInputOpen(!isUrlInputOpen)}
                    className="flex-1 border-[#1E293B] text-white rounded-xl gap-2 text-xs"
                  >
                    <LinkIcon size={14} /> Add URL
                  </Button>
                </div>
                
                {isUrlInputOpen && (
                  <div className="flex gap-2 animate-in slide-in-from-top-2">
                    <Input 
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://..."
                      className="h-8 bg-[#020617] border-[#1E293B] text-xs rounded-lg"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddUrl()}
                    />
                    <Button size="sm" onClick={handleAddUrl} className="h-8 bg-blue-600 rounded-lg px-3">Add</Button>
                  </div>
                )}
              </div>
              <p className="text-[10px] text-slate-600 italic">Supported: CSV, JSON, PDF, TXT, Logs</p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Research Mode</p>
              <div className="flex p-1 bg-[#020617] rounded-xl border border-[#1E293B]">
                {['quick', 'deep', 'predictive'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                      mode === m ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-500">
                {mode === 'quick' && 'Fast summary, minimal depth'}
                {mode === 'deep' && 'Full model execution + correlations'}
                {mode === 'predictive' && 'Forecast-focused results'}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}