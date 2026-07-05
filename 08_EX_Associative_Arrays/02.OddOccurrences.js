function solve(input) {
    let inputArr = input.split(' ');
    let map = new Map();

    for (let element of inputArr) {
        let elLowerCase = element.toLowerCase();
        if (!map.has(elLowerCase)) {
            map.set(elLowerCase, 1);
        } else {
            let countOccurrences = map.get(elLowerCase);
            let newCountOccurr = countOccurrences + 1;
            map.set(elLowerCase, newCountOccurr);
        }
    }

    let mapArr = Array.from(map.entries());

    let printArr = [];

    for (let [key, value] of mapArr) {
        if (value % 2 !== 0) {
            printArr.push(key);
        }
    }

    console.log(printArr.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');