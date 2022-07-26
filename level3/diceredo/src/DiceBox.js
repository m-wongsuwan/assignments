import React from "react";
import Die from "./Die";

export default function DiceBox(props) {
    // props.diceArray[0].id
    // props.diceArray[0].number
    // props.diceArray[0].locked
    const dices = props.diceArray.map(die => {
        return (
            <Die 
                number={die.number}
                isLocked={die.locked}
                key={die.id}
                id={die.id}
                gridArea={die.gridArea}
                toggleLock={props.toggleLock}
            />
        )
    })

    return (
        <div className="diceBox">
            {dices}
        </div>
    )
}