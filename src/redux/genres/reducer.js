import {LOAD_GENRES_SUCCESS, SELECT_GENRE} from "./actionTypes";
const initialState = {
  genres: [],
  selectedGenre: null,
};

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case SELECT_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    default:
      return state;
  }
}
