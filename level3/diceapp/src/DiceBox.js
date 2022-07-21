import React from "react";
import Die from "./Die";

export default function DiceBox(props) {
    return (
        <div className="diceBox">
            <Die number={props.numbers[0]} gridID='a'/>
            <Die number={props.numbers[1]} gridID='b'/>
            <Die number={props.numbers[2]} gridID='c'/>
            <Die number={props.numbers[3]} gridID='d'/>
            <Die number={props.numbers[4]} gridID='e'/>
            
        </div>
    )
}