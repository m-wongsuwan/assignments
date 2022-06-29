const readline = require("readline-sync");
let isAlive = true;
let walkProgress = 0;
let name = "Stranger"

const playerInfo = {
    health: 100,
    items: [],
    attackModifier: 1,
    defenseModifier: 1
}

const lowLevelTreasure = [
    {itemName: "Mace of Bludgeoning", bonusAttDef: [.3, 0]},
    {itemName: "Shield of Protection", bonusAttDef: [0, .4]},
]
const highLevelTreasure = [
    {itemName: "Ryan's Armor", bonusAttDef: [0, .6]},
]

const monsterList = [
    {name: "Goblin Runt", health: 30, attackModifier: .4, encounterMessage: "You wouldn't hurt someone so small and pathetic would you? HYAAA.", treasure: lowLevelTreasure},
    {name: "Bandit Leader", health: 40, attackModifier: .5, encounterMessage: "So no one told you about the toll to pass through here?", treasure: lowLevelTreasure},
    {name: "A Grizzly Bear", health: 40, attackModifier: .5, encounterMessage: "I'm actually a black bear, it's a common mistake.", treasure: lowLevelTreasure},
    {name: "Ryan", health: 200, attackModifier: .1, encounterMessage: "S'up.", treasure: highLevelTreasure},
]

const encounter = () => {
    let monster = monsterList[(Math.floor(Math.random()*4))]
    let monstEncounterHealth = monster.health
    let encounterChoice = readline.question(`You encounter ${monster.name}, will you "run" or "fight"? `)
    if (encounterChoice === "fight"){
        while (monstEncounterHealth > 0) {
            if ( playerInfo.health > 0 && monstEncounterHealth > 0) {
                let playerStrikeDamage = 10 * playerInfo.attackModifier
                monstEncounterHealth -= playerStrikeDamage
                let monsterStrikeDamage = 10 * monster.attackModifier / playerInfo.defenseModifier
                playerInfo.health -= monsterStrikeDamage
                console.log(`You attack for ${playerStrikeDamage} damage, ${monster.name} has ${monstEncounterHealth} hp left!`)
                console.log(`${monster.name} attacks for ${monsterStrikeDamage} damage, you have ${playerInfo.health} hp left!`)
            } else if (playerInfo.health <= 0) {
                console.log(`You died, loser!`)
            }
        }
        console.log(`You won!`)
    }
}

encounter()