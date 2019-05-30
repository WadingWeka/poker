const deck = require("./deck")




describe("check deck generation", () => {
    test('Deck construction', () => {
        let testDeck = new deck.Deck();
        expect(testDeck).toMatchSnapshot({"deck": expect.any(Array)});
        expect(testDeck.deck.length).toEqual(52);
    });

    test('Deck construction with jokers', () => {
        let testDeck = new deck.Deck({jokers:true})
        expect(testDeck).toMatchSnapshot({"deck": expect.any(Array)});
        expect(testDeck.deck.length).toEqual(54)
    });

    test('Deck construction with 2 decks', () => {
        let testDeck = new deck.Deck({noDecks:2});
        expect(testDeck).toMatchSnapshot({"deck": expect.any(Array)});
        expect(testDeck.deck.length).toEqual(104);
    });

    test('Deck construction with 2 decks with jokers', () => {
        let testDeck = new deck.Deck({jokers:true, noDecks:2});
        expect(testDeck).toMatchSnapshot({"deck": expect.any(Array)});
        expect(testDeck.deck.length).toEqual(108);
    });

});