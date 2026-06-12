function processOddNumbers(arr) {
    let result = arr
        .filter((el, i) => i % 2 === 1)
        .map(el => el * 2)
        .reverse();


    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);