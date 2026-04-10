"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, XCircle, Zap } from 'lucide-react';
import { toast } from 'sonner';

export default function DecisionActions() {
  const handleAction = (type: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1000)), {
      loading: `Processing ${type} action...`,
      success: `Ad successfully ${type}ed.`,
      error: 'Action failed'
    });
  };

  return (
    <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
      <CardHeader>
        <CardTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-widest">
          <Zap size={20} fill="currentColor" /> AI Decision Engine
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Final Recommendation</p>
          <h3 className="text-xl font-black">Status: Safe to Run</h3>
          <p className="text-xs opacity-80 mt-2">Triggered By: Context Risk + Content Moderation Signal</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Button 
            onClick={() => handleAction('approve')}
            className="bg-white text-blue-600 hover:bg-white/90 rounded-2xl h-12 font-black uppercase tracking-widest text-xs gap-2"
          >
            <CheckCircle2 size={16} /> Auto-Approve
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={() => handleAction('review')}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 rounded-2xl h-12 font-black uppercase tracking-widest text-[10px] gap-2"
            >
              <AlertTriangle size={14} /> Manual Review
            </Button>
            <Button 
              onClick={() => handleAction('block')}
              variant="outline" 
              className="border-rose-400/30 text-rose-200 hover:bg-rose-500/20 rounded-2xl h-12 font-black uppercase tracking-widest text-[10px] gap-2"
            >
              <XCircle size={14} /> Block Ad
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}