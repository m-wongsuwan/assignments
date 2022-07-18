import React from "react";
import pin from "./pin.png"

export default function Entry(props) {
    console.log(props)
    return (
        <div className="entryBox">
            <div className="imgBox">
                <img className="cardPhoto" src={props.item.imageUrl} alt="Mount Fuji"/>
            </div>
            <div className="infoBox">
                <img src={pin} alt="pin icon" className="pinIcon"/><span className="infoBox--location"> {props.item.location}</span><span id="infoBox--maps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                <h1>{props.item.title}</h1>
                <span className="infoBox--dates">{props.item.startDate} - {props.item.endDate}</span>
                <p className="infoBox--description">{props.item.description}</p>
            </div>
        </div>
    )
}