
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = " " + s;}
    return s;
  }

const spades = ["♠", "spades"];
const hearts = ["♥", "hearts"];
const diamonds = ["♦", "diamonds"];
const clubs = ["♣", "clubs"];

const cardTop = "┌──────────────┐";
const cardBottom = "└──────────────┘";

const cardIdenTop = () => `│${x.pad(2)}${y}           │`;
const cardIdenBottom = () => `│            ${x.pad(2)}${y}│`;

const centerPatterns = [

]


function assembleCard(n, suite){
    let printRows = [];
    printRows.push(cardTop);
    printRows.push(cardIdenTop(n, suite));
    for (let i = 0; i < 7; i++){
        printRows.push(cardCenter);
    }
    printRows.push(cardIdenBottom(n, suite));
    printRows.push(cardBottom);
}



