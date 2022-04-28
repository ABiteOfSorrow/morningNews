import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenMyArticles from "./ScreenMyArticles";
import ScreenSource from "./ScreenSource";
import ScreenArticlesBySource from "./ScreenArticlesBySource";
import article from "./reducer/article.js";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";



const store = createStore(combineReducers({ article }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route exact path="/screenmyaticles" component={ScreenMyArticles} />
          <Route exact path="/screensource" component={ScreenSource} />
          <Route
            exact
            path="/screenarticlesbysource/:id/:language"
            component={ScreenArticlesBySource}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
