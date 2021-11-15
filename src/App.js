// App.js
import React, { Component } from "react";
import { Greeting } from "./components/Greeting";
import { Provider } from "react-redux";
// import store from "./store";
import { Home, Questions, Categories, Scores } from './pages';

function App() {
  return (
    // <Provider store={store}>
    <>
      <Greeting />
      <h1>This is the app</h1>
    </>
    // </Provider>
  );
}
export default App;
