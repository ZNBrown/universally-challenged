// App.js
import React, { Component } from "react";
import { NavBar } from "./components";
import { Provider } from "react-redux";

// import store from "./store";
import { Home, Questions, Categories, Scores, About } from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Provider store={store}>
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/questions">
          <Questions />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/scores">
          <Scores />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route>
          <h1>&#129429; This page doesn't exist &#129430;</h1>
        </Route>
      </Switch>
    </main>
    // </Provider>
  );
}
export default App;
