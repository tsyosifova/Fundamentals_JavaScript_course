function solve(strArr) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = strArr[0].matchAll(pattern);

    let result = [];

    for (let match of matches) {

        result.push(match[0]);
    }

    console.log(result.join(', '));
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
