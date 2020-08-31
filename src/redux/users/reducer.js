import { LOAD_USERS_SUCCESS } from "./actionTypes";
const initialState = {
  users: [],
  isLoading: true,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
