function sorting(arr) {
    arr.sort((a, b) => b - a);

    let result = [];

    while (arr.length > 0) {
        let maxNum = arr.shift();
        let minNum = arr.pop();

        result.push(maxNum);
        result.push(minNum);

    }

    console.log(result.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);