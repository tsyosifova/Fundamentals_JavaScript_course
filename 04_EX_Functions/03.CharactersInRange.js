function charactersInRange(char1, char2) {
    nuwArr = [];
    let ascii1 = char1.charCodeAt();
    let ascii2 = char2.charCodeAt();

    let asciiMin = Math.min(ascii1, ascii2);
    let asciiMax = Math.max(ascii1, ascii2);

    for (let currAscii = asciiMin + 1; currAscii < asciiMax; currAscii++) {
        let currChar = String.fromCharCode(currAscii);
        nuwArr.push(currChar);
    }

    console.log(nuwArr.join(' '));

}

charactersInRange('a', 'd');