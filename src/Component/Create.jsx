import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./login.module.css"
const Create=()=>{
    let [name,setname]=useState(" ")
    let [salary,setsalary]=useState(" ")
    let [company,setcompany]=useState(" ")

    let namedata=(e)=>{
        setname(e.target.value)
    }
    let salarydata=(e)=>{
        setsalary(e.target.value)
    }
    let companydata=(e)=>{
        setcompany(e.target.value)
    }

    let navigate=useNavigate()
    let formhandler=(e)=>{
        e.preventDefault()
        let playload={name,salary,company}
        axios.post("http://localhost:3000/User",playload)
        .then(()=>{
            console.log("data entered");
        })
        .catch(()=>{
            console.log("error");
        })
        navigate("/User")
    }
    return (
       <section className={style.myform}>
        <form >
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={namedata}/>
            <label htmlFor="">Salary</label>
            <input type="text"value={salary} onChange={salarydata} />
            <label htmlFor="">Company</label>
            <input type="text"value={company} onChange={companydata} />
            <button onClick={formhandler}>Submit</button>
        </form>
       </section>
    )
}
export default Create