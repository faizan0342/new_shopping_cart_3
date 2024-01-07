
import { CARTITEM_SUCCESS , CARTITEM_DELETE} from "../constant";
import axios from "axios";

export const cartItemActions = (qty, productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);

    dispatch({
      type: CARTITEM_SUCCESS,
      payload: {
        _id: data._id,
        image: data.image,
        price: data.price,
        name: data.name,
        qty: qty,
        stock: data.stock,
      },
    });

    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem));
  } catch (error) {
    // Handle any errors
    console.error("Error fetching product data:", error);
  }
};


export const deleteItem = (productId) => (dispatch , getState) => {

  dispatch({
    type : CARTITEM_DELETE ,
    payload : productId
  })

  localStorage.setItem("cartItem" , JSON.stringify(getState().cart.cartItem))

  

} 