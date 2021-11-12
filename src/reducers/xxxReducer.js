import { ACTION1, ACTION2 } from "..actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        items: action.payload,
      };
    case ACTION2:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
