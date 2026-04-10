"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PolicyRuleSimulator from '@/components/PolicyRuleSimulator';
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
  const [editingPolicy, setEditingPolicy] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', description: '' });

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

  const handleOpenCreate = () => {
    setEditingPolicy(null);
    setFormData({ name: '', description: '' });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (policy: any) => {
    setEditingPolicy(policy);
    setFormData({ name: policy.name, description: policy.description });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      toast.error("Please fill in all fields");
      return;
    }

    if (editingPolicy) {
      setPolicies(prev => prev.map(p => p.id === editingPolicy.id ? { ...p, ...formData } : p));
      toast.success("Policy updated successfully");
    } else {
      const policy = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        active: true
      };
      setPolicies([policy, ...policies]);
      toast.success("New policy created successfully");
    }
    
    setIsDialogOpen(false);
  };

  const deletePolicy = (id: number) => {
    setPolicies(policies.filter(p => p.id !== id));
    toast.error("Policy deleted");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Policy Enforcement</h1>
          <p className="text-slate-400">Configure and manage automated safety rules.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2 rounded-2xl h-11 px-6 w-full sm:w-auto shadow-lg shadow-blue-900/20" onClick={handleOpenCreate}>
              <Plus size={18} /> Create New Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-3xl bg-[#0F172A] border-[#1E293B] text-white">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="text-white">
                  {editingPolicy ? 'Edit Policy' : 'Create New Policy'}
                </DialogTitle>
                <DialogDescription className="text-slate-400">
                  {editingPolicy ? 'Update the details of this safety rule.' : 'Define a new automated safety rule for your platform.'}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-white">Policy Name</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g. Fraud Detection" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="rounded-xl bg-[#020617] border-[#1E293B] text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe what this policy does..." 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="rounded-xl min-h-[100px] bg-[#020617] border-[#1E293B] text-white"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                  {editingPolicy ? 'Update Policy' : 'Save Policy'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {policies.map((policy) => (
            <Card key={policy.id} className="border-[#1E293B] bg-[#0F172A] shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-center shrink-0">
                      <Shield className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{policy.name}</h3>
                      <p className="text-slate-400 mt-1 text-sm leading-relaxed">{policy.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <button 
                          className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
                          onClick={() => toast.info(`Opening documentation for ${policy.name}...`)}
                        >
                          <FileText size={14} /> Documentation
                        </button>
                        <button 
                          className="text-xs font-bold text-slate-500 hover:text-slate-300 flex items-center gap-1"
                          onClick={() => toast.info(`Loading last 50 audit logs for ${policy.name}...`)}
                        >
                          <Info size={14} /> Audit Logs
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-4 pt-4 md:pt-0 border-t md:border-none border-[#1E293B]">
                    <div className="flex items-center space-x-3">
                      <Switch 
                        id={`policy-${policy.id}`} 
                        checked={policy.active} 
                        onCheckedChange={() => togglePolicy(policy.id)}
                      />
                      <Label htmlFor={`policy-${policy.id}`} className="text-sm font-bold text-white">
                        {policy.active ? 'Active' : 'Disabled'}
                      </Label>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white rounded-xl" onClick={() => handleOpenEdit(policy)}>Edit</Button>
                      <Button variant="ghost" size="sm" className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl" onClick={() => deletePolicy(policy.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-8">
          <PolicyRuleSimulator />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PolicyEnforcement;