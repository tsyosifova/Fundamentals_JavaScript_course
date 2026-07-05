function solve(arr) {
    let nameCardsObg = {};

    for (let nameCardsStr of arr) {
        let nameCardsArr = nameCardsStr.split(': ');
        //console.log(nameCardsArr);
        let name = nameCardsArr.shift();
        //console.log(nameCardsArr);
        let cardsArr = nameCardsArr.shift().split(', ');
        //console.log(cardsArr);

        if (!nameCardsObg[name]) {
            nameCardsObg[name] = new Set(cardsArr);
        } else {
            for (let card of cardsArr) {
                nameCardsObg[name].add(card);
            }
        }

//         for (let [name, cards] of Object.entries(nameCardsObg)) {

// }
        //console.log(nameCardsArr);
        console.log(name);
        console.log(cardsArr);
        console.log(nameCardsObg);
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