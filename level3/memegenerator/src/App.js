import React from "react";
import Header from "./Header";
import Meme from './Meme'
// import UseStatePractice from "./UseStatePractice";

export default function App() {
    return (
        <div className="appContainer">
            <Header />
            <div className="content">
                <Meme />
            </div>
            {/* <UseStatePractice /> */}
        </div>
    )
}