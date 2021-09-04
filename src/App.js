import React from "react";
import Navbar from "./Components/navbar";
import Header from "./Components/Header";
import Content from "./Components/MainContent";
import Footer from "./Components/Footer";
import Submenu from "./Components/submenu";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Header />
        <Route path='/'><Content /></Route>
        <Footer />
        <Submenu />
      </Router>
    </>
  );
}

export default App;
