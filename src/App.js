import React from 'react';

// React router
import { Routes, Route } from 'react-router-dom';

// Pages
import Header from './components/header/header';
import ErrorPage from './pages/error/error';
import HomePage from './pages/home/home';
import KitchenPage from './pages/kitchen/kitchen';
import BathroomPage from './pages/bathroom/bathroom';
import NewBuildPage from './pages/new-builds/new-builds';
import ExtensionPage from './pages/home-extension/home-extension';
import RefurbishmentPage from './pages/refurbishment/refurbishment';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import Footer from './components/footer/footer';

// Test page
import Test from './test';

// Style sheet
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='kitchens' element={<KitchenPage />} />
        <Route path='bathrooms' element={<BathroomPage />} />
        <Route path='newbuilds' element={<NewBuildPage />} />
        <Route path='extensions' element={<ExtensionPage />} />
        <Route path='refurbishments' element={<RefurbishmentPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;