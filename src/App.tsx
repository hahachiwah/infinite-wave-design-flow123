import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Technology from "./pages/Technology";
import Applications from "./pages/Applications";
import Contaminants from "./pages/Contaminants";
import AboutUs from "./pages/AboutUs";
import PreeminentExperts from "./pages/PreeminentExperts";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Municipal from "./pages/Municipal";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Contaminant detail pages
import NaturalOrganicMatter from "./pages/contaminants/NaturalOrganicMatter";
import HeavyMetals from "./pages/contaminants/HeavyMetals";
import PFAS from "./pages/contaminants/PFAS";
import PesticidesHerbicides from "./pages/contaminants/PesticidesHerbicides";
import PathogensMicroorganisms from "./pages/contaminants/PathogensMicroorganisms";
import TotalPhosphorus from "./pages/contaminants/TotalPhosphorus";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/contaminants" element={<Contaminants />} />
            <Route path="/contaminants/natural-organic-matter" element={<NaturalOrganicMatter />} />
            <Route path="/contaminants/heavy-metals" element={<HeavyMetals />} />
            <Route path="/contaminants/pfas" element={<PFAS />} />
            <Route path="/contaminants/pesticides-herbicides" element={<PesticidesHerbicides />} />
            <Route path="/contaminants/pathogens-microorganisms" element={<PathogensMicroorganisms />} />
            <Route path="/contaminants/total-phosphorus" element={<TotalPhosphorus />} />
            <Route path="/about-us" element={<AboutUs />}>
              <Route path="preeminent-experts" element={<PreeminentExperts />} />
              <Route path="leadership" element={<Leadership />} />
            </Route>
            <Route path="/municipal" element={<Municipal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;