import React from "react";
import Joke from './Joke'

export default function App() {
    return (
        <div>
            <Joke 
                setup="Why did the chicken cross the road?"
                punchline="Adverse childhood experiences"
            />
            <Joke 
                setup="How many gallons of paint does it take to contaminate 1 million gallons of water?"
                punchline="One"
            />
            <Joke 
                setup="Set up no punchilne"
            />
            <Joke 
                setup="When will I be satisfied?"
                punchline="I will never be satisfied"
            />

        </div>
    )
}