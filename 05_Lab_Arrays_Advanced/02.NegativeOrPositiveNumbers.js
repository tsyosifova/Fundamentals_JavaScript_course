function negativeOrPositiveNumbers(arr) {

    arr = arr.map(Number);

    let result = [];

    for(let number of arr) {

        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }

    }

    //console.log(result.join('\n'));

    // for(let i = 0; i < result.length; i++) {
    //     console.log(result[i]);
    // }

    for(let number of result) {

        console.log(number);
    }
    
}

//negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])