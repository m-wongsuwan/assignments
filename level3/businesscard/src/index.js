import React from "react";
import ReactDOM from 'react-dom'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

function App() {
    return (
        <div className="everythingContainer">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

root.render(<App />)