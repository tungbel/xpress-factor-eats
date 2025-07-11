
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MenuProvider } from "@/contexts/MenuContext";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Rewards from "./pages/Rewards";
import Catering from "./pages/Catering";
import Locations from "./pages/Locations";
import Promos from "./pages/Promos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import XPressDelivery from "./pages/XPressDelivery";
import Careers from "./pages/Careers";
import Franchises from "./pages/Franchises";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import Directions from "./pages/Directions";
import EventRsvp from "./pages/EventRsvp";
import PreLaunch from "./pages/PreLaunch";
import PaymentSuccess from "./pages/PaymentSuccess";
import DeliveryTracking from "./pages/DeliveryTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <MenuProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/catering" element={<Catering />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/promos" element={<Promos />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/xpress-delivery" element={<XPressDelivery />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/franchises" element={<Franchises />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/directions" element={<Directions />} />
                  <Route path="/event-rsvp" element={<EventRsvp />} />
                  <Route path="/pre-launch" element={<PreLaunch />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} />
                  <Route path="/delivery-tracking" element={<DeliveryTracking />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </CartProvider>
        </MenuProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
