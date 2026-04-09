"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MoreVertical, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

const moderationQueue = [
  { id: 'MOD-1024', user: 'user_882', content: 'Suspicious link detected in private message...', risk: 'High', type: 'Spam', status: 'Pending' },
  { id: 'MOD-1025', user: 'alpha_tester', content: 'Potential hate speech identified in community forum...', risk: 'Critical', type: 'Hate Speech', status: 'Pending' },
  { id: 'MOD-1026', user: 'new_member_2', content: 'Inappropriate image upload attempt...', risk: 'Medium', type: 'NSFW', status: 'Pending' },
  { id: 'MOD-1027', user: 'bot_hunter', content: 'Automated behavior pattern detected...', risk: 'Low', type: 'Bot Activity', status: 'Pending' },
];

const ContentModeration = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Content Moderation</h1>
          <p className="text-slate-500">Review and manage flagged content across all platforms.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter size={18} /> Filter
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 gap-2">
            <ShieldAlert size={18} /> Bulk Action
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm mb-8">
        <CardHeader className="border-b border-slate-50">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input className="pl-10 bg-slate-50 border-none" placeholder="Search by ID, user, or content..." />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">ID</th>
                  <th className="px-6 py-4 font-semibold">User</th>
                  <th className="px-6 py-4 font-semibold">Content Preview</th>
                  <th className="px-6 py-4 font-semibold">Risk Level</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {moderationQueue.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.user}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{item.content}</td>
                    <td className="px-6 py-4">
                      <Badge className={cn(
                        "font-medium",
                        item.risk === 'Critical' ? "bg-rose-100 text-rose-700 hover:bg-rose-100" :
                        item.risk === 'High' ? "bg-orange-100 text-orange-700 hover:bg-orange-100" :
                        "bg-amber-100 text-amber-700 hover:bg-amber-100"
                      )}>
                        {item.risk}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                          <CheckCircle size={18} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                          <XCircle size={18} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400">
                          <MoreVertical size={18} />
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
    </DashboardLayout>
  );
};

export default ContentModeration;