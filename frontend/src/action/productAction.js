import {PRODUCT_LIST_REQUIST , PRODUCT_LIST_SUCCESS ,PRODUCT_LIST_FAIL , PRODUCT_DETAIL_REQUIST , PRODUCT_DETAIL_SUCCESS , PRODUCT_DETAIL_FAIL} from "../constant"; // Fix the typo in "constants"

import axios from "axios";

export const productListAction = () => async(dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUIST }); 

  try {
    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const productDetailAction = (productId) => async(dispatch) => {
    dispatch({ type: PRODUCT_DETAIL_REQUIST , payload : productId}); 
  
    try {
      const { data } = await axios.get("/api/products/" + productId);
  
      dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.message });
    }
  };

  