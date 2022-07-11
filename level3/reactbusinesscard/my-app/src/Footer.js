import React from "react";
import facebookicon from "./icons/facebookicon.svg"
import githubicon from './icons/githubicon.svg'
import twittericon from './icons/twittericon.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <img src={facebookicon} />
            <img src={twittericon} />
            <img src={githubicon} />

        </footer>
    )
}