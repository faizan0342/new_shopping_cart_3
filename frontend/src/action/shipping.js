
import {USER_SHIPPING_ADDRESS} from "../constant"


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type : USER_SHIPPING_ADDRESS ,
        payload : data
    })

    localStorage.setItem("shipping" , JSON.stringify(data))
}