import React from "react";
const axios = require('axios');

export default function App() {
    const [color, setColor] = React.useState("~")
    
    React.useEffect(() => {
        axios
            .get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(function (response) {
                setColor(response.data.colors[0].hex)
            })
    }, [])

    const style = {
        backgroundColor: `#${color}`
    }

    function helpMe() {
        axios
            .get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(function (response) {
                setColor(response.data.colors[0].hex)
            })
    }
    return (
        <div className="daBox" style={style} onClick={helpMe}>
            <p className="heyThere">hey there.</p>
        </div>
    )
}
