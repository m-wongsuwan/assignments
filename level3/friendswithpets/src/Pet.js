// .map() through an array of friends. render a <Friend /> componenet passing through name/age and pets of each friend
//<Friend /> should display info nicely.
//<Friend /> should map through the pets array and render <Pet />

import React from "react";

export default function Pet(props) {
    return (
        <div>
            <h4>"{props.pItem.name.toLowerCase()}" the {props.pItem.breed.toLowerCase()}</h4>
        </div>
    )
}