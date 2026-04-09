"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Shield, Info } from 'lucide-react';

const policies = [
  { id: 1, name: 'Hate Speech Detection', description: 'Automatically flag and remove content containing hate speech patterns.', active: true },
  { id: 2, name: 'Spam Prevention', description: 'Limit message frequency and detect repetitive automated content.', active: true },
  { id: 3, name: 'NSFW Filtering', description: 'Use AI vision to detect and blur sexually explicit imagery.', active: false },
  { id: 4, name: 'Copyright Protection', description: 'Scan uploads against known copyrighted material databases.', active: true },
  { id: 5, name: 'Child Safety Protocol', description: 'Enhanced monitoring for content involving minors.', active: true },
];

const PolicyEnforcement = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Policy Enforcement</h1>
          <p className="text-slate-500">Configure and manage automated safety rules and compliance policies.</p>
        </div>
        <Button className="bg-slate-900 hover:bg-slate-800 gap-2">
          <Plus size={18} /> Create New Policy
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {policies.map((policy) => (
          <Card key={policy.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{policy.name}</h3>
                    <p className="text-slate-500 mt-1 max-w-2xl">{policy.description}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                        <FileText size={14} /> View Documentation
                      </button>
                      <button className="text-sm font-medium text-slate-400 hover:text-slate-600 flex items-center gap-1">
                        <Info size={14} /> Audit Logs
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center space-x-2">
                    <Switch id={`policy-${policy.id}`} checked={policy.active} />
                    <Label htmlFor={`policy-${policy.id}`} className="text-sm font-semibold">
                      {policy.active ? 'Active' : 'Disabled'}
                    </Label>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400">Edit Rules</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default PolicyEnforcement;