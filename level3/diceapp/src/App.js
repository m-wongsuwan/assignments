import React from "react";
import DiceBox from "./DiceBox";

export default function App() {
    const [numbers, setNumbers] = React.useState([null, null, null, null, null])

    function handleRoll() {
        setNumbers([(Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6))])

    }

    return (
        <div className="appContainer">
            <DiceBox numbers={numbers}/>

            <div className="buttonBox">
                <button onClick={handleRoll}>Roll the dice</button>
            </div>
            
        </div>
    )
}