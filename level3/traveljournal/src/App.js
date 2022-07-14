import React from "react";
import Banner from './Banner'
import Entry from './Entry'
import data from './data.js'

export default function App() {
    const itemsArr = data.map(item => {
        return (
            <Entry 
                item={item}/>
        )
    })
    
    return (
        <div>
            <Banner />
            <section>
                {/* change to map */}
                {itemsArr}
            </section>
        </div>
    )
}