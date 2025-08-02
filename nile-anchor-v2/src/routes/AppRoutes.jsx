import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import WeddingsPage from "@/pages/WeddingsPage";
import GatheringsPage from "@/pages/GatheringsPage";
import BusinessPage from "@/pages/BusinessPage";
import ContactPage from "@/pages/ContactPage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/weddings" element={<WeddingsPage />} />
      <Route path="/gatherings" element={<GatheringsPage />} />
      <Route path="/gallery" element={<GatheringsPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>

    <Route path="/404" element={<h1>NotFoundPage</h1>} />
  </Routes>
);

