import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//-----------------
// import reducers
//-----------------
// productList and productDetails reducer
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

// cart reducer
import { cartReducer } from "./reducers/cartReducers";

//------------------
// Main Reducer
//-------------------
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// getting the cartItems from the local storage to pass in our initial state
const cartItemsFromTheLocalStore = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Initial State
const initialState = {
  cart: { cartItems: cartItemsFromTheLocalStore },
};

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
