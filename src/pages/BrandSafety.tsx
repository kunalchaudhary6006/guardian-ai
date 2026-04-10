import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ShieldCheck, Globe, AlertCircle, Search, Plus, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

export default function BrandSafety() {
  const [keywords, setKeywords] = useState(['scam', 'fake', 'phishing', 'malware']);
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = () => {
    if (!newKeyword || keywords.includes(newKeyword)) return;
    setKeywords([...keywords, newKeyword]);
    setNewKeyword("");
    toast.success(`Keyword "${newKeyword}" added to blacklist.`);
  };

  const removeKeyword = (word: string) => {
    setKeywords(keywords.filter(k => k !== word));
    toast.error(`Keyword "${word}" removed.`);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Brand Safety</h1>
        <p className="text-slate-400">Protect your brand reputation with automated keyword and domain monitoring.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Search className="text-blue-400" size={20} /> Keyword Blacklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2">
                <Input 
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  placeholder="Add keyword to monitor..."
                  className="bg-[#020617] border-[#1E293B] text-white rounded-xl"
                  onKeyDown={(e) => e.key === 'Enter' && addKeyword()}
                />
                <Button onClick={addKeyword} className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
                  <Plus size={18} />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywords.map((word) => (
                  <Badge key={word} className="bg-[#020617] border-[#1E293B] text-slate-300 px-3 py-1.5 rounded-xl flex items-center gap-2 group">
                    {word}
                    <button onClick={() => removeKeyword(word)} className="text-slate-500 hover:text-rose-500 transition-colors">
                      <Trash2 size={12} />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white">Domain Protection</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-[#1E293B]">
                {[
                  { domain: 'guardian-ai.co.in', status: 'Protected', icon: ShieldCheck, color: 'text-emerald-500' },
                  { domain: 'guardian-secure.net', status: 'Protected', icon: ShieldCheck, color: 'text-emerald-500' },
                  { domain: 'guardian-ai.com', status: 'Monitoring', icon: Globe, color: 'text-blue-500' },
                ].map((d, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-[#1E293B]/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-[#020617] ${d.color}`}>
                        <d.icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-white">{d.domain}</span>
                    </div>
                    <Badge className={d.status === 'Protected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}>
                      {d.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white">Safety Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-6">
              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-32 h-32">
                  <circle className="text-[#1E293B]" strokeWidth="8" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64" />
                  <circle className="text-blue-500" strokeWidth="8" strokeDasharray={364} strokeDashoffset={364 * (1 - 0.94)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64" />
                </svg>
                <span className="absolute text-3xl font-black text-white">94%</span>
              </div>
              <p className="text-sm text-slate-400">Your brand safety rating is <span className="text-emerald-500 font-bold">Excellent</span>.</p>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white">Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex gap-3">
                <AlertCircle className="text-rose-500 shrink-0" size={18} />
                <p className="text-xs text-rose-200">Squatting domain detected: <span className="font-bold">guardlan-ai.com</span></p>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">View All Alerts</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}