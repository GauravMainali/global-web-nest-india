import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import WebDesign from "./pages/services/WebDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import MetaAds from "./pages/services/MetaAds";
import GraphicDesign from "./pages/services/GraphicDesign";
import VideoEditing from "./pages/services/VideoEditing";
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
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
