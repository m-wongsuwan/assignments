import React from "react";
import image12 from '../files/image12.png'
import star from '../files/star.png'

export default function Card() {
    return (
        <section className="card">
            <div className="imgPlusStatus">
                <span className="status">SOLD OUT</span>
                <img src={image12} alt="Swimmer Katie Zaferes smiling before a pool." className="cardImg"/>
            </div>
            

            <div className="ratingLine">
                    <img className="star" src={star} alt='Star Icon' />
                    <p className="ratingNum">5.0 <span className="gray">(6) • USA</span></p>
            </div>
            <div className="cardDescription">
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>

        </section>
    )
}