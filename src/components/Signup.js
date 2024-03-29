import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [Password,setpassword]=useState()
    const [file,setfile]=useState()
   

    const handlesubmitdata=()=>{
        const data=JSON.stringify({name:name,email:email,Password:Password,file:URL.createObjectURL(file)})
        
        localStorage.setItem("userdetails",data)
       
    }
    

  return (
    <div>
        <div>
            <label>Name : </label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}}></input>
        </div>
        <div>
            <label>Email : </label>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
        <div>
            <label>Password : </label>
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <div>
            <label>Profile : </label>
            <input type="file" onChange={(e)=>{setfile(e.target.files[0])}}></input>
        </div>
        <div>
            <button onClick={()=>{handlesubmitdata()}}>Submit</button>
        </div>
        <p>Already user plz <Link to="/login">Login</Link></p>
    </div>
  )
}
