import React from "react";
import Banner from './Banner'
import Entry from './Entry'
import data from './data.js'

export default function App() {
    const itemsArr = data.map(item => {
        // const hrOrNo = function() {
        //     if (item.title !== 'ICF 2022') {
        //         return <hr />
        //     }
        // }
        return (
            <div className="tester">
                <Entry 
                    item={item}/>
                    {hrOrNo()}
            </div>
                
        )
    })
    
    return (
        <div>
            <Banner />
            <section className="mainContent">
                {itemsArr}
            </section>
        </div>
    )
}