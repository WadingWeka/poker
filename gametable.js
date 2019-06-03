const card = require("./cards");
const deck = require("./deck");

class GameTable{
    constructor({handSize = 5, noPlayers = 2} = {}){
        this.playDeck = new deck.Deck();
        this.noPlayers = noPlayers;
        this.handSize = handSize;
        this.playerHands = [];
    }

    dealHands() {
        this.playerHands = [];
        for (let i = 0; i < this.noPlayers; i++){
            this.playerHands[i] = [];
            for (let j = 0; j < this.handSize; j++){
                this.playerHands[i].push(this.playDeck.next());
            }
        }
    }


}



module.exports = {GameTable};