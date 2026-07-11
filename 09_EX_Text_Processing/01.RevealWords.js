function solve(wordsStr, text) {
    let wordsArr = wordsStr.split(", ");

    for (let word of wordsArr) {
        let starTempl = '*'.repeat(word.length);

        text = text.replace(starTempl, word);
    }

    console.log(text);

}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages');