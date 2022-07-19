import React from "react";
import data from "./data";
import Header from "./Header";
import VacationSpot from "./VacationSpot";

export default function App() {
    const vacationSpots = data.map(item => {
            return (
                <VacationSpot 
                    item = {item} />

            )
        })
    return (
        <div className="appContainer">
            <Header />
            <div className="vacationSpotsContainer">
                {vacationSpots}
            </div>
            
        </div>
    )
}