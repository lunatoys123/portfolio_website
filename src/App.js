import React from 'react'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
import {GlobalStyle} from './GlobalStyle'
function App() {

  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;
