import { useEffect, useState } from "react"
import {userSignIn} from "../action/userAction"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {userRegister} from "../action/userAction"
import CheckoutSteps from "../component/CheckoutSteps"
import {saveShippingAddress} from "../action/shipping"

function Shipping(props) {

    var shipping = useSelector((state) => state.shipping)

    var {shipping} = shipping

    const [name, setName] = useState(shipping.name)

    const [address , setAddress] = useState(shipping.address)

    const [city , setCity] = useState(shipping.city)

    const [postalCode , setpostalCode] = useState(shipping.postalCode)

    const [country , setCountry] = useState(shipping.country)

    const [location , setLocation] = useState(shipping.location)

    // var rediect = props.location.search ? props.location.search.split("=")[1] : "/"

    var userInfo = useSelector((state) => state.userInfo)

    if(!userInfo){
        props.history.push("/signin")
    }


    var dispatch = useDispatch()



    const handlerForm = (e) => {
        e.preventDefault()

        dispatch(saveShippingAddress({name , address , city , postalCode , country , location}))
        
        props.histoy.push("/payment")
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form onSubmit={handlerForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" required name="name" onChange={(e) => {setName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" required name="address" onChange={(e) => {setAddress(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">City</label>
                    <input type="text" required name="city" onChange={(e) => {setCity(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="postalCode" className="form-label">Postal Code</label>
                    <input type="text" required name="postalCode" onChange={(e) => {setpostalCode(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" required name="country" onChange={(e) => {setCountry(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" required name="location" onChange={(e) => {setLocation(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Continue</button>
            </form>
        </div>
    )
}

export default Shipping