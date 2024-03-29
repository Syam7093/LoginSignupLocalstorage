import React from 'react'

export const Dashboard = () => {
    const usedata=JSON.parse(localStorage.getItem("userdetails"))
    
  return (
    <div>
        <h1>Welcome to dashboard</h1>
       <h5>{usedata.name}</h5>
      <h4>{usedata.email}</h4>
      <img src={usedata.file} style={{ height:"170px",width:"220px"}}></img> 
    </div>
  )
}
