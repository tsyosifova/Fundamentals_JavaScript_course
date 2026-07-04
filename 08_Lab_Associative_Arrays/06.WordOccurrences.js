function solve(arr) {
    let map = new Map;

    for (let word of arr) {

        if (!map.has(word)){

            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    let sorted = Array.from(map.entries())
                .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {

        console.log(`${word} -> ${count} times`);
    }
 }

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);