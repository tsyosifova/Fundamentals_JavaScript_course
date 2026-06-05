function repeatString(string, countRepeat) {
    let newString = [string];

    for (let i = 1; i < countRepeat; i++) {
        newString.push(string);
    }

    console.log(newString.join(''));
}

repeatString("abc", 3);
//repeatString("String", 2);