import { Link } from "react-router-dom"
import style from "./login.module.css"
const Login=()=>{
    return (
        <div className={style.nav}>
            <Link to="/Create">Create-user</Link>
            <Link to="/User">User</Link>
        </div>
    )
}
export default Login