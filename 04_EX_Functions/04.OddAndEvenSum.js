function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let numAsString = String(num);

    for (let digit of numAsString) {
        let numDigit = Number(digit);

        if (numDigit % 2 === 0) evenSum += numDigit;
        else oddSum += numDigit;

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);