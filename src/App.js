// React default imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Header, Page and footer imports
import Header from './components/header/header';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Footer from './components/footer/footer';

// Style sheet
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
