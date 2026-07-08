function solve(text, word) {
    let replasedTo = '*'.repeat(word.length);
    let result = text.replaceAll(word, replasedTo);
    
    console.log(result);
}

solve('A small sentence with some small words', 'small');