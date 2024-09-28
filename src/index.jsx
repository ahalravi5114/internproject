//import React from "react";
//import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Homepg from "./components/Homepg/Homepg";
import Influencers from "./components/Influencers/Influencers";
import Brands from "./components/Brands/Brands";
import Pricing from "./components/Pricing/Pricing";
//import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes ,Outlet} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Homepg />} />
        <Route path="brand" element={<Brands />} />
        <Route path="influencers" element={<Influencers />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  </HashRouter>
);