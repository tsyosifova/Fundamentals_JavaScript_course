function solve(text, searchedWord) {
    text = text.replaceAll(',', ' ');
    text = text.replaceAll('.', ' ');
    text = text.replaceAll('!', ' ');
    text = text.replaceAll('?', ' ');
    text = text.replaceAll(':', ' ');
    text = text.replaceAll(';', ' ');

    let textArr = text.split(' ');

    let count = 0;

    for (let word of textArr) {

        if (word === searchedWord) {
            count++;
        }

    }

    console.log(count);

}

solve('This is a word and it also is a sentence',
    'is');