// App.js
import React, { Component } from "react";
import { NavBar } from "./components";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <h1>This is the app</h1>
    </Provider>
  );
}
export default App;
