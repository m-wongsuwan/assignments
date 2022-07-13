import React from "react";
import facebookicon from "./icons/facebookicon.svg"
import githubicon from './icons/githubicon.svg'
import twittericon from './icons/twittericon.svg'

export default function Footer() {
    return (
        <footer className="footer">
            
            <a href="https://www.facebook.com/morgan.wongsuwan/" target="_blank"><img src={facebookicon} /></a>
            <a href="https://twitter.com/morganWubs" target="_blank"><img src={twittericon} /></a>
            <a href="https://github.com/m-wongsuwan/" target="_blank"><img src={githubicon} /></a>

        </footer>
    )
}