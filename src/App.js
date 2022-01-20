// React default imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page imports
import Header from './components/header/header';
import ErrorPage from './pages/error/error';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import LocationPage from './pages/location/location';
import ExpertisePage from './pages/expertise/expertise';
import PortfolioPage from './pages/portfolio/portfolio';
import ContactPage from './pages/contact/contact';
import Footer from './components/footer/footer';

import Test from './test';

// Style sheet
import './App.scss';

export default function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <Routes>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/expertise' element={<ExpertisePage />} />
        <Route path='/location' element={<LocationPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
