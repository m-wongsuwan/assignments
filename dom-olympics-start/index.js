const headerElement = document.getElementById("header")
const headerClass = document.getElementsByClassName("header")
const clearButton = document.getElementById("clear-button")
const messagesDiv = document.getElementById("messagesDiv")
const messagesLeft = document.getElementsByClassName("message left")
const messagesRight = document.getElementsByClassName("message right")
const themeDropDown = document.getElementById("theme-drop-down")
const sendButton = document.getElementById("sendButton")
const input = document.getElementById("input")

let leftMessagesArray = ["I am so excited to work with you!", "I'm available tomorrow at 2pm MST over Slack :)"];
let rightMessagesArray = ["I feel the same! When should we meet?", "Great! I'll put it on my calendar."]


let fixColor = () => {
    const allRightMessages = document.getElementsByClassName("message right");
    const allLeftMessages = document.getElementsByClassName("message left");
    if (themeDropDown.value === "theme-one") {
        for (i = 0; i < allRightMessages.length; i++) {
            allRightMessages[i].style.backgroundColor = "lightblue";
            allRightMessages[i].style.color = "black";
        }
        for (i = 0; i < allLeftMessages.length; i++) {
            allLeftMessages[i].style.backgroundColor = "burlywood";
        }
    } else if (themeDropDown.value === "theme-two") {
        for (i = 0; i < allLeftMessages.length; i++) {
            allLeftMessages[i].style.backgroundColor = "red";
        }
        for (i = 0; i < allRightMessages.length; i++) {
            allRightMessages[i].style.backgroundColor = "black";
            allRightMessages[i].style.color = "white";
        }

    }
}

let replaceNegMessages = () => {
    for (i = 0; i < leftMessagesArray.length; i++) {
        messagesLeft[i].textContent = leftMessagesArray[i]
    }
    for (i = 0; i < leftMessagesArray.length; i++) {
        messagesRight[i].textContent = rightMessagesArray[i]
    }
}

replaceNegMessages();




clearButton.addEventListener("click", function () {
    messagesDiv.innerHTML = ""
})


let messageCount = 1;

sendButton.addEventListener("click", function() {
    console.log(rightMessagesArray.length)
    if (messageCount % 2 === 0) {
        if (themeDropDown.value === "theme-one") {
            messagesDiv.innerHTML += "<div class=\"message right\">" + input.value + "</div>";
            messageCount++;            
        } else if (themeDropDown.value === "theme-two") {
            messagesDiv.innerHTML += "<div class=\"message right\">" + input.value + "</div>";
            messageCount++;            
        }
    } else {
        if (themeDropDown.value === "theme-one") {
            messagesDiv.innerHTML += "<div class=\"message left\">" + input.value + "</div>";
            messageCount++;            
        } else if (themeDropDown.value === "theme-two") {
            messagesDiv.innerHTML += "<div class=\"message left\">" + input.value + "</div>";
            messageCount++;            
        }

    
    }
    fixColor();
}
)



headerElement.textContent = "JavaScript Made this!!"
headerElement.style.fontFamily = "serif"
headerElement.style.fontSize = "30px"
headerElement.style.fontWeight = "bold"
headerClass[0].innerHTML += "<h5 id=\"nameSubheading\"><span class=\"name\">Morgan Wongsuwan</span> <span>wrote the JavaScript</span></h5><br>"
const nameSubheading = document.getElementById("nameSubHeading")
//nameSubheading.style.fontFamily = "serif"
//nameSubheading.style.fontWeight = "bold"

let applyTheme = () => {
    const allRightMessages = document.getElementsByClassName("message right");
    const allLeftMessages = document.getElementsByClassName("message left");
    if (themeDropDown.value === "theme-one") {
        for (i = 0; i < allRightMessages.length; i++) {
            allRightMessages[i].style.backgroundColor = "lightblue";
            allRightMessages[i].style.color = "black";
        }
        for (i = 0; i < allLeftMessages.length; i++) {
            allLeftMessages[i].style.backgroundColor = "burlywood";
        }
    } else if (themeDropDown.value === "theme-two") {
        for (i = 0; i < allLeftMessages.length; i++) {
            allLeftMessages[i].style.backgroundColor = "red";
        }
        for (i = 0; i < allRightMessages.length; i++) {
            allRightMessages[i].style.backgroundColor = "black";
            allRightMessages[i].style.color = "white";
        }
        }
    }

themeDropDown.addEventListener("click", function() {
    applyTheme();
    console.log("test")
})
const allRightMessages = document.querySelectorAll(".right, .message")