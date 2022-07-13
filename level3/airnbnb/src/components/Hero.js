import React from "react";
import heroes from '../files/heroes.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroes} alt="Photos of people in action" className="heroSpread"/>
            <div className="marginLeft6">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
                
        </section>
    )
}