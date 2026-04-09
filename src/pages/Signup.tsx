"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const firstName = formData.get('first-name') as string;

    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      
      const mockUser = { email, name: firstName, confirmed: false };
      localStorage.setItem('pending_user', JSON.stringify(mockUser));
      
      const newEmail = {
        id: Math.random().toString(36).substr(2, 9),
        subject: "Verify your Guardian AI account",
        from: "no-reply@guardian-ai.com",
        to: email,
        body: `Hi ${firstName},\n\nWelcome to Guardian AI! Please click the button below to verify your email address and complete your registration.`,
        timestamp: new Date().toLocaleTimeString(),
        type: 'verification'
      };
      
      const existingEmails = JSON.parse(localStorage.getItem('mock_emails') || '[]');
      localStorage.setItem('mock_emails', JSON.stringify([newEmail, ...existingEmails]));
      
      toast.success(`Confirmation email sent to ${email}!`);
    }, 1500);
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-primary" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Check your email</h1>
          <p className="text-slate-600 mb-8">
            We've sent a confirmation link to your email address. You can view it in our prototype inbox.
          </p>
          <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-xl gap-2">
            <Link to="/inbox">Open Prototype Inbox <ExternalLink size={18} /></Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <Link to="/" className="inline-flex mb-6">
              <Logo size="lg" />
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Create your account</h1>
            <p className="text-slate-500 mt-2">Start securing your platform in minutes.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" name="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" name="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-xl mt-4">
                {isLoading ? "Sending Email..." : "Create Account"} <ArrowRight className="ml-2" size={18} />
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-600">
                Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-slate-900 p-12 items-center justify-center text-white">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-8 leading-tight">Join 1,000+ companies building safer digital spaces.</h2>
          <div className="space-y-6">
            {[
              'Real-time content moderation',
              'Advanced threat detection',
              'Customizable safety policies',
              'Enterprise-grade security'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={16} />
                </div>
                <span className="text-lg text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;