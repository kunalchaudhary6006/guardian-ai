"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import ModerationLiveQueue from '@/components/ModerationLiveQueue';
import { cn } from '@/lib/utils';
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialQueue = [
  { id: 'MOD-1024', user: 'user_882', content: 'Suspicious link detected in private message...', risk: 'High', type: 'Spam', status: 'Pending' },
  { id: 'MOD-1025', user: 'alpha_tester', content: 'Potential hate speech identified in community forum...', risk: 'Critical', type: 'Hate Speech', status: 'Pending' },
  { id: 'MOD-1026', user: 'new_member_2', content: 'Inappropriate image upload attempt...', risk: 'Medium', type: 'NSFW', status: 'Pending' },
  { id: 'MOD-1027', user: 'bot_hunter', content: 'Automated behavior pattern detected...', risk: 'Low', type: 'Bot Activity', status: 'Pending' },
];

const ContentModeration = () => {
  const [queue, setQueue] = useState(initialQueue);
  const [searchQuery, setSearchQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<string | null>(null);

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    setQueue(prev => prev.filter(item => item.id !== id));
    toast.success(`Item ${id} has been ${action === 'approve' ? 'approved' : 'rejected'}.`);
  };

  const filteredQueue = queue.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = riskFilter ? item.risk === riskFilter : true;
    return matchesSearch && matchesRisk;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Content Moderation</h1>
          <p className="text-slate-400">Review and manage flagged content across all platforms.</p>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-2xl gap-2 h-11 px-6 border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B]">
                <Filter size={18} /> {riskFilter || 'Filter'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl bg-[#0F172A] border-[#1E293B] text-white">
              <DropdownMenuItem onClick={() => setRiskFilter(null)}>All Risks</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRiskFilter('Critical')}>Critical</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRiskFilter('High')}>High</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20" 
            onClick={() => toast.info("Bulk action initiated")}
            disabled={queue.length === 0}
          >
            <ShieldAlert size={18} /> Bulk Approve
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-[#1E293B] p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <Input 
                  className="pl-12 bg-[#020617] border-[#1E293B] text-white h-12 rounded-2xl focus-visible:ring-1 focus-visible:ring-blue-500" 
                  placeholder="Search by ID, user, or content..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#020617]/50 text-slate-500 text-xs uppercase tracking-wider">
                      <th className="px-6 py-4 font-semibold">ID</th>
                      <th className="px-6 py-4 font-semibold">User</th>
                      <th className="px-6 py-4 font-semibold">Content Preview</th>
                      <th className="px-6 py-4 font-semibold">Risk Level</th>
                      <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {filteredQueue.map((item) => (
                      <tr key={item.id} className="hover:bg-[#1E293B]/30 transition-colors group">
                        <td className="px-6 py-4 text-sm font-medium text-white">{item.id}</td>
                        <td className="px-6 py-4 text-sm text-slate-400">{item.user}</td>
                        <td className="px-6 py-4 text-sm text-slate-400 max-w-xs truncate">{item.content}</td>
                        <td className="px-6 py-4">
                          <Badge className={cn(
                            "font-medium rounded-full px-3",
                            item.risk === 'Critical' ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
                            item.risk === 'High' ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                            "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          )}>
                            {item.risk}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-9 w-9 rounded-xl text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                              onClick={() => handleAction(item.id, 'approve')}
                            >
                              <CheckCircle size={18} />
                            </Button>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-9 w-9 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                              onClick={() => handleAction(item.id, 'reject')}
                            >
                              <XCircle size={18} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <ModerationLiveQueue />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentModeration;