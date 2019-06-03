
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = " " + s;}
    return s;
}

String.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = " " + s;}
    return s;
}

const clubs = ["♣", "clubs"];
const diamonds = ["♦", "diamonds"];
const hearts = ["♥", "hearts"];
const spades = ["♠", "spades"];

const suites = {0:clubs,1:diamonds,2:hearts,3:spades};

const cardTop = "┌──────────────┐";
const cardCenter = "│              │";
const cardBottom = "└──────────────┘";

const cardIdenTop = (x,y) => `│${x.pad(2)}${y[0]}           │`;
const cardIdenBottom = (x,y) => `│           ${x.pad(2)}${y[0]}│`;

const centerPatterns = [

];

const cardNameLookup = {1: "A", 11:"J", 12:"Q", 13:"K"}
const cardName = (x) => {
    return ((cardNameLookup[x]) ? cardNameLookup[x] : String(x));
}

// int - card, int - suite
function assembleCard(n, s){
    n = cardName(n)
    let suite = suites[s] 
    let printRows = [];
    printRows.push(cardTop);
    printRows.push(cardIdenTop(n, suite));
    for (let i = 0; i < 7; i++){
        printRows.push(cardCenter);
    }
    printRows.push(cardIdenBottom(n, suite));
    printRows.push(cardBottom);
    return printRows;
}

module.exports = {assembleCard, suites};



