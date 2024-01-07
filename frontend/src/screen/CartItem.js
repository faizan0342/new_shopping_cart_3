
import { useDispatch, useSelector } from 'react-redux'
import {cartItemActions} from '../action/cartItemAction'
import { useEffect } from 'react'
import {deleteItem} from "../action/cartItemAction"

function CartItem(props) {
    const qty = props.location.search ? props.location.search.split("=")[1] : 1
    const productId = props.match.params.id

    var dispatch = useDispatch()

    const deleteItemHamdler = (productId) => {
        dispatch(deleteItem(productId))
    }

    // const userInfos = useSelector((state) => state.userInfo)

    // const {userInfo} = userInfos

    const checkOutHandle = () => {
        props.history.push("/signin?redirect=shipping")
    }
    
    useEffect(() => {
        dispatch(cartItemActions(qty , productId))
    } ,[])

    var cart = useSelector(state => state.cart)


    const { cartItem } = cart
    
    // const namesArray = cartItem.map(item => item.name);
    // console.log(namesArray);

    if(!cartItem){
        return
    }


    return (
        <div className="main_cartItem">
            <h3>Shopping Cart</h3>
              
            <div class="container text-center">
                <div class="row align-items-start">
                {cartItem.map((x) => (
                    <div class="col-md-10">
                        <div className="row align-items-start">
                            <div class="col-md-2">
                                <img className='cart_img' src={x.image} alt={x.image}></img>
                            </div>
                            <div class="col-md-2">
                               {x.name}
                            </div>
                            <div class="col-md-2">
                                <select value={x.qty} onChange={(e) => dispatch(cartItemActions(Number(e.target.value) , x._id))}>
                                   {[...Array(x.stock).keys()].map((x) => 
                                   <option value={x+1} key={x+1}>{x+1}</option>
                                   )}
                                </select>
                            </div>
                            <div class="col-md-2">
                                $ {""} {x.price}
                            </div>
                            <div class="col-md-2">
                                <button onClick={() => deleteItemHamdler(x._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div class="col-md-2">
                        <div>
                            subTotal : ({cartItem.reduce((a,c) => a + c.qty , 0)}) : $ {cartItem.reduce((a,c) => a + c.price * c.qty , 0)}
                        </div>
                        <div>
                        <button type="button" class="btn btn-primary" onClick={() => checkOutHandle()}>Process to CheckOut</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem