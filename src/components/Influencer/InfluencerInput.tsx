import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Zap, RefreshCw } from 'lucide-react';
import { useInfluencer } from '@/hooks/useInfluencer';

export default function InfluencerInput({ onVerify, isVerifying }: { onVerify: (v: string) => void, isVerifying: boolean }) {
  const [input, setInput] = useState('');
  const {
    fetchInfluencer,
    loading,
    riskScore,
    riskLevel,
    monitorActive,
    toggleMonitoring,
  } = useInfluencer('1'); // <-- replace with dynamic ID if needed

  const handleVerify = () => {
    if (!input) return;
    onVerify(input);
  };

  return (
    <Card className="border-blue-500/30 bg-[#0F172A] rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Username (@davidkim), Profile URL, or ID..."
              className="pl-12 h-14 bg-[#020617] border-[#1E293B] text-white rounded-2xl focus:ring-blue-500/20 text-sm"
              onKeyPress={(e) => e.key === 'Enter' && onVerify(input)}
            />
          </div>
          <Button 
            onClick={handleVerify}
            disabled={isVerifying || !input}
            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-900/20 gap-2"
          >
            {isVerifying ? <RefreshCw className="animate-spin" size={20} /> : <Zap size={20} fill="currentColor" />}
            Verify Influencer
          </Button>
        </div>

        {/* Real‑time risk display */}
        {riskScore != null && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Current Risk Score
            </span>
            <span className={`text-[10px] font-bold ${riskLevel === 'Low' ? 'text-emerald-600' : riskLevel === 'Medium' ? 'text-amber-600' : 'text-rose-600'}">
              {riskScore}%
            </span>
          </div>
          <Badge
            className={`border-none font-black uppercase tracking-widest text-[8px] ${
              riskLevel === 'Low' ? 'bg-emerald-500/10 text-emerald-400' :
              riskLevel === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
            }`}
            >{riskLevel}
          </Badge>
        </div>

        {/* Monitoring toggle */}
        <div className="mt-4 flex items-center gap-2">
          <Label htmlFor="monitor-toggle" className="text-xs text-slate-400">
            Monitor Continuously
            </Label>
          <Switch 
            id="monitor-toggle" 
            checked={monitorActive}             onCheckedChange={toggleMonitoring} 
          />
        </div>
      </CardContent>
    </Card>
  );
}