
import JWT from "jsonwebtoken"

const secure = "securekeys"

const generateToken = (user) => {
    return JWT.sign({
       name : user.name,
       email : user.email,
       password : user.password,
       isAdmin : user.isAdmin
    } , secure ,  { expiresIn: '1h' })
}

export default generateToken