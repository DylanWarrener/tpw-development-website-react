// React default imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Header, Page and footer imports
import Header from './components/header/header';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import LocationPage from './pages/location/location';
import ExpertisePage from './pages/expertise/expertise';
import PortfolioPage from './pages/protfolio/protfolio';
import ContactPage from './pages/contact/contact';
import Footer from './components/footer/footer';

// Style sheet
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
        <Route exact path='/expertise' element={<ExpertisePage />} />
        <Route exact path='/location' element={<LocationPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
