"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { FileText, Plus, Shield, Info, Trash2 } from 'lucide-react';
import { toast } from "sonner";

const initialPolicies = [
  { id: 1, name: 'Hate Speech Detection', description: 'Automatically flag and remove content containing hate speech patterns.', active: true },
  { id: 2, name: 'Spam Prevention', description: 'Limit message frequency and detect repetitive automated content.', active: true },
  { id: 3, name: 'NSFW Filtering', description: 'Use AI vision to detect and blur sexually explicit imagery.', active: false },
];

const PolicyEnforcement = () => {
  const [policies, setPolicies] = useState(initialPolicies);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPolicy, setNewPolicy] = useState({ name: '', description: '' });

  const togglePolicy = (id: number) => {
    setPolicies(prev => prev.map(p => {
      if (p.id === id) {
        const newState = !p.active;
        toast.success(`${p.name} is now ${newState ? 'enabled' : 'disabled'}`);
        return { ...p, active: newState };
      }
      return p;
    }));
  };

  const handleCreatePolicy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPolicy.name || !newPolicy.description) {
      toast.error("Please fill in all fields");
      return;
    }
    const policy = {
      id: Date.now(),
      name: newPolicy.name,
      description: newPolicy.description,
      active: true
    };
    setPolicies([policy, ...policies]);
    setNewPolicy({ name: '', description: '' });
    setIsDialogOpen(false);
    toast.success("New policy created successfully");
  };

  const deletePolicy = (id: number) => {
    setPolicies(policies.filter(p => p.id !== id));
    toast.error("Policy deleted");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Policy Enforcement</h1>
          <p className="text-slate-500">Configure and manage automated safety rules.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-slate-900 hover:bg-slate-800 gap-2 rounded-2xl h-11 px-6 w-full sm:w-auto">
              <Plus size={18} /> Create New Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-3xl">
            <form onSubmit={handleCreatePolicy}>
              <DialogHeader>
                <DialogTitle>Create New Policy</DialogTitle>
                <DialogDescription>
                  Define a new automated safety rule for your platform.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Policy Name</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g. Fraud Detection" 
                    value={newPolicy.name}
                    onChange={(e) => setNewPolicy({...newPolicy, name: e.target.value})}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe what this policy does..." 
                    value={newPolicy.description}
                    onChange={(e) => setNewPolicy({...newPolicy, description: e.target.value})}
                    className="rounded-xl min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-slate-900 rounded-xl">Save Policy</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {policies.map((policy) => (
          <Card key={policy.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{policy.name}</h3>
                    <p className="text-slate-500 mt-1 text-sm leading-relaxed">{policy.description}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <button 
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                        onClick={() => toast.info(`Opening documentation for ${policy.name}`)}
                      >
                        <FileText size={14} /> Documentation
                      </button>
                      <button 
                        className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1"
                        onClick={() => toast.info(`Loading audit logs for ${policy.name}`)}
                      >
                        <Info size={14} /> Audit Logs
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:flex-col md:items-end gap-4 pt-4 md:pt-0 border-t md:border-none border-slate-50">
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id={`policy-${policy.id}`} 
                      checked={policy.active} 
                      onCheckedChange={() => togglePolicy(policy.id)}
                    />
                    <Label htmlFor={`policy-${policy.id}`} className="text-sm font-bold">
                      {policy.active ? 'Active' : 'Disabled'}
                    </Label>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-900 rounded-xl" onClick={() => toast.info("Edit mode enabled")}>Edit</Button>
                    <Button variant="ghost" size="sm" className="text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl" onClick={() => deletePolicy(policy.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
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