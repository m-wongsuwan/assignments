import React from "react";

export default function Die(props) {
    const lockStyles = {
        backgroundColor: props.isLocked ? "#CCCCCC" : "transparent"
    }

    return (
        <div className="die" id={props.gridArea} onClick={()=>props.toggleLock(props.id)} style={lockStyles}>
            <h3>{props.number}</h3>
        </div>
    )
}