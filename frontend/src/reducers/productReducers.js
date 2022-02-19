// import constants
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

//------------------------------
// All Products List Reducer
//------------------------------
const productListReducer = (state = { products: [] }, action) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return { loading: true, products: [] };
  }

  if (action.type === PRODUCT_LIST_SUCCESS) {
    return { loading: false, products: action.payload };
  }

  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

//------------------------------
// Single Product Details Reducer
//------------------------------
const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return { loading: true, ...state };
  }

  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return { loading: false, product: action.payload };
  }

  if (action.type === PRODUCT_DETAILS_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

//------------
// Exports
//------------
export { productListReducer, productDetailsReducer };
