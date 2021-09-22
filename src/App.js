import React from "react";
import Home from './Components/Home'
import Learning from './Components/Learning'
import { GlobalStyle } from "./GlobalStyle";
import Project from "./Components/workProject"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Learning/:year" component={Learning} />
        <Route exact path="/workProject" component={Project} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
