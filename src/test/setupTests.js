import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { createStore } from "redux";

import { questionReducer } from "../reducers";

const TestProviders = ({ initState }) => {
  initState = {
    loading: false,
    questionIndex: 0,
    username: "",
    category: "",
    difficulty: "",
    result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
    score: 0,
    userNum: 0,
  };
  let testReducer = () => questionReducer(initState, { type: "@@INIT" });
  const testStore = createStore(testReducer);

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.userEvent = userEvent;
