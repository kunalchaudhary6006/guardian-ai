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
      
      // Trigger storage event for other components (like Header) to update
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
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account preferences and system configurations.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 p-1 h-auto gap-1">
          <TabsTrigger value="general" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-md">General</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-md">Security</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-md">Notifications</TabsTrigger>
          <TabsTrigger value="api" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-md">API Access</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal details and public profile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input 
                        id="first-name" 
                        value={profile.firstName} 
                        onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input 
                        id="last-name" 
                        value={profile.lastName} 
                        onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={profile.email} 
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Input 
                      id="bio" 
                      value={profile.bio} 
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    />
                  </div>
                  <Button 
                    className="bg-slate-900 hover:bg-slate-800" 
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Regional Settings</CardTitle>
                  <CardDescription>Configure your timezone and language preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {language} <Globe size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full min-w-[200px] rounded-xl">
                          <DropdownMenuItem onClick={() => setLanguage("English (US)")}>English (US)</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("Spanish")}>Spanish</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("French")}>French</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setLanguage("German")}>German</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {timezone}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full min-w-[200px] rounded-xl">
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
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm">Account Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl text-emerald-700">
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
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Security Preferences</CardTitle>
              <CardDescription>Manage your password and two-factor authentication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Key className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Two-Factor Authentication</p>
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
                  <Label>Current Password</Label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" />
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800" onClick={handleUpdatePassword}>Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;