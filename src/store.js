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
// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX__DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
