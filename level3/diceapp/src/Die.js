import React from "react";

export default function Die(props) {
    let lockedNumbers = [null, null, null, null, null]
    const [colorVar, setColorVar] = React.useState('white')
    function crimbop() {
        if (colorVar === 'white') {
            setColorVar('lightgray')

        } else {
            setColorVar('white')
        }
    }
    return (
        <div className="die" id={props.gridID} onClick={crimbop} style={{backgroundColor: colorVar}}>
            <h1>{props.number}</h1>
        </div>
    )
}