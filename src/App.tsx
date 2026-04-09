import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContentModeration from "./pages/ContentModeration";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import PolicyEnforcement from "./pages/PolicyEnforcement";
import ResearchAnalytics from "./pages/ResearchAnalytics";
import MarketingDashboard from "./pages/MarketingDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moderation" element={<ContentModeration />} />
          <Route path="/threats" element={<ThreatIntelligence />} />
          <Route path="/policy" element={<PolicyEnforcement />} />
          <Route path="/analytics" element={<ResearchAnalytics />} />
          <Route path="/marketing" element={<MarketingDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;