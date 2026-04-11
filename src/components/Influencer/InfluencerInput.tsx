import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Search, Zap, RefreshCw } from 'lucide-react';
import { useInfluencer } from '@/hooks/useInfluencer';

export default function InfluencerInput({ onVerify, isVerifying }: { onVerify: (v: string) => void, isVerifying: boolean }) {
  const [input, setInput] = useState('');
  const {
    riskScore,
    riskLevel,
    monitorActive,
    toggleMonitoring,
  } = useInfluencer('1');

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
            onClick={() => onVerify(input)}
            disabled={isVerifying || !input}
            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-900/20 gap-2"
          >
            {isVerifying ? <RefreshCw className="animate-spin" size={20} /> : <Zap size={20} fill="currentColor" />}
            Verify Influencer
          </Button>
        </div>

        {riskScore != null && (
          <div className="mt-6 pt-6 border-t border-[#1E293B] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Current Risk Score
                </span>
                <div className="flex items-center gap-3">
                  <span className={`text-xl font-black ${riskLevel === 'Low' ? 'text-emerald-500' : riskLevel === 'Medium' ? 'text-amber-500' : 'text-rose-500'}`}>
                    {riskScore.toFixed(1)}%
                  </span>
                  <Badge
                    className={`border-none font-black uppercase tracking-widest text-[8px] ${
                      riskLevel === 'Low' ? 'bg-emerald-500/10 text-emerald-400' :
                      riskLevel === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                    }`}
                  >
                    {riskLevel} Risk
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#020617] p-3 rounded-2xl border border-[#1E293B]">
                <Label htmlFor="monitor-toggle" className="text-xs text-slate-400 cursor-pointer">
                  Continuous Monitoring
                </Label>
                <Switch 
                  id="monitor-toggle" 
                  checked={monitorActive} 
                  onCheckedChange={toggleMonitoring} 
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}