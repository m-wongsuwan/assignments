import React from "react";
import data from './data.js'
import FriendList from "./FriendList.js";
import Header from "./Header.js";

export default function App() {
    return (
        <div className="appContainer">
            <Header />
            <FriendList />
        </div>
    )
}