// imports
import axios from "axios";

// import constants
import { CART_ADD_ITEM } from "../constants/cartConstants";

//----------------------
// Action Creators: Cart
//----------------------
// Redux thunk allows to make fetch requests async
// getState will allow us to get the entire State Tree in from Main reducer from our store
const addToCart = (id, qty) => async (dispatch, getState) => {
  //   try {
  // fetch data using axios and dispatch via payload
  const { data } = await axios.get(`/api/v1/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      product: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity: qty,
    },
  });

  // Save to local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

  //   } catch (error) {
  //     dispatch({
  //       type: PRODUCT_DETAILS_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
};

//------------
// Exports
//------------
export { addToCart };
