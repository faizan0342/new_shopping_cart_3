import { useDispatch, useSelector } from "react-redux";
import {productDetailAction} from "../action/productAction"
import data from "../data"
import { useEffect, useState } from "react";
function Product(props) {
    const cardStyle = {
        width: '20rem',
        // Add any other styles you need
    };
    var[qty ,qtySet] = useState(1)
    var productId = props.match.params.id

    // var product = data.products.find((x) => x._id === productId)

    // console.log(product)

    var dispatch = useDispatch()

    useEffect(() => {
        dispatch(productDetailAction(productId))
    }, [])

    var productDetail = useSelector((state) => state.productDetail)

    const {loading , product , error} = productDetail

    const handerAddToCart = () => {
        props.history.push("/cart/" + productId + "?qty=" + qty)
    }



    return (
        <div>
            {product ? loading ? <div>loading ....</div> : (<>
            <div class="container text-center center">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img src={product.image}></img>
                    </div>
                    <div class="col-md-4">
                        <ul>
                            <li> {product.name}</li>
                            <li>{product.rating}({product.numReviews} Reviews)</li>
                            <li>Price :{product.price}</li>
                            <li>Description : {product.decription}</li>
                        </ul>
                    </div>
                    <div class="col-md-4 product_center">
                        <div class="card" style={cardStyle}>
                            <div class="card-body">
                                <h5 class="card-title">Price : ${product.price}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Status : {product.stock}</h6>
                                Qty : <select value={qty} onChange={(x) => qtySet(x.target.value)}>
                                {
                                    [...Array(product.stock).keys()].map((x) => 
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                    )
                                }
                                </select>
                                <div class="d-grid gap-2 gap-top">
                                    <button class="btn btn-outline-warning" type="button" onClick={() => handerAddToCart()}>Add To Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>)  : error}
        </div>
    )
}

export default Product