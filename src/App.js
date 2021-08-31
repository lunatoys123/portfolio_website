import React, {useState} from "react";
import Navbar from "./Components/navbar";
import Header from "./Components/Header";
import Content from "./Components/MainContent";
import Footer from "./Components/Footer";
import { GlobalStyle } from "./GlobalStyle";
function App() {

  const [isEnglish , setIsEnglish] = useState(true);
  return (
    <>
      <GlobalStyle />
      <Navbar callBack={setIsEnglish} English={isEnglish} />
      <Header English ={isEnglish}/>
      <Content />
      <Footer />
    </>
  );
}

export default App;
