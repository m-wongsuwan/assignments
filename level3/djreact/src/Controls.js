import React from "react";

export default function Controls(props) {
    
    // https://cdn.freesound.org/previews/642/642668_14110264-lq.mp3
    return (
        <div className="controlsBox">
            <button onClick={props.handleBtn1}>Small Time DJ</button>
            <button onClick={props.handleBtn2}>Party DJ</button>
            <button onClick={props.handleBtn3}>Pro DJ Bottom Left</button>
            <button onClick={props.handleBtn4}>Pro DJ Bottom Right</button>
            <button onClick={props.handleBtn5}>Randomize square 1</button>
            <button onClick={props.handleBtn6}>Randomize square 2</button>
            <button onClick={props.handleBtn7}>Randomize square 3</button>
            <button onClick={props.handleBtn8}>Randomize square 4</button>

        </div>
    )
}