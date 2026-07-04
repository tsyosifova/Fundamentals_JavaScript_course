function solve(arr) {
    let targetWords = arr.shift().split(' ');

    let wordOccurrences = {};

    for (let targetWord of targetWords) {

        wordOccurrences[targetWord] = 0;

    }

    for (let word of arr) {

        if (word in wordOccurrences) {
            wordOccurrences[word]++;
        }

    }

    let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, occurrences] of entries) {

        console.log(`${word} - ${occurrences}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);