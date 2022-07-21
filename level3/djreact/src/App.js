import React from "react";
import Square from "./Square";
import Controls from "./Controls"
import csscolors from "./csscolors";

export default function App() {
    const [squareColors, setSquareColors] = React.useState(["white", "white", "white", "white"])
    const squareMap = squareColors.map(item => {
        return (
            <Square 
                color = {item}
              />
        )
    })

    function playAudio(url) {
        new Audio(url).play();
      }

    function btn1Func() {
        playAudio('https://cdn.freesound.org/previews/642/642668_14110264-lq.mp3')
        if (squareColors[0] === 'white') {
            setSquareColors(['black', 'black', 'black', 'black'])
        } else {
            setSquareColors(["white", "white", "white", "white"])
        }
    }
    function btn2Func() {
        playAudio('https://cdn.freesound.org/previews/445/445078_7535020-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = ['purple', 'purple', prevArr[2], prevArr[3]]
            return newColors
        })
    }
    function btn3Func () {
        playAudio('https://cdn.freesound.org/previews/640/640433_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [prevArr[0], prevArr[1], 'blue', prevArr[3]]
            return newColors
        })
    }
    function btn4Func () {
        playAudio('https://cdn.freesound.org/previews/640/640316_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [prevArr[0], prevArr[1], prevArr[2], 'blue']
            return newColors
        })
    }
    function btn5Func () {
        playAudio('https://cdn.freesound.org/previews/640/640316_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [csscolors[Math.floor(Math.random() * csscolors.length)], prevArr[1], prevArr[2], prevArr[3]]
            return newColors
        })
    }
    function btn6Func () {
        playAudio('https://cdn.freesound.org/previews/640/640316_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [prevArr[0], csscolors[Math.floor(Math.random() * csscolors.length)], prevArr[2], prevArr[3]]
            return newColors
        })
    }
    function btn7Func () {
        playAudio('https://cdn.freesound.org/previews/640/640316_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [ prevArr[0], prevArr[1],csscolors[Math.floor(Math.random() * csscolors.length)], prevArr[3]]
            return newColors
        })
    }
    function btn8Func () {
        playAudio('https://cdn.freesound.org/previews/640/640316_14110264-lq.mp3')
        setSquareColors(prevArr => {
            let newColors = [prevArr[0], prevArr[1], prevArr[2], csscolors[Math.floor(Math.random() * csscolors.length)]]
            return newColors
        })
    }

    
    return (
        <div className="appContainer">
            <div className="squaresContainer">
                {squareMap}
            </div>
            <Controls 
                handleBtn1 = {btn1Func}
                handleBtn2 = {btn2Func}
                handleBtn3 = {btn3Func}
                handleBtn4 = {btn4Func}
                handleBtn5 = {btn5Func}
                handleBtn6 = {btn6Func}
                handleBtn7 = {btn7Func}
                handleBtn8 = {btn8Func}
                />
        </div>
    )
}