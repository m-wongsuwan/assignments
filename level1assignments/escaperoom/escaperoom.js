const readline = require("readline-sync");

let lastAction = 0

let haveKey = false;
let randomThingCount = 0
let doorFailCount = 0

const doorFailMessage = ["You try the handle but the door is locked tight.", "It may just be your imagination, but you think the hinges may have some give.", "You struggle wildly but the door remains closed."]
const options = ["Put your hand in the hole.", "Search for a key", "Try to open the door"]
const randomThing = ["a dead beetle", "a copy of Good Housekeeping", "a 1968 penny", "one airpod with half the casing missing"]

const playAgain = () => {
    doorFailCount = 0
    lastAction = -1
    haveKey = false
    console.log("You find yourself in a dark and dingy room.")
    promptAction()
}

const doAction = () => {
    if (lastAction === 0) {
        console.log("Something latches onto your arm and won't let go. You go into shock and never open your eyes again.")
        if (readline.keyInYN('Do you want to play again?')) {
            playAgain()
        } else {
            console.log("Goodbye.")
        }
    } else if (lastAction === 1) {
        if (haveKey === false) {
            console.log("You look around the room and find a key.")
            haveKey = true
            promptAction()
        } else if (haveKey === true && randomThingCount < randomThing.length) {
            console.log(`You also find ${randomThing[randomThingCount]}.`)
            randomThingCount++
            promptAction()
        } else {
            console.log('Your pockets are stuffed. Maybe it\'s time to leave')
            promptAction()
        }
    } else if (lastAction === 2) {
        openDoor()
    } else if (lastAction === -1) {
        playAgain()
    }
}

const promptAction = () => {
    lastAction = readline.keyInSelect(options, "What will you do?")
    doAction()
}

const openDoor = () => {
    if (haveKey === true) {
        console.log("The key fits and you escape.")
    } else if (haveKey === false && doorFailCount <= 2) {
        console.log(doorFailMessage[doorFailCount])
        doorFailCount++
        promptAction()
    } else if (haveKey === false && doorFailCount === 3) {
        console.log("You put your last ounce of energy into trying to force the door open, but to no avail.")
        doorFailCount++
        promptAction()
    }  else if (haveKey === false && doorFailCount > 3) {
        console.log("You move to make one last attempt at the door, but the effort proves too much. You pass in and out")
        console.log("of consciousness for the next several days before finally breathing your last breath. ")
        if (readline.keyInYN('Do you want to play again?')) {
            playAgain()
        } else {
            console.log("Goodbye.")
        }

}}

console.log("You find yourself in a dark and dingy room. Scrawled")
console.log("on the wall in blood are the words: ESCAPE OR DIE. You")
console.log("see a locked door and a hole in one corner just big enough")
console.log("for your arm to fit into, though you can't see inside.")
promptAction()
