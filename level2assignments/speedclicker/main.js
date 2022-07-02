const clickCountDisplay = document.getElementById("clickCount")
const clickCountSinceRefreshDisplay = document.getElementById("clickCountSinceRefresh")
const timeRemaining = document.getElementById("timeRemaining")
const container = document
let timeCount = 0
let amnesiaCount = 0
let allowClicks = true

if (localStorage.getItem("clickCount") === false) {
    localStorage.setItem("clickCount", 0)
}

let clickCount = JSON.parse(localStorage.getItem("clickCount"))

clickCountDisplay.textContent = `Lifetime clicks: ${clickCount}`
clickCountSinceRefreshDisplay.textContent = `Clicks since last refresh: 0`

container.addEventListener("click", function() {
    if (allowClicks === true) {
        clickCount++
        amnesiaCount++
        localStorage.setItem("clickCount", clickCount)
        clickCountDisplay.textContent = `Lifetime clicks: ${clickCount}`
        clickCountSinceRefreshDisplay.textContent = `Clicks since last refresh: ${amnesiaCount}`
    }
})

const disallowClicksFunction = () => {
    allowClicks = false
}

setTimeout(disallowClicksFunction, 10000)

let intervalID = setInterval(() => {
    timeCount++
    timeRemaining.innerText = `You have ${10 - timeCount} seconds remaining.`
}, 1000);

function stopTimeCount(){
    clearInterval(intervalID)
}

setTimeout(stopTimeCount, 10000)