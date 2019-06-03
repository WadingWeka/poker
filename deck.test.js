const deck = require("./deck")

expect.extend({
    toBeIntWithinRange(received, floor, ceiling) {
      const pass = Number.isInteger(received) && received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
});



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

    test('Deck construction with 2 decks with jokers', () => {
        let testDeck = new deck.Deck({noDecks:3, shuffled:false});
        expect(testDeck).toMatchSnapshot();
        expect(testDeck.deck.length).toEqual(156);
    });

});


describe("Deck methods", () => {
    test('reset', () => {
        let testDeck = new deck.Deck();
        expect(testDeck.reset()).toMatchSnapshot();
    });

    test('shuffle', () => {
        let testDeck = new deck.Deck({shuffled:false});
        let deckState = [...testDeck.deck];
        testDeck.shuffle();
        expect(testDeck.deck).not.toEqual(deckState);
    });

    test('next', () => {
        let testDeck = new deck.Deck();
        let cardCount = testDeck.deck.length;
        expect(testDeck.next({formatted:false})).toBeIntWithinRange(-1,51);
        expect(testDeck.deck.length).toEqual(cardCount-1)
    });

    test('next with no cards', () => {
        let testDeck = new deck.Deck();
        while (testDeck.deck.length > 0){
            expect(testDeck.next({formatted:false})).toBeIntWithinRange(-1,51);
        }
        expect(() => testDeck.next({formatted:false})).toThrowError(deck.DeckEmptyError);
    });
});

describe("standard card set model", () => {
    test('ordred card set', () => {
        let card;
        let testDeck = new deck.Deck({shuffled:false});
        for (let i = 0; i < 4; i++){
            for (let j = 1; j <= 13; j++){
                card = testDeck.next();
                expect(card).toEqual([j,i]);
            }
        }
    });
});

describe("In Play", () => {
    test('Check next card ', () => {
        let testDeck = new deck.Deck();
        let card = testDeck.next({formatted:false});
        expect(testDeck.delt.length).toEqual(1);
        expect(testDeck.delt[testDeck.delt.length-1]).toEqual(card);
    });
});

describe("Discard pile", () => {
    test('next', () => {
        let testDeck = new deck.Deck();
        let card = testDeck.next({formatted:false});
        testDeck.moveToDiscard(card);
        expect(testDeck.discards.length).toEqual(1);
        expect(testDeck.discards[testDeck.discards.length-1]).toEqual(card);
    });
});

