import style from "./login.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// import { useEffect } from "react"
import axios from "axios"
const Update=()=>{
    let [name,setname]=useState(" ")
    let [salary,setsalary]=useState(" ")
    let [company,setcompany]=useState(" ")

    let {abc}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/User/${abc}`)
        .then((resp)=>{
            setname(resp.data.name)
            setsalary(resp.data.salary)
            setcompany(resp.data.company)
        })
    },[])
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
        axios.put(`http://localhost:3000/User/${abc}`,playload)
        .then(()=>{
            console.log("data entered");
        })
        .catch(()=>{
            console.log("error");
        })
        navigate("/User")
    }
    return (
        <section className={style.myfor}>
        <form>
        <h1>Update-Form</h1>
            <center><label htmlFor="">Name</label></center>
            <center><input type="text" value={name} onChange={namedata}/></center>
            <center><label htmlFor="">Salary</label></center>
            <center><input type="text"value={salary} onChange={salarydata} /></center>
            <center><label htmlFor="">Company</label></center>
            <center><input type="text"value={company} onChange={companydata} /></center>
            <button onClick={formhandler}>Submit</button>
        </form>
       </section>
    )
}
export default Update