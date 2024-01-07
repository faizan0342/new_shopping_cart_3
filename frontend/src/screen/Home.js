import data from '../data'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {productListAction} from "../action/productAction" 

function Home() {
    const cardStyle = {
        width: '20rem',
        // Add any other styles you need
    };

    var dispatch = useDispatch(productListAction())

    useEffect(() => {
        dispatch(productListAction())
    } , [])


    var productList = useSelector((state) => state.productList)

    const {loading , product , error} = productList

    return (
        <div>
            <div className="container">
                <div className="row">
                    {product ? (
                        loading ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                {product.map((product) => (
                                    <ul className="col-lg-4" key={product._id}>
                                        <div className="card" style={cardStyle}>
                                            <li className="row">
                                                <img src={product.image} className="card-img-top img_fixd_size" alt={product.image} />
                                                <div className="card-body">
                                                    <div>{product.brand}</div>
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <h5>${product.price}</h5>
                                                    <div>
                                                        {product.rating}({product.numReviews} Reviews)
                                                    </div>
                                                    <Link to={"/product/" + product._id} className="btn btn-primary">
                                                        Add To Cart
                                                    </Link>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                ))}
                            </>
                        )
                    ) : (
                        error
                    )}
                </div>
            </div>
        </div>
    );}
    

export default Home
