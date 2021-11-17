// App.js
import React, { Component } from "react";
import { NavBar } from "./components";
// import { Provider } from "react-redux";

// import store from "./store";
import {
  Home,
  Questions,
  QuestionsPage,
  About,
  UserPage,
  Leaderboard,
} from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Provider store={store}>
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/QuestionsPage">
            <NavBar />
            <QuestionsPage />
          </Route>

          <Route path="/UserPage">
            <NavBar />
            <UserPage />
          </Route>

          <Route path="/leaderboard">
            <NavBar />
            <Leaderboard />
          </Route>

          <Route path="/about">
            <NavBar />
            <About />
          </Route>

          <Route>
            <NavBar />
            <h1>&#129429; This page doesn't exist &#129430;</h1>
          </Route>
        </Switch>
      </main>
    </div>
    // </Provider>
  );
}
export default App;
