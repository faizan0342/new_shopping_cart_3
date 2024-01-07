
import {USER_SHIPPING_ADDRESS} from "../constant"

export const userShippingReducer = (state = {shipping : []} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case USER_SHIPPING_ADDRESS :
            return{
                shipping : action.payload
            }
            default :
            return state
    }
} 