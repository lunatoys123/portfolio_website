import React, { lazy } from "react";
const Navbar = lazy(() => import("./navbar"));
const Header = lazy(() => import("./Header"));
const Content = lazy(() => import("./MainContent"));
const Footer = lazy(() => import("./Footer"));
const Submenu = lazy(() => import("./submenu"));
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Footer />
      <Submenu />
    </>
  );
};

export default Home;
