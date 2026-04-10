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
  Info,
  Copy,
  RefreshCw,
  Search,
  Terminal,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';
import { toast } from "sonner";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // --- Comprehensive State Management ---
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('guardian_settings');
    return saved ? JSON.parse(saved) : {
      profile: {
        name: 'John Doe',
        email: 'john.doe@guardian-ai.com',
        company: 'Guardian Tech',
        orgType: 'Enterprise',
        timezone: 'UTC+5:30 (IST)',
        language: 'English'
      },
      preferences: {
        landingPage: 'Dashboard',
        theme: 'Dark',
        layout: 'Grid',
        widgets: {
          alerts: true,
          activity: true,
          aiChat: true,
          safetyScan: true
        }
      },
      security: {
        twoFactor: true,
        backupEmail: 'recovery@guardian-ai.com'
      },
      billing: {
        plan: 'Pro',
        cycle: 'monthly',
        autoRenew: true,
        coupon: ''
      },
      team: [
        { id: 1, name: 'John Doe', email: 'john@guardian.ai', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Sarah Chen', email: 'sarah@guardian.ai', role: 'Analyst', status: 'Active' },
        { id: 3, name: 'Mike Ross', email: 'mike@guardian.ai', role: 'Viewer', status: 'Suspended' },
      ],
      ai: {
        model: 'Advanced',
        sensitivity: 65,
        threshold: 85,
        autoMod: true,
        autoActions: {
          remove: true,
          flag: true,
          shadowBan: false
        },
        policies: {
          hateSpeech: true,
          nsfw: true,
          spam: true,
          fraud: true,
          violence: false
        },
        customRules: [
          { id: 1, keyword: 'scam', action: 'Remove' }
        ]
      },
      system: {
        apiKey: 'sk_live_' + Math.random().toString(36).substring(2, 15),
        region: 'India',
        retention: '30',
        gdpr: true,
        integrations: {
          slack: true,
          discord: false,
          zapier: false,
          shopify: false
        }
      }
    };
  });

  // Persist settings on change
  useEffect(() => {
    localStorage.setItem('guardian_settings', JSON.stringify(settings));
  }, [settings]);

  // --- Handlers ---
  const updateNested = (path: string, value: any) => {
    const keys = path.split('.');
    setSettings((prev: any) => {
      const next = { ...prev };
      let current = next;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const handleSave = (section: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${section} settings saved successfully`);
    }, 600);
  };

  const handleRegenerateKey = () => {
    const newKey = 'sk_live_' + Math.random().toString(36).substring(2, 15);
    updateNested('system.apiKey', newKey);
    toast.success("New API Key generated");
  };

  const handleAddRule = () => {
    const keyword = prompt("Enter keyword to filter:");
    if (!keyword) return;
    const action = prompt("Enter action (Remove/Flag):", "Remove");
    const newRule = { id: Date.now(), keyword, action: action || 'Remove' };
    updateNested('ai.customRules', [...settings.ai.customRules, newRule]);
    toast.success(`Rule added for "${keyword}"`);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('invite-email') as HTMLInputElement).value;
    const role = (form.elements.namedItem('invite-role') as HTMLSelectElement).value;
    
    if (!email) return;
    
    const newMember = {
      id: Date.now(),
      name: email.split('@')[0],
      email,
      role,
      status: 'Active'
    };
    
    updateNested('team', [...settings.team, newMember]);
    form.reset();
    toast.success(`Invitation sent to ${email}`);
  };

  const handleRemoveMember = (id: number) => {
    updateNested('team', settings.team.filter((m: any) => m.id !== id));
    toast.error("Team member removed");
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Full Name</Label>
                      <Input 
                        value={settings.profile.name} 
                        onChange={e => updateNested('profile.name', e.target.value)} 
                        className="bg-[#020617] border-[#1E293B] text-white rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Email Address</Label>
                      <div className="relative">
                        <Input value={settings.profile.email} readOnly className="bg-[#020617] border-[#1E293B] text-white rounded-xl pr-20" />
                        <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Verified</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Company Name</Label>
                      <Input 
                        value={settings.profile.company} 
                        onChange={e => updateNested('profile.company', e.target.value)} 
                        className="bg-[#020617] border-[#1E293B] text-white rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Organization Type</Label>
                      <Select 
                        value={settings.profile.orgType} 
                        onValueChange={v => updateNested('profile.orgType', v)}
                      >
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue />
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
                  <CardTitle className="text-white">Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white">Time Zone</Label>
                      <Select value={settings.profile.timezone} onValueChange={v => updateNested('profile.timezone', v)}>
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                          <SelectItem value="UTC+5:30 (IST)">UTC+5:30 (IST)</SelectItem>
                          <SelectItem value="UTC-8:00 (PST)">UTC-8:00 (PST)</SelectItem>
                          <SelectItem value="UTC+0:00 (GMT)">UTC+0:00 (GMT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Language</Label>
                      <Select value={settings.profile.language} onValueChange={v => updateNested('profile.language', v)}>
                        <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Hindi">Hindi</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Dashboard Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Default Landing Page</p>
                      <p className="text-xs text-slate-500">Choose which page opens first.</p>
                    </div>
                    <Select value={settings.preferences.landingPage} onValueChange={v => updateNested('preferences.landingPage', v)}>
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
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Layout Style</p>
                      <p className="text-xs text-slate-500">Switch between grid and list views.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#020617] p-1 rounded-xl border border-[#1E293B]">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={settings.preferences.layout === 'Grid' ? "bg-blue-600 text-white rounded-lg" : "text-slate-400"}
                        onClick={() => updateNested('preferences.layout', 'Grid')}
                      >
                        <LayoutGrid size={16} className="mr-2" /> Grid
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={settings.preferences.layout === 'List' ? "bg-blue-600 text-white rounded-lg" : "text-slate-400"}
                        onClick={() => updateNested('preferences.layout', 'List')}
                      >
                        <ListIcon size={16} className="mr-2" /> List
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-[#1E293B]">
                    <p className="text-sm font-bold text-white uppercase tracking-widest">Active Widgets</p>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(settings.preferences.widgets).map(([key, val]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-[#020617] rounded-xl border border-[#1E293B]">
                          <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <Switch checked={val as boolean} onCheckedChange={v => updateNested(`preferences.widgets.${key}`, v)} />
                        </div>
                      ))}
                    </div>
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
                    {settings.profile.name.substring(0, 2).toUpperCase()}
                  </div>
                  <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl">Change Photo</Button>
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
                    <Button onClick={() => toast.success("Password updated")} className="bg-blue-600 hover:bg-blue-700 rounded-xl">Update Password</Button>
                  </div>
                  <div className="pt-6 border-t border-[#1E293B] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-blue-400" />
                      <div>
                        <p className="text-white font-medium">Two-Factor Authentication</p>
                        <p className="text-xs text-slate-500">Secure your account with 2FA.</p>
                      </div>
                    </div>
                    <Switch 
                      checked={settings.security.twoFactor} 
                      onCheckedChange={v => updateNested('security.twoFactor', v)} 
                    />
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
                  <CardTitle className="text-white">Recovery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Backup Email</Label>
                    <Input 
                      value={settings.security.backupEmail} 
                      onChange={e => updateNested('security.backupEmail', e.target.value)}
                      className="bg-[#020617] border-[#1E293B] text-white rounded-xl" 
                    />
                  </div>
                  <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl gap-2">
                    <Download size={16} /> Download Recovery Codes
                  </Button>
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
                    <Badge className="bg-white/20 text-white border-none mb-2">{settings.billing.plan} Plan</Badge>
                    <h2 className="text-3xl font-black">
                      {settings.billing.cycle === 'monthly' ? '$149' : '$1,490'}
                      <span className="text-lg font-normal opacity-70">/{settings.billing.cycle === 'monthly' ? 'month' : 'year'}</span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-xl font-bold">Upgrade Plan</Button>
                    <div className="flex items-center gap-2 bg-black/20 p-1 rounded-lg">
                      <button 
                        onClick={() => updateNested('billing.cycle', 'monthly')}
                        className={`px-3 py-1 text-[10px] font-bold rounded ${settings.billing.cycle === 'monthly' ? 'bg-white text-blue-600' : 'text-white'}`}
                      >
                        MONTHLY
                      </button>
                      <button 
                        onClick={() => updateNested('billing.cycle', 'yearly')}
                        className={`px-3 py-1 text-[10px] font-bold rounded ${settings.billing.cycle === 'yearly' ? 'bg-white text-blue-600' : 'text-white'}`}
                      >
                        YEARLY
                      </button>
                    </div>
                  </div>
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
                  <Button variant="ghost" className="w-full text-slate-500 hover:text-white text-xs">Pay via UPI (India Only)</Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Extras</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-white">Auto-Renew</Label>
                    <Switch 
                      checked={settings.billing.autoRenew} 
                      onCheckedChange={v => updateNested('billing.autoRenew', v)} 
                    />
                  </div>
                  <div className="pt-4 border-t border-[#1E293B]">
                    <Label className="text-xs text-slate-500 mb-2 block">Coupon Code</Label>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="SAVE20" 
                        value={settings.billing.coupon}
                        onChange={e => updateNested('billing.coupon', e.target.value)}
                        className="bg-[#020617] border-[#1E293B] text-white rounded-xl" 
                      />
                      <Button variant="secondary" className="rounded-xl" onClick={() => toast.success("Coupon applied!")}>Apply</Button>
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
                <CardHeader>
                  <CardTitle className="text-white">Team Members</CardTitle>
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
                      {settings.team.map((member: any) => (
                        <TableRow key={member.id} className="border-[#1E293B] hover:bg-[#1E293B]/30">
                          <TableCell>
                            <div>
                              <p className="text-white text-sm font-bold">{member.name}</p>
                              <p className="text-xs text-slate-500">{member.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select 
                              value={member.role} 
                              onValueChange={v => {
                                const updated = settings.team.map((m: any) => m.id === member.id ? { ...m, role: v } : m);
                                updateNested('team', updated);
                                toast.success(`Role updated for ${member.name}`);
                              }}
                            >
                              <SelectTrigger className="h-8 w-28 bg-transparent border-[#1E293B] text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                                <SelectItem value="Admin">Admin</SelectItem>
                                <SelectItem value="Analyst">Analyst</SelectItem>
                                <SelectItem value="Viewer">Viewer</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              className={member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 cursor-pointer' : 'bg-rose-500/10 text-rose-400 cursor-pointer'}
                              onClick={() => {
                                const updated = settings.team.map((m: any) => m.id === member.id ? { ...m, status: m.status === 'Active' ? 'Suspended' : 'Active' } : m);
                                updateNested('team', updated);
                                toast.info(`Status changed for ${member.name}`);
                              }}
                            >
                              {member.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-rose-400 hover:bg-rose-500/10 rounded-lg"
                              onClick={() => handleRemoveMember(member.id)}
                            >
                              <Trash2 size={14} />
                            </Button>
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
                <CardContent>
                  <form onSubmit={handleInvite} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Email Address</Label>
                      <Input name="invite-email" placeholder="colleague@company.com" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Role</Label>
                      <Select name="invite-role" defaultValue="Analyst">
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
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">Send Invite</Button>
                  </form>
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
                      <div 
                        key={m} 
                        onClick={() => updateNested('ai.model', m)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${settings.ai.model === m ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-[#020617] border-[#1E293B] text-slate-400 hover:border-slate-700'}`}
                      >
                        <p className="font-bold mb-1">{m} Model</p>
                        <p className="text-[10px] opacity-70">{m === 'Advanced' ? 'Best for complex threats' : 'Standard protection'}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-white">Global Sensitivity</Label>
                        <Badge className="bg-blue-600">{settings.ai.sensitivity}%</Badge>
                      </div>
                      <Slider 
                        value={[settings.ai.sensitivity]} 
                        max={100} 
                        step={1} 
                        onValueChange={(v) => updateNested('ai.sensitivity', v[0])}
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
                        <Badge className="bg-indigo-600">{settings.ai.threshold}%</Badge>
                      </div>
                      <Slider 
                        value={[settings.ai.threshold]} 
                        max={100} 
                        step={1} 
                        onValueChange={(v) => updateNested('ai.threshold', v[0])}
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
                  {Object.entries(settings.ai.policies).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-400">
                          <Zap size={16} />
                        </div>
                        <span className="text-sm font-bold text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                      <Switch checked={val as boolean} onCheckedChange={(v) => updateNested(`ai.policies.${key}`, v)} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Custom Rules Engine</CardTitle>
                  <Button variant="outline" size="sm" className="rounded-xl border-[#1E293B] text-white" onClick={handleAddRule}>
                    <Plus size={14} className="mr-2" /> Add Rule
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-[#020617]">
                      <TableRow className="border-[#1E293B]">
                        <TableHead className="text-slate-500">IF Keyword</TableHead>
                        <TableHead className="text-slate-500">THEN Action</TableHead>
                        <TableHead className="text-slate-500 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {settings.ai.customRules.map((rule: any) => (
                        <TableRow key={rule.id} className="border-[#1E293B]">
                          <TableCell className="text-white font-mono text-xs">"{rule.keyword}"</TableCell>
                          <TableCell><Badge variant="outline" className="border-blue-500/30 text-blue-400">{rule.action}</Badge></TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-rose-400"
                              onClick={() => updateNested('ai.customRules', settings.ai.customRules.filter((r: any) => r.id !== rule.id))}
                            >
                              <Trash2 size={14} />
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
                  <CardTitle className="text-white">Automation Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-white font-bold">Auto Moderation</Label>
                    <Switch 
                      checked={settings.ai.autoMod} 
                      onCheckedChange={v => updateNested('ai.autoMod', v)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-2">Auto Actions</p>
                    {Object.entries(settings.ai.autoActions).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between py-2">
                        <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <Switch checked={val as boolean} onCheckedChange={v => updateNested(`ai.autoActions.${key}`, v)} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Training & Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl gap-2" onClick={() => toast.info("Dataset upload initiated")}>
                    <Database size={16} /> Upload Dataset
                  </Button>
                  <Button variant="outline" className="w-full border-[#1E293B] text-white rounded-xl" onClick={() => {
                    toast.loading("Training model...");
                    setTimeout(() => {
                      toast.dismiss();
                      toast.success("Model training complete!");
                    }, 3000);
                  }}>
                    Train Model
                  </Button>
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
                      <Input value={settings.system.apiKey} readOnly className="bg-[#020617] border-[#1E293B] text-white rounded-xl font-mono" />
                      <Button variant="secondary" className="rounded-xl" onClick={() => {
                        navigator.clipboard.writeText(settings.system.apiKey);
                        toast.success("API Key copied!");
                      }}>
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl" onClick={handleRegenerateKey}>
                      <RefreshCw size={16} className="mr-2" /> Regenerate Key
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Connected Apps</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'slack', name: 'Slack', icon: Slack, color: 'text-purple-400' },
                    { id: 'discord', name: 'Discord', icon: MessageSquare, color: 'text-indigo-400' },
                    { id: 'zapier', name: 'Zapier', icon: Zap, color: 'text-orange-400' },
                    { id: 'shopify', name: 'Shopify', icon: Database, color: 'text-emerald-400' },
                  ].map((app) => (
                    <div key={app.id} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <app.icon className={app.color} size={20} />
                        <span className="text-sm font-bold text-white">{app.name}</span>
                      </div>
                      <Button 
                        variant={(settings.system.integrations as any)[app.id] ? 'secondary' : 'outline'} 
                        size="sm" 
                        className="rounded-lg h-8 text-xs"
                        onClick={() => {
                          const current = (settings.system.integrations as any)[app.id];
                          updateNested(`system.integrations.${app.id}`, !current);
                          toast.success(`${app.name} ${!current ? 'connected' : 'disconnected'}`);
                        }}
                      >
                        {(settings.system.integrations as any)[app.id] ? 'Connected' : 'Connect'}
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
                      <Select value={settings.system.region} onValueChange={v => updateNested('system.region', v)}>
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
                      <Select value={settings.system.retention} onValueChange={v => updateNested('system.retention', v)}>
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
                    <Switch 
                      checked={settings.system.gdpr} 
                      onCheckedChange={v => updateNested('system.gdpr', v)} 
                    />
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
                  <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl" onClick={() => toast.info("Usage report exported")}>
                    Export Usage Data
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white">Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl gap-2" onClick={() => toast.success("Support ticket created")}>
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