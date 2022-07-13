import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

function App() {
    return (
        <div className="theWholeThing">
            <Navbar />
            {/* <Hero /> */}
            <section className="cards">
                <Card />
            </section>
        </div>
    )
}

root.render(<App />)