// .map() through an array of friends. render a <Friend /> componenet passing through name/age and pets of each friend
//<Friend /> should display info nicely.
//<Friend /> should map through the pets array and render <Pet />

import React from "react";
import Friend from './Friend.js'
import data from "./data.js";

export default function FriendList() {
    const friend = data.map(item => {
        return (
            <Friend
                item = {item} />
        )
    })
    return (
        <div className="friendListBox">
            {friend}
        </div>
    )
}