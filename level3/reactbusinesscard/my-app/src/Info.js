import React from "react";
import photo from "./photo.png"

export default function Info() {
    return (
        <div className="infoContainer">
            <img src={photo} />
            <h1>Morgan Wongsuwan</h1>
            <h3>Full Stack Developer Student</h3>
            <a href="https://github.com/m-wongsuwan">https://github.com/m-wongsuwan</a>

            <button>Email</button>
            <button>LinkedIn</button>
        </div>
    )
}