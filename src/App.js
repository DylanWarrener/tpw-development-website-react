import React from "react";

// React router
import { Routes, Route } from "react-router-dom";

// Pages
import Header from "./components/header/header-component";
import ErrorPage from "./pages/error/error-page";
import HomePage from "./pages/home/home-page";
import KitchenPage from "./pages/kitchen/kitchen-page";
import BathroomPage from "./pages/bathroom/bathroom-page";
import NewBuildPage from "./pages/newbuilds/newbuilds-page";
import ExtensionPage from "./pages/home-extension/home-extension-page";
import RefurbishmentPage from "./pages/refurbishment/refurbishment-page";
import AboutPage from "./pages/about/about-page";
import ContactPage from "./pages/contact/contact-page";
import Footer from "./components/footer/footer-component";

// Assets
import Assets from "./assets/assets";

// Style sheet
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header logo={Assets.logo} />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage images={Assets.images.home} />} />
        <Route
          path="kitchens"
          element={<KitchenPage images={Assets.images.kitchen} />}
        />
        <Route
          path="bathrooms"
          element={<BathroomPage images={Assets.images.bathroom} />}
        />
        <Route
          path="newbuilds"
          element={<NewBuildPage images={Assets.images.newbuild} />}
        />
        <Route
          path="extensions"
          element={<ExtensionPage images={Assets.images.extension} />}
        />
        <Route
          path="refurbishments"
          element={<RefurbishmentPage images={Assets.images.refurbishment} />}
        />
        <Route
          path="about"
          element={<AboutPage images={Assets.images.about} />}
        />
        <Route
          path="contact"
          element={<ContactPage images={Assets.images.contact} />}
        />
      </Routes>
      <Footer socials={Assets.socials} />
    </div>
  );
};

export default App;
