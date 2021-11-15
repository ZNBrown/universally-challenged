import { combineReducers } from "redux";
import xxxReducer from "./xxxReducer";

export default combineReducers({
  xxx: xxxReducer,
});

export { default as questionReducer } from "./questionReducer"
