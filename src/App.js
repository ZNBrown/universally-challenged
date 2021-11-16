// App.js
import React, { Component } from "react";
import { NavBar } from "./components";
// import { Provider } from "react-redux";
import { EntryForm } from "./components";

// import store from "./store";
import { Home, Questions, QuestionsPage, Scores, About } from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Provider store={store}>
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 

          <Route exact path="/QuestionsPage">
            <QuestionsPage />
          </Route>

          <Route path="/categories">
            <EntryForm />
          </Route>

          <Route path="/Leaderboard">
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
    </div>
    // </Provider>
  );
}
export default App;
