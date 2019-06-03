class DeckEmptyError extends Error {}

class Deck {
    
    constructor ({jokers=false,noDecks=1,shuffled=true,cardSet=StandardCardSet} = {}){
        this.deck = [];
        this.delt = [];
        this.discard = [];
        this.jokers = jokers;
        this.noDecks = noDecks;
        this.cardSet = cardSet;
        if (shuffled){
            this.shuffle();
        }
        else{
            this.reset();
        }
    }

    reset(){
        let arr = [...Array(52).keys()];
        if (this.jokers) {arr = arr.concat([-1,-1]);}
        for (let i = 0; i < this.noDecks; i++){
            this.deck.push(...arr);
        }
    }

    shuffle(){
        let currentIndex = this.deck.length, temporaryValue, randomIndex;
        this.reset();

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.deck[currentIndex];
          this.deck[currentIndex] = this.deck[randomIndex];
          this.deck[randomIndex] = temporaryValue;
        }
    }

    next({formatted=true}={}){
        if (this.left()){
            let card = this.deck.shift();
            if (formatted) card = this.cardSet.getCard(card);
            this.delt.push(card);
            return card;
        }
        else{
            throw new DeckEmptyError;
        }
    }

    left(){
        return this.deck.length;
    }
}

class StandardCardSet{
    static getCard(card){
        if (card >= 0){
            let cardNum = card%13 + 1;
            let cardSuite = Math.floor(card/13);
            return [cardNum, cardSuite];
        }
        else {
            return [card, -1];
        }
    }
}

module.exports = {Deck, DeckEmptyError};