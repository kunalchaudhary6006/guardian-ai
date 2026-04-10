"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Globe, Lock, AlertCircle, Search, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
      </div>think
The user wants me to continue my previous response exactly where I left off.

Looking at the previous response, it ended abruptly inside a `<dyad-write>` block for `src/pages/BrandSafety.tsx`.

The last few lines were:
```tsx
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Brand Safety</h1>
        <p className="text-slate-400">Protect your brand reputation with automated keyword and domain monitoring.</p>
      </div>
```

I need to complete the `BrandSafety.tsx` file and then provide the rest of the updates for the other pages (`ThreatIntelligence.tsx`, `ContentModeration.tsx`, `PolicyEnforcement.tsx`, `MarketingDashboard.tsx`, `ResearchAnalytics.tsx`) and the `App.tsx` / `Sidebar.tsx` / `Dashboard.tsx` updates to link everything together.

Wait, the user said "Continue exactly where you left off without any preamble."

So I should start with the rest of the `src/pages/BrandSafety.tsx` content.

Plan:
1. Complete `src/pages/BrandSafety.tsx`.
2. Update `src/pages/ThreatIntelligence.tsx` to include `ThreatResponseCenter`.
3. Update `src/pages/ContentModeration.tsx` to include `ModerationLiveQueue`.
4. Update `src/pages/PolicyEnforcement.tsx` to include `PolicyRuleSimulator`.
5. Update `src/pages/MarketingDashboard.tsx` to include `SentimentTracker`.
6. Update `src/pages/ResearchAnalytics.tsx` to include a "Deep Dive" section.
7. Update `src/App.tsx` to include the new Brand Safety route.
8. Update `src/components/Sidebar.tsx` to include the Brand Safety link.
9. Update `src/pages/Dashboard.tsx` to include the Brand Safety module card.

Let's start finishing `src/pages/BrandSafety.tsx`.

```tsx
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
                  onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
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
```

Then I need to update the other pages.

Wait, I should check if I need to write the whole file for `BrandSafety.tsx` or just the rest. The instructions say "Only use ONE <dyad-write> block per file that you write!". Since the previous response was cut off, the `<dyad-write>` tag was never closed.

Actually, if I "continue exactly where I left off", I should probably just output the rest of the code and the closing tag.

But wait, the system instructions say: "do NOT be lazy and ALWAYS write the entire file. It needs to be a complete file."

However, the user specifically asked to "Continue exactly where you left off without any preamble."

If I write the whole file again, it's not "continuing where I left off". But if I just write the rest, the `<dyad-write>` tag from the previous turn is technically "open" in the user's view but the system might expect a new one.

Actually, the previous turn's output is gone from the current turn's context in terms of "writing". I must provide a valid `<dyad-write>` block.

I will provide the full `BrandSafety.tsx` file and then the rest of the updates.

Wait, the user said "Continue exactly where you left off". This usually means "don't repeat what you already said".

But I can't just output raw code without a tag.

I'll provide the full `BrandSafety.tsx` and then the rest of the files.

Let's look at the files I need to update:
1. `src/pages/BrandSafety.tsx` (Full)
2. `src/pages/ThreatIntelligence.tsx` (Update to include `ThreatResponseCenter`)
3. `src/pages/ContentModeration.tsx` (Update to include `ModerationLiveQueue`)
4. `src/pages/PolicyEnforcement.tsx` (Update to include `PolicyRuleSimulator`)
5. `src/pages/MarketingDashboard.tsx` (Update to include `SentimentTracker`)
6. `src/pages/ResearchAnalytics.tsx` (Update to include `DeepDiveReports`)
7. `src/App.tsx` (Add route)
8. `src/components/Sidebar.tsx` (Add link)
9. `src/pages/Dashboard.tsx` (Add module card)

I also need to create `src/components/DeepDiveReports.tsx`.

Let's go.<dyad-write path="src/pages/BrandSafety.tsx" description="Completing the Brand Safety page with keyword monitoring and domain protection.">
"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Globe, Lock, AlertCircle, Search, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
                  onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
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