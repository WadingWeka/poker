const pokerapp = require("./pokerCLI");

describe("Check print hand output", () => {
    test('ordred card set', () => {
        let hand = [[1,1],[12,0],[10,3]];
        expect(pokerapp.getHandAsStr(hand)).toMatchSnapshot();
    });

    // test('ordred card set', () => {
    //     let hand = [[1,1],[12,0],[10,3]];
    //     expect(pokerapp.getHandAsStr(hand)).toMatchSnapshot();
    // });
});