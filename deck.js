
class Deck {
    
    constructor ({jokers=false,noDecks=1,shuffled=true} = {jokers:false,noDecks:1,shuffled:true}){
        this.deck = [];
        this.jokers = jokers;
        this.noDecks = noDecks;
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

    next(){
        if (this.left()){
            return this.deck.shift();
        }
        else{
            throw new Error("DeckEmptyError");
        }
    }

    left(){
        return this.deck.length;
    }
}

module.exports = {Deck};