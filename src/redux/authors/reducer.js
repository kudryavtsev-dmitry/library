import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
const initialState = {
  authors: [],
};

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return {
        ...state,
        authors: action.payload,
      };
    default:
      return state;
  }
}
