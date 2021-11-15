// App.js
import React, { Component } from "react";
import { Greeting } from "./components/Greeting";
import { Provider } from "react-redux";
// import store from "./store";
import { Home, Questions, Categories, Scores } from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    // <Provider store={store}>
    <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/questions'>
        <Questions />
      </Route>

      <Route path='/categories'>
        <Categories />
      </Route>

      <Route path='/scores'>
        <Scores />
      </Route>

    </Switch>
    // </Provider>
  );
}
export default App;
