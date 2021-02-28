import * as redux from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { finderReducer } from "./cocktailfinder";
import { counterReducer } from "./cocktailcounter";

const rootReducer = redux.combineReducers({
  finderState: finderReducer,
  counterState: counterReducer,
});

const store = redux.createStore(
  rootReducer,
  composeWithDevTools(redux.applyMiddleware(logger, thunk))
);

export default store;
