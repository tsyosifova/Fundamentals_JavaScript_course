function rightPlace(word, char, checkWord) {
    let result = word.replace('_', char);

    if (result === checkWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');