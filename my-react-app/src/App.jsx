import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import './App.css';
import { AboutPage } from '@pages/AboutUsPage/AboutPage';
import { WeddingsPage } from '@pages/Weddings/WeddingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/weddings" element={<WeddingsPage />}/>
          {/* Add other routes here when ready */}
          <Route path="contact" element={<div>Contact Page - Coming Soon</div>} />
          <Route path="services/business-events" element={<div>Business Events Page - Coming Soon</div>} />
          <Route path="services/gatherings-parties" element={<div>Gatherings & Parties Page - Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;