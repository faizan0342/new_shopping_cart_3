import { CARTITEM_DELETE, CARTITEM_SUCCESS, CARTITEM_FAIL ,USER_SIGNOUT } from "../constant";

export const cartItemReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {

    case CARTITEM_SUCCESS:
      const item = action.payload;

      const existItem = state.cartItem && state.cartItem.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }
      case CARTITEM_DELETE:
        return{
          ...state,
          cartItem : state.cartItem.filter((x) => x._id !== action.payload )
        }
        case USER_SIGNOUT :
          return {
            cartItem : []
          }
    default:
      return state;
  }
};


// export const cartItemDeleteReducer = (state = { cartItem: [] }, action) => {
//   switch (action.type) {

//     case CARTITEM_DELETE:

//     return{
//       cartItem : action.payload
//     }

//     default:
//       return state;
//   }
// };
