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

const routeConfig = [
  { path: '/', element: <Index /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/technology', element: <Technology /> },
  { path: '/applications', element: <Applications /> },
  { path: '/contaminants', element: <Contaminants /> },
  { path: '/contaminants/natural-organic-matter', element: <NaturalOrganicMatter /> },
  { path: '/contaminants/heavy-metals', element: <HeavyMetals /> },
  { path: '/contaminants/pfas', element: <PFAS /> },
  { path: '/contaminants/pesticides-herbicides', element: <PesticidesHerbicides /> },
  { path: '/contaminants/pathogens-microorganisms', element: <PathogensMicroorganisms /> },
  { path: '/contaminants/total-phosphorus', element: <TotalPhosphorus /> },
  { 
    path: '/about-us', 
    element: <AboutUs />, 
    children: [
      { path: 'preeminent-experts', element: <PreeminentExperts /> },
      { path: 'leadership', element: <Leadership /> },
    ]
  },
  { path: '/municipal', element: <Municipal /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-of-service', element: <TermsOfService /> },
  { path: '/cookie-policy', element: <CookiePolicy /> },
  { path: '*', element: <NotFound /> }
];

const renderRoutes = (routes: any[]) => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {renderRoutes(routeConfig)}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;