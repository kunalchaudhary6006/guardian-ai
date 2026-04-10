"use client";

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  User, 
  Shield, 
  CreditCard, 
  Users, 
  Brain, 
  Settings as SettingsIcon,
  Globe,
  Key,
  Smartphone,
  Download,
  Plus,
  Trash2,
  Slack,
  MessageSquare,
  Zap,
  Database,
  FileText,
  LifeBuoy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import { toast } from "sonner";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // --- State for various sections ---
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@guardian-ai.com',
    company: 'Guardian Tech',
    orgType: 'Enterprise'
  });

  const [aiSettings, setAiSettings] = useState({
    sensitivity: 50,
    threshold: 85,
    autoMod: true,
    policies: {
      hateSpeech: true,
      nsfw: true,
      spam: true,
      fraud: true,
      violence: false
    }
  });

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // --- Handlers ---
  const handleSave = (section: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${section} settings updated successfully`);
    }, 800);
  };

  const handleToggle = (key: string, val: boolean) => {
    toast.info(`${key} is now ${val ? 'enabled' : 'disabled'}`);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <p className="text-slate-400">Configure your account, security, AI models, and system integrations.</p>
      </div>

      <Tabs defaultValue="account" className="space-y-8">
        <div className="overflow-x-auto pb-2">
          <TabsList className="bg-[#0F172A] border border-[#1E293B] p-1 h-auto gap-1 inline-flex">
            <TabsTrigger value="account" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <User size={16} /> Account
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <Shield size={16} /> Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <CreditCard size={16} /> Billing
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <Users size={16} /> Team
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <Brain size={16} /> AI Control
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2.5 rounded-xl text-slate-400 gap-2">
              <SettingsIcon size={16} /> System
            </TabsTrigger>
          </TabsList>
        </div>

        {/* 1. ACCOUNT & PROFILE */}
        <TabsContent value="account" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Profile Information</CardTitle>
                  <CardDescription className="text-slate-400">Manage your personal and organizational details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Full Name</Label>
                      <Input value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Email Address</Label>
                      <div className="relative">
                        <Input value={profile.email} readOnly className="bg-[#020617] border-[#1E293B] text-white rounded-xl pr-20" />
                        <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Verified</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Company Name</Label>
                      <Input value={profile.company} onChange={e => setProfile({...profile, company: e.target.value})} className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Organization Type</Label>
                      <Select defaultValue={profile.orgType}>
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                          <SelectItem value="Startup">Startup</SelectItem>
                          <SelectItem value="Enterprise">Enterprise</SelectItem>
                          <SelectItem value="Agency">Agency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={() => handleSave('Profile')} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Save Changes</Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Dashboard Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Theme Mode</p>
                      <p className="text-xs text-slate-500">Switch between dark and light interface.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#020617] p-1 rounded-xl border border-[#1E293B]">
                      <Button variant="ghost" size="sm" className="bg-blue-600 text-white rounded-lg">Dark</Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 rounded-lg" onClick={() => toast.info("Light mode coming soon!")}>Light</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Default Landing Page</p>
                      <p className="text-xs text-slate-500">Choose which page opens first.</p>
                    </div>
                    <Select defaultValue="Dashboard">
                      <SelectTrigger className="w-40 bg-[#020617] border-[#1E293B] text-white rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                        <SelectItem value="Dashboard">Dashboard</SelectItem>
                        <SelectItem value="Analytics">Analytics</SelectItem>
                        <SelectItem value="Moderation">Moderation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Profile Picture</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-blue-900/20">
                    JD
                  </div>
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1 border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl">Upload</Button>
                    <Button variant="ghost" className="text-rose-400 hover:bg-rose-500/10 rounded-xl"><Trash2 size={18} /></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 2. SECURITY & ACCESS */}
        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white">New Password</Label>
                        <Input type="password" placeholder="••••••••" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">Confirm Password</Label>
                        <Input type="password" placeholder="••••••••" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-emerald-500 rounded-full" />
                      <div className="flex-1 h-1.5 bg-emerald-500 rounded-full" />
                      <div className="flex-1 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">Strong</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-blue-400" />
                      <div>
                        <p className="text-white font-medium">Two-Factor Authentication</p>
                        <p className="text-xs text-slate-500">Secure your account with 2FA.</p>
                      </div>
                    </div>
                    <Switch defaultChecked onCheckedChange={(v) => handleToggle('2FA', v)} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Login Activity</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-[#020617]">
                      <TableRow className="border-[#1E293B] hover:bg-transparent">
                        <TableHead className="text-slate-500">Date</TableHead>
                        <TableHead className="text-slate-500">Device</TableHead>
                        <TableHead className="text-slate-500">IP Address</TableHead>
                        <TableHead className="text-slate-500">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { date: '2024-03-15 14:22', device: 'Chrome / macOS', ip: '192.168.1.1', status: 'Success' },
                        { date: '2024-03-14 09:10', device: 'Safari / iPhone', ip: '172.16.0.45', status: 'Success' },
                        { date: '2024-03-12 22:05', device: 'Firefox / Windows', ip: '10.0.0.12', status: 'Failed' },
                      ].map((log, i) => (
                        <TableRow key={i} className="border-[#1E293B] hover:bg-[#1E293B]/30">
                          <TableCell className="text-slate-300 text-xs">{log.date}</TableCell>
                          <TableCell className="text-white text-xs font-medium">{log.device}</TableCell>
                          <TableCell className="text-slate-400 text-xs">{log.ip}</TableCell>
                          <TableCell>
                            <Badge className={log.status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}>
                              {log.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Active Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                    <p className="text-xs font-bold text-blue-400 uppercase mb-1">Current Session</p>
                    <p className="text-sm text-white font-medium">MacBook Pro • San Francisco, US</p>
                    <p className="text-[10px] text-slate-500">Active now</p>
                  </div>
                  <Button variant="outline" className="w-full border-rose-500/30 text-rose-400 hover:bg-rose-500/10 rounded-xl">Logout All Devices</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 3. BILLING & SUBSCRIPTION */}
        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <Badge className="bg-white/20 text-white border-none mb-2">Pro Plan</Badge>
                    <h2 className="text-3xl font-black">$149<span className="text-lg font-normal opacity-70">/month</span></h2>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-xl font-bold">Upgrade Plan</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['500K Scans', 'Advanced AI', 'API Access', 'Priority Support'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-blue-200" /> {f}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Billing History</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-[#020617]">
                      <TableRow className="border-[#1E293B] hover:bg-transparent">
                        <TableHead className="text-slate-500">Date</TableHead>
                        <TableHead className="text-slate-500">Amount</TableHead>
                        <TableHead className="text-slate-500">Status</TableHead>
                        <TableHead className="text-slate-500 text-right">Invoice</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { date: 'Mar 01, 2024', amount: '$149.00', status: 'Paid' },
                        { date: 'Feb 01, 2024', amount: '$149.00', status: 'Paid' },
                        { date: 'Jan 01, 2024', amount: '$149.00', status: 'Paid' },
                      ].map((inv, i) => (
                        <TableRow key={i} className="border-[#1E293B] hover:bg-[#1E293B]/30">
                          <TableCell className="text-slate-300 text-xs">{inv.date}</TableCell>
                          <TableCell className="text-white text-xs font-bold">{inv.amount}</TableCell>
                          <TableCell><Badge className="bg-emerald-500/10 text-emerald-400">Paid</Badge></TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-500/10 rounded-lg">
                              <Download size={14} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-[#1E293B] bg-[#020617] rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white">VISA</div>
                      <div>
                        <p className="text-sm text-white font-medium">•••• 4242</p>
                        <p className="text-[10px] text-slate-500">Expires 12/26</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-400">Default</Badge>
                  </div>
                  <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl gap-2">
                    <Plus size={16} /> Add New Card
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Extras</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-white">Auto-Renew</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="pt-4 border-t border-[#1E293B]">
                    <Label className="text-xs text-slate-500 mb-2 block">Coupon Code</Label>
                    <div className="flex gap-2">
                      <Input placeholder="SAVE20" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                      <Button variant="secondary" className="rounded-xl">Apply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 4. TEAM & PERMISSIONS */}
        <TabsContent value="team" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Team Members</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2">
                    <Plus size={16} /> Invite Member
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-[#020617]">
                      <TableRow className="border-[#1E293B] hover:bg-transparent">
                        <TableHead className="text-slate-500">Name</TableHead>
                        <TableHead className="text-slate-500">Role</TableHead>
                        <TableHead className="text-slate-500">Status</TableHead>
                        <TableHead className="text-slate-500 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: 'John Doe', email: 'john@guardian.ai', role: 'Admin', status: 'Active' },
                        { name: 'Sarah Chen', email: 'sarah@guardian.ai', role: 'Analyst', status: 'Active' },
                        { name: 'Mike Ross', email: 'mike@guardian.ai', role: 'Viewer', status: 'Suspended' },
                      ].map((member, i) => (
                        <TableRow key={i} className="border-[#1E293B] hover:bg-[#1E293B]/30">
                          <TableCell>
                            <div>
                              <p className="text-white text-sm font-bold">{member.name}</p>
                              <p className="text-xs text-slate-500">{member.email}</p>
                            </div>
                          </TableCell>
                          <TableCell><Badge variant="outline" className="border-[#1E293B] text-slate-400">{member.role}</Badge></TableCell>
                          <TableCell>
                            <Badge className={member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}>
                              {member.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white rounded-lg">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Role Permissions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-[#020617]">
                      <TableRow className="border-[#1E293B] hover:bg-transparent">
                        <TableHead className="text-slate-500">Feature</TableHead>
                        <TableHead className="text-slate-500 text-center">Admin</TableHead>
                        <TableHead className="text-slate-500 text-center">Analyst</TableHead>
                        <TableHead className="text-slate-500 text-center">Viewer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { f: 'View Dashboard', a: true, an: true, v: true },
                        { f: 'Moderate Content', a: true, an: true, v: false },
                        { f: 'Change Settings', a: true, an: false, v: false },
                        { f: 'Billing Access', a: true, an: false, v: false },
                      ].map((row, i) => (
                        <TableRow key={i} className="border-[#1E293B] hover:bg-[#1E293B]/30">
                          <TableCell className="text-white text-sm font-medium">{row.f}</TableCell>
                          <TableCell className="text-center">{row.a ? <CheckCircle2 className="mx-auto text-emerald-500" size={18} /> : <XCircle className="mx-auto text-rose-500" size={18} />}</TableCell>
                          <TableCell className="text-center">{row.an ? <CheckCircle2 className="mx-auto text-emerald-500" size={18} /> : <XCircle className="mx-auto text-rose-500" size={18} />}</TableCell>
                          <TableCell className="text-center">{row.v ? <CheckCircle2 className="mx-auto text-emerald-500" size={18} /> : <XCircle className="mx-auto text-rose-500" size={18} />}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Invite System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Email Address</Label>
                    <Input placeholder="colleague@company.com" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Role</Label>
                    <Select defaultValue="Analyst">
                      <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Analyst">Analyst</SelectItem>
                        <SelectItem value="Viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">Send Invite</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 5. AI CONTROL CENTER */}
        <TabsContent value="ai" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Model Selection & Sensitivity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Default', 'Advanced', 'Custom'].map((m) => (
                      <div key={m} className={`p-4 rounded-2xl border cursor-pointer transition-all ${m === 'Advanced' ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-[#020617] border-[#1E293B] text-slate-400 hover:border-slate-700'}`}>
                        <p className="font-bold mb-1">{m} Model</p>
                        <p className="text-[10px] opacity-70">{m === 'Advanced' ? 'Best for complex threats' : 'Standard protection'}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-white">Global Sensitivity</Label>
                        <Badge className="bg-blue-600">{aiSettings.sensitivity}%</Badge>
                      </div>
                      <Slider 
                        defaultValue={[aiSettings.sensitivity]} 
                        max={100} 
                        step={1} 
                        onValueChange={(v) => setAiSettings({...aiSettings, sensitivity: v[0]})}
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <span>Lenient</span>
                        <span>Balanced</span>
                        <span>Strict</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Label className="text-white">Confidence Threshold</Label>
                          <Info size={14} className="text-slate-500" />
                        </div>
                        <Badge className="bg-indigo-600">{aiSettings.threshold}%</Badge>
                      </div>
                      <Slider 
                        defaultValue={[aiSettings.threshold]} 
                        max={100} 
                        step={1} 
                        onValueChange={(v) => setAiSettings({...aiSettings, threshold: v[0]})}
                      />
                      <p className="text-[10px] text-slate-500 italic">AI will act only if confidence exceeds this threshold.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Moderation Policies</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(aiSettings.policies).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400">
                          <Zap size={16} />
                        </div>
                        <span className="text-sm font-bold text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                      <Switch checked={val} onCheckedChange={(v) => handleToggle(key, v)} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Automation Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-white font-bold">Auto Moderation</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-2">Auto Actions</p>
                    {['Auto Remove', 'Auto Flag', 'Auto Shadow Ban'].map((a) => (
                      <div key={a} className="flex items-center justify-between py-2">
                        <span className="text-sm text-slate-300">{a}</span>
                        <Switch defaultChecked={a !== 'Auto Shadow Ban'} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Model Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Accuracy</span>
                    <span className="text-sm font-bold text-emerald-400">99.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">False Positives</span>
                    <span className="text-sm font-bold text-blue-400">0.02%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Detection Speed</span>
                    <span className="text-sm font-bold text-white">45ms</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 6. INTEGRATIONS & SYSTEM */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">API Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Production API Key</Label>
                    <div className="flex gap-2">
                      <Input value="sk_live_51Nf..." readOnly className="bg-[#020617] border-[#1E293B] text-white rounded-xl font-mono" />
                      <Button variant="secondary" className="rounded-xl" onClick={() => toast.success("API Key copied!")}>Copy</Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">Regenerate Key</Button>
                    <Button variant="outline" className="border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl">View Docs</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Connected Apps</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Slack', icon: Slack, status: 'Connected', color: 'text-purple-400' },
                    { name: 'Discord', icon: MessageSquare, status: 'Connect', color: 'text-indigo-400' },
                    { name: 'Zapier', icon: Zap, status: 'Connect', color: 'text-orange-400' },
                    { name: 'Shopify', icon: Database, status: 'Connect', color: 'text-emerald-400' },
                  ].map((app) => (
                    <div key={app.name} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <app.icon className={app.color} size={20} />
                        <span className="text-sm font-bold text-white">{app.name}</span>
                      </div>
                      <Button variant={app.status === 'Connected' ? 'secondary' : 'outline'} size="sm" className="rounded-lg h-8 text-xs">
                        {app.status}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Compliance & Region</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white">Data Region</Label>
                      <Select defaultValue="India">
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                          <SelectItem value="India">India 🇮🇳</SelectItem>
                          <SelectItem value="Europe">Europe 🇪🇺</SelectItem>
                          <SelectItem value="USA">USA 🇺🇸</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Data Retention</Label>
                      <Select defaultValue="30">
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                          <SelectItem value="7">7 Days</SelectItem>
                          <SelectItem value="30">30 Days</SelectItem>
                          <SelectItem value="90">90 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]">
                    <div className="flex items-center gap-2">
                      <Shield className="text-blue-400" size={18} />
                      <span className="text-sm text-white font-medium">GDPR Compliance Mode</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Usage & Quota</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Monthly Scans</span>
                      <span className="text-white font-bold">342,102 / 500,000</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[68%]" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl">View Detailed Usage</Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl gap-2">
                    <LifeBuoy size={16} /> Contact Support
                  </Button>
                  <Button variant="ghost" className="w-full text-slate-400 hover:text-white rounded-xl">Help Documentation</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;