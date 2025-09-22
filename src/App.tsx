import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Health from "./pages/Health";
import AI from "./pages/AI";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import HealthCenter from "./HealthCenter"; 
import HealthAuth from "./HealthAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* All routes that should have Header + Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="health" element={<Health />} />
            <Route path="ai" element={<AI />} />
            <Route path="planner" element={<Planner />} />
            <Route path="healthcenter" element={<HealthCenter />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Auth route WITHOUT Layout (no Header/Footer) */}
          <Route path="auth" element={<HealthAuth />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
