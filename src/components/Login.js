import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email,setemail]=useState()
    const [Password,setpassword]=useState()
    const navigate=useNavigate()

    const logindata=()=>{
        const some=JSON.parse(localStorage.getItem('userdetails'))
       
        console.log(some)
        if(some.email==email && some.Password==Password)
        {
            navigate("/board")
        }
        else{
            alert("Not valid user.....")
        }

   

    }
  return (
    <div>
        <div>
            <label>Email : </label>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
        <div>
            <label>Password : </label>
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{logindata()}}>Submit</button>
        </div>
    </div>
  )
}
