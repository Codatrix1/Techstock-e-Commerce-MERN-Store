// import constants
import { CART_ADD_ITEM } from "../constants/cartConstants";

//------------------------------
// Cart Reducer
//------------------------------
const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === CART_ADD_ITEM) {
    const item = action.payload;

    // IMP INFO: "product" in the "find" function refers to the "product id"
    // check if item already exists and check conditions with corresponding "ids"
    const existItem = state.cartItems.find(
      (eachItem) => eachItem.product === item.product
    );

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  }

  // default return
  return state;
};

//------------
// Exports
//------------
export { cartReducer };
