import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/HomePage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>

    <Route path="/404" element={<h1>NotFoundPage</h1>} />
  </Routes>
);
