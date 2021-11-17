import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { devToolsEnhancer } from "redux-devtools-extension";

import questionReducer from "./reducers/questionReducer";
const store = createStore(
  questionReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
