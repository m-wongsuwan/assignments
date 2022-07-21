// .map() through an array of friends. render a <Friend /> componenet passing through name/age and pets of each friend
//<Friend /> should display info nicely.
//<Friend /> should map through the pets array and render <Pet />

import React from "react";
import Pet from './Pet.js'

export default function Friend(props) {
    const pet = props.item.pets.map(pItem => {
        return (
            <Pet
                pItem = {pItem} />
        )
    })

    return (
        <section className="friendBox">
            <h1>{props.item.name.toLowerCase()}</h1>
            <h3>age: {props.item.age}</h3>
            {pet}
        </section>
    )
}