import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import YachtsPage from "@/pages/YachtsPage";
import GalleryPage from "@/pages/GalleryPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/yachts" element={<YachtsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>

    <Route path="/404" element={<h1>NotFoundPage</h1>} />
  </Routes>
);
