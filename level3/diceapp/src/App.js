import React from "react";
import DiceBox from "./DiceBox";

export default function App() {
    const [lockedNumbers, setLockedNumbers]  = (["x", 5, "x", "x", "x"])
    const [numbers, setNumbers] = React.useState([null, null, null, null, null])

    function handleRoll() {
        setNumbers([(Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6))])
        // for (let i = 0; i < numbers.length; i++) {
        //     if (lockedNumbers[i] !== "x") {
        //         setNumbers(withoutLockedNumsArr => {
        //             let withLockedNums = [...withoutLockedNumsArr]
        //             withLockedNums[i] = lockedNumbers[i]
        //             console.log(withLockedNums)
        //             return withLockedNums

        //         })
        //     }
        // }
    }
    const [colorVar, setColorVar] = React.useState('white')
    function changeColorLockNumber() {
        if (colorVar === 'white') {
            setColorVar('lightgray')

        } else {
            setColorVar('white')
        }
    }

    return (
        <div className="appContainer">
            <DiceBox numbers={numbers} />

            <div className="buttonBox">
                <button onClick={handleRoll}>Roll the dice</button>
            </div>
            
        </div>
    )
}