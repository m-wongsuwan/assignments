import React from "react";
import memesData from "./memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    )
    // why set allMemeImages as a state variable rather than just use memesData.data.memes?

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    console.log(allMemeImages)

    const memesArr = allMemeImages.data.memes

    function handleClick(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        setMeme( prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        }
            )

    }
    return (
        <main className="mainBox">
            <form name="input" className="form">
                {/* <div className="inputs"> */}
                    <input className="topInput" placeholder="Top Text"></input>
                    <input className="bottomInput" placeholder="Bottom Text"></input>
                {/* </div> */}
                <button onClick={handleClick}>Get a new meme image 🖼️</button>    
            </form>
            <div className="imgBox">
                <img src={meme.randomImage} className="memeImage"/>   
            </div>
            
        </main>
    )
}