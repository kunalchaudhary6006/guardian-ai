"use client";

import React, { useState } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useRazorpay } from "react-razorpay";

const Pricing = () => {
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handlePayment = async (tier: any) => {
    if (tier.name === 'Enterprise') {
      toast.info("Our sales team will contact you shortly to discuss your custom requirements.");
      return;
    }

    setIsProcessing(tier.name);

    const options = {
      key: "rzp_test_YOUR_KEY_HERE",
      amount: (parseInt(tier.price.replace('$', '')) * 100).toString(),
      currency: "USD",
      name: "Guardian AI",
      description: `Subscription for ${tier.name} Plan`,
      image: "/placeholder.svg",
      handler: (res: any) => {
        toast.success("Payment Successful!", {
          description: `Transaction ID: ${res.razorpay_payment_id}`
        });
        
        localStorage.setItem('user', JSON.stringify({ 
          email: `${tier.name.toLowerCase()}@user.com`, 
          name: `${tier.name} User`, 
          confirmed: true,
          plan: tier.name
        }));
        
        setTimeout(() => navigate('/dashboard'), 1500);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3b82f6",
      },
    };

    try {
      const rzp1 = new (Razorpay as any)(options);
      rzp1.open();
    } catch (error) {
      toast.error("Could not initialize payment gateway.");
    } finally {
      setIsProcessing(null);
    }
  };

  const tiers = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      desc: 'Perfect for small communities and side projects.',
      features: ['Up to 50K scans', 'Basic moderation AI', 'Email alerts', '7-day retention', 'Community support'],
      button: 'Get Started',
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$149' : '$119',
      desc: 'Advanced safety for growing platforms.',
      features: ['Up to 500K scans', 'Advanced AI models', 'Real-time alerts', 'Priority support', '30-day retention', 'API access'],
      button: 'Get Started',
      popular: true,
    },
    {
      name: 'Business',
      price: billingCycle === 'monthly' ? '$399' : '$349',
      desc: 'Scale your operations with custom workflows.',
      features: ['Up to 2M scans', 'Full AI suite', 'Custom workflows', 'Team collaboration', '90-day retention', 'Webhooks + integrations'],
      button: 'Upgrade Now',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Dedicated infrastructure for global scale.',
      features: ['Unlimited scans', 'Dedicated AI models', 'On-premise deployment', 'SLA + compliance', 'Dedicated manager'],
      button: 'Contact Sales',
    }
  ];

  return (
    <LandingLayout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Choose the plan that fits your platform's needs.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-medium", billingCycle === 'monthly' ? "text-white" : "text-slate-500")}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 bg-[#1E293B] rounded-full p-1 transition-colors relative"
            >
              <div className={cn(
                "w-5 h-5 bg-white rounded-full shadow-sm transition-transform",
                billingCycle === 'yearly' ? "translate-x-7" : "translate-x-0"
              )} />
            </button>
            <span className={cn("text-sm font-medium", billingCycle === 'yearly' ? "text-white" : "text-slate-500")}>
              Yearly <span className="text-blue-400 font-bold ml-1">(Save up to 20%)</span>
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={cn(
                "relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col",
                tier.popular 
                  ? "border-blue-600 shadow-2xl shadow-blue-900/20 bg-[#0F172A] scale-105 z-10" 
                  : "border-[#1E293B] bg-[#0F172A] hover:border-blue-500/30"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && (
                    <span className="text-slate-500 font-medium">/mo</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handlePayment(tier)}
                disabled={isProcessing === tier.name}
                variant={tier.popular ? 'default' : 'outline'} 
                className={cn(
                  "w-full rounded-2xl h-14 font-bold text-base transition-all",
                  tier.popular ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20" : "border-[#1E293B] text-white hover:bg-[#1E293B]"
                )}
              >
                {isProcessing === tier.name ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                {tier.button}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </LandingLayout>
  );
};

export default Pricing;