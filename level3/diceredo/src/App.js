import React from "react";
import DiceBox from "./DiceBox";

export default function App() {
    const [numbers, setNumbers] = React.useState([
        {number: 0, locked: false, id: "003", gridArea: "c"},
        {number: 0, locked: false, id: "002", gridArea: "b"},
        {number: 0, locked: false, id: "004", gridArea: "d"},
        {number: 0, locked: false, id: "001", gridArea: "a"},
        {number: 0, locked: false, id: "005", gridArea: "e"}
    ])
    const [resetCounter, setResetCounter] = React.useState(0)


    function rollDice(id) {
        setResetCounter(prevCount => prevCount + 1)
        if (resetCounter < 3) {
            setNumbers(prevNumbers =>{
                const returnNumbers = []
                for (let i = 0; i < numbers.length; i++) {
                    let currentDie = prevNumbers[i]
                    if (!currentDie.locked) {
                        const updatedDie = {
                            ...currentDie,
                            number: Math.ceil(Math.random() * 6)
                        }
                        returnNumbers.push(updatedDie)
                    } else {
                        returnNumbers.push(currentDie)
                    }
                }
                return returnNumbers
            })
        } else {
            setResetCounter(0);
            setNumbers([
                {number: 0, locked: false, id: "003", gridArea: "c"},
                {number: 0, locked: false, id: "002", gridArea: "b"},
                {number: 0, locked: false, id: "004", gridArea: "d"},
                {number: 0, locked: false, id: "001", gridArea: "a"},
                {number: 0, locked: false, id: "005", gridArea: "e"}
            ])
        }

    }

    function toggleLock(id) {
        setNumbers(prevState => {
            let returnNumbers = []
            for (let i = 0; i < numbers.length; i++) {
                let currentState = prevState[i]
                if (currentState.id === id) {
                    currentState = {
                        ...currentState,
                        locked: !currentState.locked
                    }
                    returnNumbers.push(currentState)
                } else {
                    returnNumbers.push(currentState)
                }
            }
            return returnNumbers
        })
    }

    function handleChange(event) {
        console.log(event.target.value)
    }

    return (
        <div className="appContainer">
            <DiceBox diceArray={numbers} toggleLock={toggleLock}/>
            <div className="buttonBox">
                <button onClick={rollDice}>{resetCounter >= 3 ? "Reset" : "Roll Dice"}</button>
            </div>

            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </form>

        </div>
    )
}