function solve(arr) {
    let nameCardsObg = {};
    let powerCard = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let typeCard = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

    for (let nameCardsStr of arr) {
        let nameCardsArr = nameCardsStr.split(': ');
        let name = nameCardsArr.shift();
        let cardsArr = nameCardsArr.shift().split(', ');

        if (!nameCardsObg[name]) {
            nameCardsObg[name] = new Set(cardsArr);
        } else {
            for (let card of cardsArr) {
                nameCardsObg[name].add(card);
            }
        }
    }

    let entries = Object.entries(nameCardsObg);

    for (let [name, cards] of entries) {

        let cardsArr = Array.from(cards);
        let totallValue = 0

        for (let card of cardsArr) {
            let cardValue = 0;

            if (card.length === 2) {

                let power = card[0];
                let type = card[1];

                cardValue = powerCard[power] * typeCard[type];

            } else if (card.length === 3) {

                let type = card[2];

                cardValue = 10 * typeCard[type];
            }

            totallValue += cardValue;
        }
        console.log(`${name}: ${totallValue}`);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);