import React from "react";
import Navbar from "./Components/navbar";
import Header from "./Components/Header";
import Content from "./Components/MainContent";
import Footer from "./Components/Footer";
import Submenu from "./Components/submenu";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header/>
      <Content />
      <Footer />
      <Submenu />
    </>
  );
}

export default App;
