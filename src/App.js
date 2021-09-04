import React from "react";
import Home from './Components/Home'
import Year from "./Components/Learning/Year"
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Learning/:year" component={Year} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
