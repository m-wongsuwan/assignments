import React from "react";

export default function App() {
    const [badge, setBadge] = React.useState({
        badges:[],
        firstName: "",
        lastName: "",
        email: "",
        birthplace: "",
        phone: "",
        favFood: "",
        about: ""
        })

        const allAreMinLength = badge.firstName.length >= 3 &&
        badge.lastName.length >= 3 &&
        badge.email.length >= 3 &&
        badge.birthplace.length >= 3 &&
        badge.phone.length >= 3 &&
        badge.favFood.length >= 3 &&
        badge.about.length >= 3 

    function handleChange(event) {
        const {name, value} = event.target
        setBadge(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        
        let isNum = /^[0-9]+$/.test(badge.phone)
        if (!isNum) {
            return alert("Phone number field must contain only numbers, no '-', '()' or other characters")
        }

        if (allAreMinLength) {
            setBadge(prevState => {
                return {
                    ...prevState,
                    badges: [...prevState.badges, {
                        // prevState.firstName.value vs prevState.firstName
                        firstName: prevState.firstName,
                        lastName: prevState.lastName,
                        email: prevState.email,
                        birthplace: prevState.birthplace,
                        phone: prevState.phone,
                        favFood: prevState.favFood,
                        about: prevState.about
                    }],
                    firstName: "",
                    lastName: "",
                    email: "",
                    birthplace: "",
                    phone: "",
                    favFood: "",
                    about: ""
                }
            })
        } else {
            alert("All field must have at least three characters")
        }
    }
    let grayOrWhiteAccumulator = 0
    const displayBadges = badge.badges.map(item => {
        const style = {
            backgroundColor: grayOrWhiteAccumulator % 2 === 0 ? "darkgray" : "black"
        }
        grayOrWhiteAccumulator = grayOrWhiteAccumulator + 1
        return (
            <div key={item.firstName} className="completedBadge">
                <h3 style={style}>Badge:</h3>
                <div className="completedBadgeGrid">
                    <span className="completedBadgeInfoItem">Name: {item.firstName} {item.lastName}</span>
                    <span className="completedBadgeInfoItem">Phone: {item.phone}</span>
                    <span className="completedBadgeInfoItem">Place of birth: {item.birthplace}</span>
                    <span className="completedBadgeInfoItem">Favorite food: {item.favFood}</span>
                    <span className="completedBadgeInfoItem">Email: {item.email}</span>
                    <div className="completedBadgeInfoItem completedAbout">{item.about}</div>
                </div>
                
            </div>
        )

    })

    return (
        <div className="appContainer">
            <form onSubmit={handleSubmit} name="badgeForm" className="badgeForm">
                <input 
                    type="text" 
                    placeholder="First Name"
                    className="form--input"
                    name="firstName"
                    value={badge.firstName}
                    onChange={handleChange}
                    required
                      />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    className="form--input"
                    name="lastName"
                    value={badge.lastName}
                    onChange={handleChange}
                    required
                      />
                <input 
                    type="email" 
                    placeholder="Email"
                    className="form--input"
                    name="email"
                    value={badge.email}
                    onChange={handleChange}
                    required
                      />
                <input 
                    type="text" 
                    placeholder="Place of Birth"
                    className="form--input"
                    name="birthplace"
                    value={badge.birthplace}
                    onChange={handleChange}
                    required
                      />
                <input 
                    type="tel" 
                    placeholder="Phone"
                    className="form--input"
                    name="phone"
                    value={badge.phone}
                    onChange={handleChange}
                    required
                      />
                <input 
                    type="text" 
                    placeholder="Favorite Food"
                    className="form--input"
                    name="favFood"
                    value={badge.favFood}
                    onChange={handleChange}
                    required
                      />
                <textarea 
                    placeholder="Tell us about yourself"
                    className="form--input form--about"
                    name="about"
                    value={badge.about}
                    onChange={handleChange}
                    required
                      />
                
                <button className="form--submit">Submit</button>
            </form>
            <div className="completedBadgeContainer">
                {displayBadges}
            </div>
            
            
        </div>
    )
}