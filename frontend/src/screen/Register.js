import { useEffect, useState } from "react"
import {userSignIn} from "../action/userAction"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {userRegister} from "../action/userAction"

function Register(props) {

    const [name, setName] = useState("")

    const [email , setEmail] = useState("")

    const [password , setPassword] = useState("")

    const [cPassword , setcPassword] = useState("")

    var rediect = props.location.search ? props.location.search.split("=")[1] : "/"

    var dispatch = useDispatch()



    const handlerForm = (e) => {
        e.preventDefault()

        if(password !== cPassword){
            alert("password and confirm password are not match")
        }else{
            dispatch(userRegister(name , email , password))
        }
    }

    return (
        <div>
            <form onSubmit={handlerForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" required name="name" onChange={(e) => {setName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" required name="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" required name="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Cpassword</label>
                    <input type="cPassword" required name="cPassword" onChange={(e) => {setcPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div>Already have a Account ? {""}<Link to={`/signin?redirct=${rediect}`}></Link></div>
        </div>
    )
}

export default Register