function amazingNumbers(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        curDigitAsStr = numAsString[i];

        sum += Number(curDigitAsStr);
    }

    let sumAsString = String(sum);
    let isAmazing = sumAsString.includes('9');

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}

amazingNumbers(1233);
amazingNumbers(999);