import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer
const reducer = combineReducers({});

// Initial State
const initialState = {};

// redux-thunk for async operations with redux
const middleware = [thunk];

// store/Global State
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//-----------
// Export
//----------
export default store;
