const gametable = require("./gametable");


describe("draw a hand of 5 cards from new deck for 2 players", () => {
    let testTable;
    beforeAll(() => {
        testTable = new gametable.GameTable()
    });
      
    test('corect number of hands for players', () => {
        testTable.dealHands()
        expect(testTable.playerHands.length).toBe(2);
    });

    test('players have correct number of cards', () => {
        testTable.playerHands.forEach((hand) => {
            expect(hand.length).toBe(5);
        });
    });

    // test('King of spades', () => {
    //     expect(card.assembleCard(13,3)).toMatchSnapshot();
    // });
    // test('Ace of diamonds', () => {
    //     expect(card.assembleCard(1,1)).toMatchSnapshot();
    // });
});

