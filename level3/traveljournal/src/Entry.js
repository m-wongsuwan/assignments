import React from "react";

export default function Entry(props) {
    console.log(props)
    return (
        <div>
            <img src={props.item.imageUrl} alt="Mount Fuji"/>
            <p>{props.item.location}</p><span>{props.item.googleMapsUrl}</span>
            <h1>{props.item.title}</h1>
            <span>{props.item.startDate}</span><span>{props.item.endDate}</span>
            <p>{props.item.description}</p>
        </div>
    )
}