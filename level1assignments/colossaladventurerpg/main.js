const readline = require("readline-sync");
let walkProgress = 0;
let wantsToPlay = true;

let lastAction = ""

const uneventfulWalkMessage = ["You continue on your way without incident.", "You make some progress before setting camp for the night.", "An uneventful day's walk"]

const lowLevelTreasure = [
    {itemName: "Mace of Bludgeoning", bonusAttDef: [.3, 0]},
    {itemName: "Shield of Protection", bonusAttDef: [0, .2]},
    {itemName: "Ring of Minor Muscles", bonusAttDef: [.1, .1]},
    {itemName: "Silly Hat", bonusAttDef: [0, .01]},
]
const highLevelTreasure = [
    {itemName: "Ryan's Armor", bonusAttDef: [0, .4]},
    {itemName: "Ryan's Wedding Photos", bonusAttDef: [0, 0], message: "No stat bonus, but holds sentimental value."}
]

const playerInfo = {
    name: "Stranger",
    health: 50,
    items: [{itemName: "Morbius Blu-Ray", bonusAttDef: [0, 0], message: "You really need to return this to the video store."}],
}

const monsterList = [
    {name: "Cara Kula", health: 50, attackModifier: .4, encounterMessage: "I made you a sandwich and drizzled hibiscus syrup on it. NOW DIE.", treasure: lowLevelTreasure},
    {name: "Goblin Runt", health: 30, attackModifier: .6, encounterMessage: "You wouldn't hurt someone so small and pathetic would you? HYAAA.", treasure: lowLevelTreasure},
    {name: "Bandit Leader", health: 40, attackModifier: .8, encounterMessage: "So no one told you about the toll to pass through here?", treasure: lowLevelTreasure},
    {name: "A Grizzly Bear", health: 40, attackModifier: .9, encounterMessage: "I'm actually a black bear, it's a common mistake.", treasure: lowLevelTreasure},
    {name: "Ryan", health: 200, attackModifier: .2, encounterMessage: "S'up.", treasure: highLevelTreasure},
]

const welcome = () => {
    playerInfo.name = readline.question("Welcome traveller. Before you begin your journey, what is your name? ")
    console.log(`And so your journey begins, ${playerInfo.name}.`)
    promptAction()
}

const promptAction = () => {
    lastAction = readline.question("What would you like to do? 'walk' ('w') or 'print' player info ('p') ")
    if (lastAction.toLowerCase() === 'walk' || lastAction.toLowerCase() === 'w') {
        walk()
    } else if (lastAction.toLowerCase() === 'print' || lastAction.toLowerCase() === 'p') {
        console.log(`The warrior ${playerInfo.name} has ${playerInfo.health} HP.`)
        if (playerInfo.items.length === 0 ) {
            console.log(`You have no items in your inventory`)
        }
        else {
            let atkBonus = 0
            for (let i = 0; i < playerInfo.items.length; i++) {
                atkBonus += playerInfo.items[i].bonusAttDef[0]
            }
            let defBonus = 0
            for (let i = 0; i < playerInfo.items.length; i++) {
                defBonus += playerInfo.items[i].bonusAttDef[1]
            }
            console.log(`Inventory: `)
            for (let i = 0; i < playerInfo.items.length; i++)
            if (playerInfo.items[i].message) {
                console.log(`You hold ${playerInfo.items[i].itemName}. ${playerInfo.items[i].message}`)
            } else {
                console.log(`You hold ${playerInfo.items[i].itemName}, it grants a ${playerInfo.items[i].bonusAttDef[0] * 100}% bonus to your attack and a ${playerInfo.items[i].bonusAttDef[1] * 100}% defense bonus.`)
            }
            
        }
        console.log(`You have made ${walkProgress} day's progress.`)
        promptAction()
    } else {
        console.log('Please type exactly "print", "p", "walk", or "w"')
        promptAction()
    }
}

const walk = () => {
    while (walkProgress < 10 && wantsToPlay === true){
        let encounterDie = Math.random()
        if (encounterDie > .33) {
            console.log(uneventfulWalkMessage[Math.floor(Math.random() * uneventfulWalkMessage.length)])
            walkProgress++
            promptAction()
        } else {
            encounter()
        }
    }
    if (walkProgress >= 10) {
        console.log(`Success!`)
        console.log(`You've travelled very far to get here, but you've finally arrived at Ye Olde Video Store to return your copy of Morbius on Blu-Ray.`)
        playAgain()
    } else {
        console.log("Better luck next time.")
        playAgain()
    }
}

const playAgain = () => {
    if (readline.keyInYN(`Do you want to play again?`)) {
        playerInfo.health = 50;
        playerInfo.items = [{itemName: "Morbius Blu-Ray", bonusAttDef: [0, 0], message: "You really need to return this to the video store."}];
        walkProgress = 0
        welcome()

    } else {
        console.log("Goodbye")
        process.exit()

    }
}

const encounter = () => {
    if (wantsToPlay === true) {
        let monster = monsterList[(Math.floor(Math.random()*4))]
        let monstEncounterHealth = monster.health
    let atkBonus = 1
    for (let i = 0; i < playerInfo.items.length; i++) {
        atkBonus += playerInfo.items[i].bonusAttDef[0]
    }
    let defBonus = 1
    for (let i = 0; i < playerInfo.items.length; i++) {
        if (defBonus < .4) {
         defBonus = .4
        } else {
            defBonus -= playerInfo.items[i].bonusAttDef[1]
        }
    }
    console.log(`"${monster.encounterMessage}"`)
    let encounterChoice = readline.question(`You encounter ${monster.name}, will you "run" or "fight"? `)

    let fightFunction = () => {
        while (monstEncounterHealth > 0 && wantsToPlay === true && encounterChoice === 'fight') {
            if ( playerInfo.health > 0 && monstEncounterHealth >= 0) {
                let playerStrikeDamage = Math.floor(Math.random() * 10 * atkBonus)
                monstEncounterHealth -= playerStrikeDamage
                let monsterStrikeDamage = Math.floor(Math.random() * 10 * monster.attackModifier * defBonus)
                playerInfo.health -= monsterStrikeDamage
                console.log(`You attack for ${playerStrikeDamage} damage, ${monster.name} has ${monstEncounterHealth} hp left!`)
                console.log(`${monster.name} attacks for ${monsterStrikeDamage} damage, you have ${playerInfo.health} hp left!`)
            } else if (playerInfo.health <= 0) {
                console.log(`You died, loser!`)
                playAgain()
            }
        }
    }

    if (encounterChoice !== 'run' && encounterChoice !== 'fight') {
        console.log(`You must enter either "run" or "fight" exactly.`)
        encounterChoice = readline.question(`You encounter ${monster.name}, will you "run" or "fight"? `)
    }
    if (encounterChoice.toLowerCase() === "fight"){
        fightFunction()
        // while (monstEncounterHealth > 0 && wantsToPlay === true && encounterChoice.toLowerCase() === 'fight') {
        //     if ( playerInfo.health > 0 && monstEncounterHealth >= 0) {
        //         let playerStrikeDamage = Math.floor(Math.random() * 10 * atkBonus)
        //         monstEncounterHealth -= playerStrikeDamage
        //         let monsterStrikeDamage = Math.floor(Math.random() * 10 * monster.attackModifier * defBonus)
        //         playerInfo.health -= monsterStrikeDamage
        //         console.log(`You attack for ${playerStrikeDamage} damage, ${monster.name} has ${monstEncounterHealth} hp left!`)
        //         console.log(`${monster.name} attacks for ${monsterStrikeDamage} damage, you have ${playerInfo.health} hp left!`)
        //     } else if (playerInfo.health <= 0) {
        //         console.log(`You died, loser!`)
        //         wantsToPlay === false
        //         playAgain()
        //     }
        // }
        if (wantsToPlay === true){
            if (playerInfo.health <= 0) {
                console.log(`You defeated your enemy, but at what cost? You yourself have died.`)
                playAgain()
            } else {
                let reward = monster.treasure[Math.floor(Math.random() * monster.treasure.length)]
                playerInfo.items.push(reward)
                let healing = Math.floor(Math.random() * 15)
                playerInfo.health += healing
                walkProgress++
                console.log(`You killed ${monster.name}!`)
                console.log(`You found a ${reward.itemName} on the corpse! It may provide a bonus to your attack or defense modifiers!`)
                console.log(`You also find a healing potion which heals you for ${healing} HP. Your HP is now ${playerInfo.health}`)
                promptAction()
            }
        } else {
            console.log(`Goodbye.`)
        }
    } else if (encounterChoice.toLowerCase() === 'run') {
        let runSuccess = Math.random()
        if (runSuccess > .5) {
            console.log(`You successfully evade ${monster.name} but you don't make much progress on your journey today.`)
            walkProgress += .5
            promptAction()
        } else {
            encounterChoice = 'fight'
            console.log(`You failed to evade ${monster.name}, you'll have to fight!`)
            fightFunction()
            // while (monstEncounterHealth > 0 && wantsToPlay === true && encounterChoice === 'fight') {
            //     if ( playerInfo.health > 0 && monstEncounterHealth >= 0) {
            //         let playerStrikeDamage = Math.floor(Math.random() * 10 * atkBonus)
            //         monstEncounterHealth -= playerStrikeDamage
            //         let monsterStrikeDamage = Math.floor(Math.random() * 10 * monster.attackModifier * defBonus)
            //         playerInfo.health -= monsterStrikeDamage
            //         console.log(`You attack for ${playerStrikeDamage} damage, ${monster.name} has ${monstEncounterHealth} hp left!`)
            //         console.log(`${monster.name} attacks for ${monsterStrikeDamage} damage, you have ${playerInfo.health} hp left!`)
            //     } else if (playerInfo.health <= 0) {
            //         console.log(`You died, loser!`)
            //         playAgain()
            //     }
            // }
        }
        if (wantsToPlay === true){
            if (playerInfo.health <= 0) {
                console.log(`You defeated your enemy, but at what cost? You yourself have died.`)
                playAgain()
            } else {
                let reward = monster.treasure[Math.floor(Math.random() * monster.treasure.length)]
                playerInfo.items.push(reward)
                let healing = Math.floor(Math.random() * 15)
                playerInfo.health += healing
                walkProgress++
                console.log(`You killed ${monster.name}!`)
                console.log(`You found a ${reward.itemName} on the corpse! It may provide a bonus to your attack or defense modifiers!`)
                console.log(`You also find a healing potion which heals you for ${healing} HP. Your HP is now ${playerInfo.health}`)
                promptAction()
            }
        } else {
            console.log(`Goodbye.`)
        }
    }
} else {
    console.log('test')
}
    
}

welcome()