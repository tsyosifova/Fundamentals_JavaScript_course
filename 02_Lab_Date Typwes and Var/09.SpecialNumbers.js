function specialNumbers(n) {
    for (i = 1; i <= n; i++) {
        let number = i;
        let numberAsStr = String(number);

        let sum = 0;

        for (j = 0; j < numberAsStr.length; j++) {

            let digit = numberAsStr[j];
            let digitAsNum = Number(digit);

            sum += digitAsNum;

        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${number} -> True`);
        } else {
            console.log(`${number} -> False`);
        }

    }

}

specialNumbers(15);
//specialNumbers(20);