import React from "react";
import Home from './Components/Home'
import Year from "./Components/Learning_Content/Year"
import Learning from './Components/Learning'
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Learning" component={Learning} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
