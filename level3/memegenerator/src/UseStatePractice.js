import React from "react";

export default function UseStatePractice() {
    // const [people, setPeople] = React.useState([
    //     {
    //         firstName: "John",
    //         lastName: "Smith"
    //     }
    // ])
    // const obj = {firstName: "Mary", lastName: "Sue"}
    const [person, setPerson] = React.useState({
		firstName: "John",
		lastName: "Smith"
})



    function handleTestClick() {
        setPerson(prevState => {
            return {
                ...prevState,
                age: 30
            }
        })
        
        // setPeople(prevState => {
        //     return [...prevState, obj]
        // })
        console.log(person)
    }
    return (
        <div>
            <h1 onClick={handleTestClick}>hello</h1>
        </div>
    )
}