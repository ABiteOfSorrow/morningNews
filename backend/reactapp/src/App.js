import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenMyArticles from "./ScreenMyArticles";
import ScreenSource from "./ScreenSource";
import ScreenArticlesBySource from "./ScreenArticlesBySource";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ScreenHome} />
        <Route exact path="/screenmyaticles" component={ScreenMyArticles} />
        <Route exact path="/screensource" component={ScreenSource} />
        <Route exact path="/screenarticlesbysource/:id" component={ScreenArticlesBySource} />
      </Switch>
    </Router>
  );
}

export default App;
