"use client";

import React, { useState } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xojpbzlo", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LandingLayout>
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in touch with <span className="text-blue-500">Guardian AI</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have questions about our safety infrastructure? Our team is here to help you secure your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-[#0F172A] p-8 rounded-[2.5rem] border border-[#1E293B]">
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Support', value: 'support@guardianai.co.in' },
                    { icon: Mail, label: 'General Inquiries', value: 'info@guardianai.co.in' },
                    { icon: MapPin, label: 'Global Presence', value: 'India • Europe • USA' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-center shrink-0">
                        <item.icon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-lg font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] p-8 md:p-12 rounded-[2.5rem] border border-[#1E293B] shadow-xl shadow-blue-900/5">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-blue-500" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-slate-400 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="full-name" className="text-white">Full Name</Label>
                      <Input id="full-name" name="name" placeholder="John Doe" required className="rounded-xl h-12 bg-[#020617] border-[#1E293B] text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Work Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required className="rounded-xl h-12 bg-[#020617] border-[#1E293B] text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required className="rounded-xl h-12 bg-[#020617] border-[#1E293B] text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us more..." required className="rounded-xl min-h-[150px] bg-[#020617] border-[#1E293B] text-white" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-xl text-lg font-bold gap-2 shadow-lg shadow-blue-900/20">
                    {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Contact;