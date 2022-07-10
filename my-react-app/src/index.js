import React from "react"
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import MainContent from "./MainContent"

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

function App() {
    return(
        <div className="container">
            <Nav />
            <MainContent />
        </div>
    )
}

root.render(<App />)