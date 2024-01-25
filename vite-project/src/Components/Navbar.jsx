import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{height:"70px", background:"black", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px", color:"white"}}>
        <h1>
            <Link style={{color:"white", textDecoration:"none"}} to={"/"}>Kalvium</Link>
        </h1>
        <div>
            <Link style={{color:"white", marginRight:"20px", textDecoration:"none"}} to={"/about"}>About</Link>
            <Link style={{color:"white", textDecoration:"none"}} to={"/registration"}>Registration</Link>
        </div>
        
    </div>
  )
}

export default Navbar