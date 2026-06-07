function perfectNumber(num) {
    let numOfSumDiv = sumDivisors(num);

    if (num === numOfSumDiv) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function sumDivisors(num) {
        let sum = 0;

        for (let divisor = 1; divisor = num - 1; divisor++) {
            if (divisor % 2 === 0) {
                sum += divisor;
            }
        }
    }

}

perfectNumber(6);