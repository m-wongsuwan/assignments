import React from "react";
import twittericon from './twittericon.svg'
import facebookicon from './facebookicon.svg'
import githubicon from './githubicon.svg'

export default function Footer() {
    return (
        <div className="footer">
            <img src={twittericon} alt="Twitter icon" className="footerIcon" />
            <img src={facebookicon} alt="Facebook icon" className="footerIcon" />
            <img src={githubicon} alt="Github icon" className="footerIcon" />
            <div class="break"></div>
            <p className="copyright">Copyright © Your Website 2022</p>
        </div>
    )
}