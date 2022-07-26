import React from "react";

export default function Die(props) {
    const [lockedNumbers, setLockedNumbers]  = ([null, null, null, null, null])
    const [colorVar, setColorVar] = React.useState('white')
    function changeColorLockNumber() {
        if (colorVar === 'white') {
            setColorVar('lightgray')
            // lockedNumbers[props.gridID] = props.number
            // console.log(lockedNumbers)

        } else {
            setColorVar('white')

        }
    }
    return (
        <div className="die" id={props.gridID} onClick={changeColorLockNumber} style={{backgroundColor: colorVar}}>
            <h1>{props.number}</h1>
        </div>
    )
}