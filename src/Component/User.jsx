import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from "./login.module.css"
const User=()=>{
    let [content,setcontent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/User")
        .then((resp)=>{
            setcontent(resp.data)
        })
        .catch(()=>{
            console.log("error");
        })
    },[])

    let deletebu=(x)=>{
        axios.delete(`http://localhost:3000/User/${x}`)
        window.location.assign("/User")
    }
    return (
        <div className={style.main}>
            {content.map((x)=>{
                return (
                    <div className={style.card}>
                        <h1 className={style.head}>Id:{x.id}</h1>
                        <h1 className={style.h1}>Name:{x.name}</h1>
                        <h1 className={style.h1}>Salary:{x.salary}</h1>
                        <h1 className={style.h1}>Company:{x.company}</h1>
                        <button className={style.but}><Link to={`/Update/${x.id}`}>Edit</Link></button>
                        <button className={style.b1} onClick={()=>{deletebu(x.id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default User