// App.js
import React, { Component } from "react";
import { Greeting } from "./components";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <h1>This is the app</h1>
    </Provider>
  );
}
export default App;
