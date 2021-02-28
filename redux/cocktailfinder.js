import axios from "axios";

// Initial state
const initialState = {
  searchString: "",
  list: [],
  loading: false,
};

// Action types
const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";

// Action creators
// Using redux-thunk we can also return functions
function fetchStart(str) {
  return { type: FETCH_START, payload: str };
}

function fetchSuccess(arr) {
  return { type: FETCH_SUCCESS, payload: arr };
}

export const finderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, searchString: action.payload, loading: true };
    case FETCH_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    default:
      return state;
  }
};

export const getData = (str) => async (dispatch, getState) => {
  dispatch(fetchStart(str));
  try {
    const response = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
        getState().finderState.searchString
      }`
    );
    dispatch(fetchSuccess(response.data.drinks));
  } catch (error) {
    console.log(error);
  }
};
