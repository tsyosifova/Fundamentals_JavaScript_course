function reversedString(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];

        reversedString += char;
    }

    console.log(reversedString);

    // let newRevers = str.split('').reverse().join('');

    // console.log(newRevers);
}

reversedString('Information');