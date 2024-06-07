import React from "react"
import "../Component/style.css"
import logo from "../images/globe.png"

export default function Navbar(){
    return(
        <nav>
            <img className="nav-logo" src={logo}/>
            <h1>my travel journal.</h1>
        </nav>
    )
}