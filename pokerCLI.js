const gametable = require("./gametable");
const card = require("./cards");


function getHandAsStr(hand){
    let cards = hand.map((x) => card.assembleCard(...x));
    let zipedCards = cards[0].map((_,c)=>cards.map(row=>row[c]))
    let handStr = zipedCards.map((x) => x.join(' '));
    return handStr;
}

function printHand(hand){
    let handStrings = getHandAsStr(hand);
    handStrings.forEach(handString => {
        console.log(handString);
    });
}

module.exports = {getHandAsStr};