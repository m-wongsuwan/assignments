import React from "react";
import trollface from './files/trollface.png'

export default function Header() {
    return (
        <header>
            <img src={trollface} alt="troll face icon" id="trollIcon"/>
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}