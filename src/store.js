import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // middleware

const reducer = combineReducers({
  // this contains all reducers
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
