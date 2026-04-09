"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Bell, Globe, Key, User } from 'lucide-react';

const Settings = () => {
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
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@guardian-ai.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Input id="bio" defaultValue="Senior Security Analyst specializing in AI-driven threat detection." />
                  </div>
                  <Button className="bg-slate-900 hover:bg-slate-800">Save Changes</Button>
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
                      <Button variant="outline" className="w-full justify-between">English (US) <Globe size={16} /></Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Button variant="outline" className="w-full justify-between">UTC-05:00 (EST)</Button>
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
                <Switch checked={true} />
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
                <Button className="bg-slate-900 hover:bg-slate-800">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;