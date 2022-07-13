import React from "react";
import vector from '../files/vector.png'

export default function Navbar() {
    return (
        <nav className="navDiv">
            <img src={vector} alt="AirBNB logo" className="logo"/>
        </nav>
    )
}