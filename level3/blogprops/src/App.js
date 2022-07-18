import React from "react";
import data from "./data.js"
import Header from './Header.js'
import BlogList from "./BlogList.js";
import Footer from "./Footer.js";

export default function App() {
    console.log(data)
    return (
        <div>
            <Header />
            <div className="blogListContainer">
                <BlogList />
            </div>
            <hr className="bottomHr"/>
            <Footer />
        </div>
    )
}