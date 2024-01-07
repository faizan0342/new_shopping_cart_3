import { useEffect, useState } from "react"
import {userSignIn} from "../action/userAction"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"

function SignIn(props) {

    const [email , setEmail] = useState("")

    const [password , setPassword] = useState("")

    var rediect = props.location.search ? props.location.search.split("=")[1] : "/"

    const userInfos = useSelector((state) => state.userInfo)

    const {userInfo} = userInfos

    var dispatch = useDispatch()

   
    useEffect(() => {
        if(userInfo.length !== 0){
            props.history.push(rediect)
        }
    },[userInfo])
       

    const handlerForm = (e) => {

        e.preventDefault()

        dispatch(userSignIn(email , password))

        props.history.push("/")
        
    }
    return (
        <div>
            <form onSubmit={handlerForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" required name="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" required name="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>New customer ? {""}<Link to={`/register?redirct=${rediect}`}></Link></div>
        </div>
    )
}

export default SignIn