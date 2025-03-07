// start the app always with '/' route
import Banner from "@/components/layout/Banner";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "./components/layout/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import "./index.css";
import Index from "./pages";
import Dashboard from "./pages/dashboard";
import Connections from "./pages/connections";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import Connections from "./pages/connections";
import Settings from "./pages/settings";

import Dashboard from "./pages/dashboard";
import Connections from "./pages/connections";
import Settings from "./pages/settings";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <SidebarProvider>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/connections"
                  element={
                    <ProtectedRoute>
                      <Connections />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
          <Sonner />
          <Toaster />
          <Banner />
        </ThemeProvider>
      </TooltipProvider>
    </SidebarProvider>
  </QueryClientProvider>
);