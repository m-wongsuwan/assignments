import React from "react";

export default function VacationSpot(props) {
    let dollarSigns = ""
    if (props.item.price < 500) {
        dollarSigns = "$"
    } else if (props.item.price >= 500 && props.item.price <= 1000) {
        dollarSigns = "$$"
    } else {
        dollarSigns = "$$$"
    }
    if (props.item.timeToGo === "Spring") {
        return (
            <div className="spotListItem" style={{backgroundColor: "rgba(255,182,25,.3)"}}>
                <div className="imgContainer">
                    <img src={props.item.imgUrl} alt={props.item.imgAlt} className='destinationPic'/>
                </div>
                <div className="infoContainer">
                    <h1>{props.item.place}</h1>
                    <span className="price">${props.item.price}</span> <span className="dollarSigns">{dollarSigns}</span>
                    <p className="timeToGo">{props.item.timeToGo}</p>
                </div>
                
            </div>
        )
    } else if (props.item.timeToGo === "Summer") {
        return (
            <div className="spotListItem" style={{backgroundColor: "rgba(229,52,72,.3)"}}>
                <div className="imgContainer">
                    <img src={props.item.imgUrl} alt={props.item.imgAlt} className='destinationPic'/>
                </div>
                <div className="infoContainer">
                    <h1>{props.item.place}</h1>
                    <span className="price">${props.item.price}</span> <span className="dollarSigns">{dollarSigns}</span>
                    <p className="timeToGo">{props.item.timeToGo}</p>
                </div>
                
            </div>
        )

    } else if (props.item.timeToGo === "Fall") {
        return (
            <div className="spotListItem" style={{backgroundColor: "rgba(152,58,6,.3)"}}>
                <div className="imgContainer">
                    <img src={props.item.imgUrl} alt={props.item.imgAlt} className='destinationPic'/>
                </div>
                <div className="infoContainer">
                    <h1>{props.item.place}</h1>
                    <span className="price">${props.item.price}</span> <span className="dollarSigns">{dollarSigns}</span>
                    <p className="timeToGo">{props.item.timeToGo}</p>
                </div>
                
            </div>
        )

    } else if (props.item.timeToGo === "Winter") {
        return (
            <div className="spotListItem" style={{backgroundColor: "rgba(0,94,114,.3)"}}>
                <div className="imgContainer">
                    <img src={props.item.imgUrl} alt={props.item.imgAlt} className='destinationPic'/>
                </div>
                <div className="infoContainer">
                    <h1>{props.item.place}</h1>
                    <span className="price">${props.item.price}</span> <span className="dollarSigns">{dollarSigns}</span>
                    <p className="timeToGo">{props.item.timeToGo}</p>
                </div>
                
            </div>
        )

    }
    
    
}