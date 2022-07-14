import React from "react";
import globe from "./globe.svg"

export default function Banner() {
    return (
        <div className="banner">
            <img src={globe} alt="Globe icon" className="banner--icon"/>
            <span>my travel journal.</span>
        </div>

    )
}