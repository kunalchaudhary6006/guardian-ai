"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, TrendingUp, CheckCircle2, AlertTriangle, Users, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { toast } from 'sonner';

// --- Campaign Report Modal ---
export function CampaignReportModal({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-[#0F172A] border-[#1E293B] text-white rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter">Executive Campaign Report</DialogTitle>
          <DialogDescription className="text-slate-400">Aggregated brand safety intelligence for the last 30 days.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
          {[
            { label: 'Total Campaigns', value: '12', icon: FileText },
            { label: 'Avg Risk Score', value: '14%', icon: TrendingUp },
            { label: 'Flagged Content', value: '3 Items', icon: AlertTriangle },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
              <stat.icon className="text-blue-400 mb-2" size={20} />
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={() => { toast.success("Report exported as CSV"); onOpenChange(false); }} className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2">
            <Download size={18} /> Export CSV Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- New Campaign Modal ---
export function NewCampaignModal({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  const [step, setStep] = useState(1);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0F172A] border-[#1E293B] text-white rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-black uppercase tracking-widest">Create New Campaign</DialogTitle>
          <div className="flex gap-2 mt-2">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-800'}`} />
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-800'}`} />
          </div>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label>Campaign Name</Label>
                <Input placeholder="e.g. Summer Sale 2024" className="bg-[#020617] border-[#1E293B] rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Campaign objectives..." className="bg-[#020617] border-[#1E293B] rounded-xl" />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label>Budget ($)</Label>
                <Input type="number" placeholder="5000" className="bg-[#020617] border-[#1E293B] rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Target Platforms</Label>
                <div className="flex flex-wrap gap-2">
                  {['Google', 'Meta', 'TikTok', 'X'].map(p => (
                    <Badge key={p} className="bg-[#020617] border-[#1E293B] text-slate-400 px-3 py-1 cursor-pointer hover:border-blue-500">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          {step === 1 ? (
            <Button onClick={() => setStep(2)} className="w-full bg-blue-600 rounded-xl">Next Step</Button>
          ) : (
            <Button onClick={() => { toast.success("Campaign created and AI analysis started!"); onOpenChange(false); }} className="w-full bg-blue-600 rounded-xl">Launch Campaign</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Creator Risk Graph Modal ---
const trendData = [
  { name: 'Jan', score: 85 }, { name: 'Feb', score: 88 }, { name: 'Mar', score: 82 },
  { name: 'Apr', score: 89 }, { name: 'May', score: 91 }, { name: 'Jun', score: 94 },
];

export function CreatorRiskGraphModal({ open, onOpenChange, creator }: { open: boolean, onOpenChange: (o: boolean) => void, creator: any }) {
  const [isMonitoring, setIsMonitoring] = useState(false);

  const handleMonitor = () => {
    setIsMonitoring(!isMonitoring);
    toast.success(isMonitoring ? "Monitoring deactivated" : `Real-time monitoring active for ${creator?.name}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-[#0F172A] border-[#1E293B] text-white rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-xl font-black">
              {creator?.name?.[0]}
            </div>
            <div>
              <DialogTitle className="text-xl font-black">{creator?.name} Risk Analytics</DialogTitle>
              <DialogDescription className="text-slate-400">6-Month Safety Trend & Behavioral Analysis</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="py-6 space-y-8">
          <div className="h-[250px] w-full">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Safety Index Trend</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 100]} />
                <Tooltip contentStyle={{backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px'}} />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Content Quality', val: 'High', icon: ShieldCheck },
              { label: 'Brand Alignment', val: '92%', icon: CheckCircle2 },
              { label: 'Audience Safety', val: 'Safe', icon: Users },
              { label: 'Network Risk', val: 'Low', icon: AlertTriangle },
            ].map((m, i) => (
              <div key={i} className="p-3 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                <m.icon className="mx-auto text-blue-400 mb-1" size={16} />
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</p>
                <p className="text-sm font-black">{m.val}</p>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => toast.info("Full report generated")} className="border-[#1E293B] text-white rounded-xl">Export Report</Button>
          <Button onClick={handleMonitor} className={`${isMonitoring ? 'bg-rose-600 hover:bg-rose-700' : 'bg-blue-600 hover:bg-blue-700'} rounded-xl min-w-[160px]`}>
            {isMonitoring ? 'Stop Monitoring' : 'Monitor Creator'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}