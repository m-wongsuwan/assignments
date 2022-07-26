import React from "react";

export default function App() {
    const [inputAndList, setinputAndList] = React.useState({
        list: [],
        nameEntry: ""
    })
    const listOfNames = inputAndList.list.map(name => {
       return <li key={name}> {name} </li>
    })

    function handleChange(event) {
        const {name, value} = event.target

        setinputAndList(prevState => (
            {...prevState,
            [name]: value
            }))

    }
    function handleSubmit(event) {
        event.preventDefault()
        setinputAndList(prevState => {
            return {
                ...prevState,
                list: [...prevState.list, inputAndList.nameEntry],
                nameEntry: ""
            }
        })
    }
    console.log(inputAndList.nameEntry)
    console.log(inputAndList.nameEntry.value)
    return (
        <div className="appContainer">
            <h1>Name: {inputAndList.nameEntry}</h1>
            <ol>
                {listOfNames}
            </ol>
            <form onSubmit={handleSubmit}>
                <input
                    name="nameEntry" 
                    placeholder="Name Entry" 
                    value={inputAndList.nameEntry}
                    onChange={handleChange}
                    />
                <button>Submit Name</button>
            </form>
        </div>
    )
}