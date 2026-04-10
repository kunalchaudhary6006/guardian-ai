"use client";

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Globe, Key } from 'lucide-react';
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Settings = () => {
  const [is2FA, setIs2FA] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("English (US)");
  const [timezone, setTimezone] = useState("UTC-05:00 (EST)");
  
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@guardian-ai.com',
    bio: 'Senior Security Analyst specializing in AI-driven threat detection.'
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      const nameParts = (parsed.name || 'John Doe').split(' ');
      setProfile({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        email: parsed.email || 'john.doe@guardian-ai.com',
        bio: parsed.bio || 'Senior Security Analyst specializing in AI-driven threat detection.'
      });
    }
  }, []);

  const handleSaveProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedUser = {
        name: `${profile.firstName} ${profile.lastName}`.trim(),
        email: profile.email,
        bio: profile.bio,
        confirmed: true
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      window.dispatchEvent(new Event('storage'));
      setIsLoading(false);
      toast.success("Profile information updated successfully");
    }, 1000);
  };

  const handleUpdatePassword = () => {
    toast.success("Password update request sent to your email");
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400">Manage your account preferences and system configurations.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-[#0F172A] border border-[#1E293B] p-1 h-auto gap-1">
          <TabsTrigger value="general" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded-md text-slate-400">General</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded-md text-slate-400">Security</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded-md text-slate-400">Notifications</TabsTrigger>
          <TabsTrigger value="api" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded-md text-slate-400">API Access</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-white">Profile Information</CardTitle>
                  <CardDescription className="text-slate-400">Update your personal details and public profile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-white">First Name</Label>
                      <Input 
                        id="first-name" 
                        value={profile.firstName} 
                        onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                        className="bg-[#020617] border-[#1E293B] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-white">Last Name</Label>
                      <Input 
                        id="last-name" 
                        value={profile.lastName} 
                        onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                        className="bg-[#020617] border-[#1E293B] text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={profile.email} 
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="bg-[#020617] border-[#1E293B] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-white">Professional Bio</Label>
                    <Input 
                      id="bio" 
                      value={profile.bio} 
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      className="bg-[#020617] border-[#1E293B] text-white"
                    />
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700" 
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-white">Regional Settings</CardTitle>
                  <CardDescription className="text-slate-400">Configure your timezone and language preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Language</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between bg-[#020617] border-[#1E293B] text-white hover:bg-[#1E293B]">
                            {language} <Globe size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full min-w-[200px] rounded-xl bg-[#0F172A] border-[#1E293B] text-white">
                          <DropdownMenuItem onClick={() => setLanguage("English (US)")}>English (US)</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("Spanish")}>Spanish</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("French")}>French</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("German")}>German</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Timezone</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between bg-[#020617] border-[#1E293B] text-white hover:bg-[#1E293B]">
                            {timezone}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full min-w-[200px] rounded-xl bg-[#0F172A] border-[#1E293B] text-white">
                          <DropdownMenuItem onClick={() => setTimezone("UTC-05:00 (EST)")}>UTC-05:00 (EST)</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTimezone("UTC+00:00 (GMT)")}>UTC+00:00 (GMT)</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTimezone("UTC+05:30 (IST)")}>UTC+05:30 (IST)</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm text-white">Account Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                    <Shield size={20} />
                    <span className="text-sm font-bold">Verified Analyst</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">Member since January 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm">
            <CardHeader>
              <CardTitle className="text-white">Security Preferences</CardTitle>
              <CardDescription className="text-slate-400">Manage your password and two-factor authentication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center shadow-sm">
                    <Key className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Two-Factor Authentication</p>
                    <p className="text-sm text-slate-500">Add an extra layer of security to your account.</p>
                  </div>
                </div>
                <Switch 
                  checked={is2FA} 
                  onCheckedChange={(val) => {
                    setIs2FA(val);
                    toast.success(`2FA has been ${val ? 'enabled' : 'disabled'}`);
                  }} 
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Current Password</Label>
                  <Input type="password" className="bg-[#020617] border-[#1E293B] text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">New Password</Label>
                  <Input type="password" className="bg-[#020617] border-[#1E293B] text-white" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleUpdatePassword}>Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;