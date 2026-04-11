import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ContentModeration from "./pages/ContentModeration";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import PolicyEnforcement from "./pages/PolicyEnforcement";
import ResearchAnalytics from "./pages/ResearchAnalytics";
import MarketingDashboard from "./pages/MarketingDashboard";
import Settings from "./pages/Settings";
import MockInbox from "./pages/MockInbox";
import NotFound from "./pages/NotFound";
import FinancialFraud from "./pages/FinancialFraud";
import AIVerification from "./pages/AIVerification";
import LogCenter from "./pages/LogCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BrandSafety from "./pages/BrandSafety";
import Integrations from "./pages/Integrations";
import ChildSafety from "./pages/ChildSafety";
import Activity from "./pages/Activity";
import IdentityVerification from "./pages/IdentityVerification";
import NITRS from "./pages/NITRS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inbox" element={<MockInbox />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/moderation" element={<ContentModeration />} />
          <Route path="/policy" element={<PolicyEnforcement />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/analytics" element={<ResearchAnalytics />} />
          <Route path="/threats" element={<ThreatIntelligence />} />
          <Route path="/marketing" element={<MarketingDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/fraud" element={<FinancialFraud />} />
          <Route path="/verification" element={<AIVerification />} />
          <Route path="/identity-verification" element={<IdentityVerification />} />
          <Route path="/logs" element={<LogCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/brand-safety" element={<BrandSafety />} />
          <Route path="/nitrs" element={<NITRS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;