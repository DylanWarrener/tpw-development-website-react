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

// Assets
import Assets from './assets/assets';

// Style sheet
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* <Test /> */}
      <Header logo={Assets.logo} />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route 
          path='/' 
          element={
            <HomePage 
              images={Assets.images.home}
            />
          }
        />
        <Route 
          path='kitchens' 
          element={
            <KitchenPage 
              images={Assets.images.kitchen} 
            />
          } 
        />
        <Route 
          path='bathrooms' 
          element={
            <BathroomPage 
              images={Assets.images.bathroom}  
            />
          } 
        />
        <Route 
          path='newbuilds' 
          element={
            <NewBuildPage 
              images={Assets.images.newbuild}
            />
          }
        />
        <Route 
          path='extensions' 
          element={
            <ExtensionPage 
              images={Assets.images.extension}
            />
          } 
        />
        <Route 
          path='refurbishments' 
          element={
            <RefurbishmentPage 
              images={Assets.images.refurbishment}
            />
          } 
        />
        <Route 
          path='about' 
          element={
            <AboutPage 
              images={Assets.images.about}
            />
          } 
        />
        <Route 
          path='contact' 
          element={
            <ContactPage 
              images={Assets.images.contact}
            />
          } 
        />
      </Routes>
      <Footer socials={Assets.socials} />
    </div>
  );
}

export default App;