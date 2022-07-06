class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar
    }

    setName(namePicked) {
        this.name = namePicked
    }

    gotHit() {
        if(this.hasStar === true) {
            console.log('Your star protected you!')
            this.hasStar = false
        } else {
            if (this.status === "Powered Up") {
                this.status = "Big"
            } else if (this.status === "Big") {
                this.status = "Small"
            } else {
                this.status = "Dead"
            }
        }
        
    }

    gotPowerUp() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print(){
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        if (this.hasStar === true) {
            console.log(`You have a star!`)
        }
        console.log(" ")
    }
}

const mario = new Player("Mario", 0, "Big", false)

const playGame = () => {
    let diceRoll = Math.floor(Math.random() * 3)
    if (diceRoll === 0) {
        mario.gotHit()
    } else if (diceRoll === 1) {
        mario.gotPowerUp()
    } else if (diceRoll === 2) {
        mario.addCoin()
    }
    mario.print()
    stopPlaying()
}

const stopPlaying = () => {
    if (mario.status === "Dead") {
        clearInterval(intervalID)
    }
}

const intervalID = setInterval(playGame, 1000)
