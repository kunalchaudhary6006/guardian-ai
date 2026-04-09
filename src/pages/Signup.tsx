"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

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

    // Simulate sending confirmation email
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      
      // Store mock user data
      const mockUser = { email, name: firstName, confirmed: false };
      localStorage.setItem('pending_user', JSON.stringify(mockUser));
      
      toast.success(`Confirmation email sent to ${email}!`, {
        description: "Please check your inbox to verify your account.",
        duration: 5000,
      });
    }, 1500);
  };

  const handleConfirmPrototype = () => {
    const pendingUser = JSON.parse(localStorage.getItem('pending_user') || '{}');
    const confirmedUser = { ...pendingUser, confirmed: true };
    
    localStorage.setItem('user', JSON.stringify(confirmedUser));
    localStorage.removeItem('pending_user');
    
    toast.success("Email verified successfully!");
    navigate('/dashboard');
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
            We've sent a confirmation link to your email address. Since this is a prototype, you can click the button below to simulate the verification.
          </p>
          <Button onClick={handleConfirmPrototype} className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-xl">
            Verify Email (Prototype)
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
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <span className="font-bold text-2xl text-slate-900">Guardian AI</span>
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