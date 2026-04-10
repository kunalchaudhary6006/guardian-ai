"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Target, 
  MousePointer2, 
  Share2, 
  ArrowRight, 
  Plus, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Play,
  Pause,
  Download
} from 'lucide-react';
import { toast } from 'sonner';
import MarketingChatbot from '@/components/MarketingChatbot';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { downloadFile } from '@/utils/download';

const performanceData = [
  { name: 'Mon', reach: 4500, ctr: 3.2, conv: 120 },
  { name: 'Tue', reach: 5200, ctr: 3.8, conv: 145 },
  { name: 'Wed', reach: 4800, ctr: 3.5, conv: 130 },
  { name: 'Thu', reach: 6100, ctr: 4.2, conv: 180 },
  { name: 'Fri', reach: 5900, ctr: 4.0, conv: 165 },
  { name: 'Sat', reach: 7200, ctr: 5.1, conv: 210 },
  { name: 'Sun', reach: 6800, ctr: 4.8, conv: 195 },
];

export default function MarketingDashboard() {
  const navigate = useNavigate();
  const [isCampaignPanelOpen, setIsCampaignPanelOpen] = useState(false);

  const handleAction = (action: string) => {
    toast.info(`${action} initiated...`);
  };

  const handleDownloadReport = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const content = "Guardian AI - Marketing Intelligence Report\n" + 
                         "Generated: " + new Date().toLocaleString() + "\n\n" +
                         "SUMMARY:\n" +
                         "Campaign Performance: 15% above baseline\n" +
                         "ROI Forecast: 3.8x\n" +
                         "Brand Safety Score: 92%\n\n" +
                         "RECOMMENDATIONS:\n" +
                         "1. Scale Meta Ads budget by 20%\n" +
                         "2. Refresh creative assets for Instagram Reels\n" +
                         "3. Pause low-performing keywords in Google Ads";
          
          downloadFile(content, "marketing-ai-report.pdf", "application/pdf");
          resolve(true);
        }, 2000);
      }),
      {
        loading: "Generating comprehensive AI intelligence report...",
        success: "Report downloaded successfully",
        error: "Failed to generate report"
      }
    );
  };

  return (
    <DashboardLayout>
      {/* 1. Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Marketing Intelligence</h1>
          <p className="text-slate-400">AI-driven campaign creation and performance prediction.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={() => setIsCampaignPanelOpen(!isCampaignPanelOpen)}
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20"
          >
            <Plus size={18} /> Create Campaign
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleAction('Launch Ads')}
            className="rounded-2xl gap-2 h-11 px-6 border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B]"
          >
            <Play size={18} fill="currentColor" /> Launch Ads
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* 2. Campaign Input Panel (Conditional) */}
          {isCampaignPanelOpen && (
            <Card className="border-blue-500/30 bg-[#0F172A] rounded-[2.5rem] overflow-hidden animate-in slide-in-from-top-4 duration-300">
              <CardHeader className="bg-blue-600/10 border-b border-blue-500/20">
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="text-blue-400" size={20} /> Campaign Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white">Product / Service</Label>
                    <Input placeholder="e.g. Premium Fitness App" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Industry</Label>
                    <Input placeholder="e.g. Health & Wellness" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Goal</Label>
                    <Input placeholder="e.g. Lead Generation" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Budget ($)</Label>
                    <Input type="number" placeholder="5000" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Target Platforms</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Google Ads', 'Meta Ads', 'Instagram', 'X (Twitter)'].map(p => (
                      <Badge key={p} className="bg-[#020617] border-[#1E293B] text-slate-400 px-4 py-2 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    toast.success("Market Intelligence analysis complete!");
                    setIsCampaignPanelOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-xl font-bold"
                >
                  Run Market Intelligence & Generate Campaign
                </Button>
              </CardContent>
            </Card>
          )}

          {/* 3. Brand Safety & Policy Layer */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
            <div className="bg-rose-500/10 border-b border-rose-500/20 p-4 flex items-center justify-between">
              <h3 className="text-rose-400 font-bold flex items-center gap-2">
                <ShieldCheck size={18} /> Brand Safety & Compliance Check
              </h3>
              <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/20">Live Monitoring</Badge>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Sentiment Score</p>
                  <p className="text-2xl font-black text-white">92% Positive</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Policy Risk</p>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Low Risk</Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Violations</p>
                  <p className="text-2xl font-black text-white">0 Detected</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-[#1E293B] text-white rounded-xl">Review</Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl">Auto-Fix</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. Live Performance Intelligence */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Performance Intelligence</CardTitle>
              <div className="flex gap-2">
                {['Reach', 'CTR', 'Conv'].map(t => (
                  <button key={t} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-[#020617] border border-[#1E293B] text-slate-500 hover:text-white hover:border-blue-500 transition-all">
                    {t}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="reach" stroke="#3b82f6" fillOpacity={1} fill="url(#colorReach)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 5. Funnel & CRO Intelligence */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="text-indigo-400" size={20} /> Funnel Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: 'Impressions', value: '1.2M', width: '100%', color: 'bg-blue-600' },
                  { label: 'Clicks', value: '45.2K', width: '65%', color: 'bg-indigo-600' },
                  { label: 'Leads', value: '3.8K', width: '40%', color: 'bg-violet-600' },
                  { label: 'Conversions', value: '1.2K', width: '25%', color: 'bg-emerald-600' },
                ].map((step, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400 font-medium">{step.label}</span>
                      <span className="text-white font-bold">{step.value}</span>
                    </div>
                    <div className="w-full bg-[#020617] h-8 rounded-xl overflow-hidden border border-[#1E293B] relative">
                      <div className={`${step.color} h-full transition-all duration-1000`} style={{ width: step.width }} />
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white/50 uppercase tracking-widest">
                        {step.width} Efficiency
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
                <TrendingUp className="text-emerald-500" size={20} />
                <p className="text-xs text-emerald-200">
                  <span className="font-bold">AI Insight:</span> Estimated conversion lift of <span className="font-bold">12.4%</span> if CTA color is changed to #10B981.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* 6. AI Assistant Chatbot */}
          <MarketingChatbot />

          {/* 7. Publishing & Ads Control */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white">Publishing Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {['Instagram', 'Facebook', 'Google Ads'].map(p => (
                  <div key={p} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400">
                        <Globe size={16} />
                      </div>
                      <span className="text-sm font-bold text-white">{p}</span>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400">Connected</Badge>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-[#1E293B] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Auto-Post Mode</span>
                  <Badge className="bg-blue-600">Enabled</Badge>
                </div>
                <div className="p-4 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
                  <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-2">ROI Forecast</p>
                  <p className="text-2xl font-black text-white">3.8x</p>
                  <p className="text-[10px] text-slate-500 mt-1">Predicted for next 30 days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. AI Recommendations */}
          <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Sparkles size={20} /> AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'Scale Meta Ads', impact: '+$2.4K', conf: 94 },
                { title: 'Pause Low-ROI Keywords', impact: '-$800 Cost', conf: 88 },
                { title: 'Refresh Creative Assets', impact: '+15% CTR', conf: 91 },
              ].map((rec, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group cursor-pointer hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm">{rec.title}</h4>
                    <Badge className="bg-white/20 text-white border-none text-[10px]">{rec.conf}% Conf.</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-100">Impact: {rec.impact}</p>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 9. AI Report Center */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white">Decision Center</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-blue-400 font-bold">Weekly Summary:</span> Your campaigns are performing 15% above baseline. Market intelligence suggests shifting 20% budget to Instagram Reels for the upcoming weekend.
                </p>
              </div>
              <Button 
                onClick={handleDownloadReport}
                variant="outline" 
                className="w-full border-[#1E293B] text-white rounded-xl gap-2"
              >
                <Download size={16} /> Download AI Report (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}