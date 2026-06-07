function perfectNumber(num) {
    let numOfSumDiv = sumDivisors(num);

    if (num === numOfSumDiv) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function sumDivisors(num) {
        let sum = 0;

        for (let divisor = 1; divisor <= num - 1; divisor++) {
            if (num % divisor === 0) {
                sum += divisor;
            }
        }
        return sum;
    }
}

perfectNumber(6);