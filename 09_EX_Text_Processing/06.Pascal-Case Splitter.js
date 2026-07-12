function solve(str) {
    let wordArr = [];
    let startInd = 0;

    for (let i = 1; i < str.length; i++) {
        let word = '';

        if (str[i] === str[i].toUpperCase()) {

            word = str.substring(startInd, i);

            startInd = i;

            wordArr.push(word);
        }

        if (i === str.length - 1) {

            word = str.substring(startInd);

            wordArr.push(word);
        }
    }

    console.log(wordArr.join(', '));

}

solve('HoldTheDoor');
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');