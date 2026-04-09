import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inbox" element={<MockInbox />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/moderation" element={<ContentModeration />} />
          <Route path="/threats" element={<ThreatIntelligence />} />
          <Route path="/policy" element={<PolicyEnforcement />} />
          <Route path="/analytics" element={<ResearchAnalytics />} />
          <Route path="/marketing" element={<MarketingDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;