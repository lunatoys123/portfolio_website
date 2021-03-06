import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Learning = lazy(() => import("./Components/Learning"));
const Project = lazy(() => import("./Components/workProject"));
const indvidualProject = lazy(() => import("./Components/workProjects/indvidualProject"));
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<p>Loading</p>}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Learning/:year" component={Learning} />
            <Route exact path="/workProject" component={Project} />
            <Route exact path="/workProject/:title" component={indvidualProject} />
            <Redirect from={"/Learning"} to={`/Learning/Year1`}/>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
