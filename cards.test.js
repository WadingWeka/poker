const card = require("./cards")

describe("check card generation", () => {
    test('2 of clubs', () => {
        expect(card.assembleCard(2,0)).toMatchSnapshot();
    });

    test('10 of hearts', () => {
        expect(card.assembleCard(10,2)).toMatchSnapshot();
    });

    test('King of spades', () => {
        expect(card.assembleCard(13,3)).toMatchSnapshot();
    });
    test('Ace of diamonds', () => {
        expect(card.assembleCard(1,1)).toMatchSnapshot();
    });
});

