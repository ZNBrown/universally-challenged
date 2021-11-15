// App.js
import React, { Component } from "react";
import { NavBar } from "./components";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import store from "./store";
import { Categories, Home, Scores, Questions, About } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route path="/quest">
            <Questions />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Provider>
  );
}
export default App;
