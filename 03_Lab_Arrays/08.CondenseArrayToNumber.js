function condenseArrayToNumber(numsArr) {

    while (numsArr.length > 1) {
        let condensArr = [];

        for (let i = 0; i < numsArr.length - 1; i++) {
            let elArrFirst = numsArr[i];
            let elArrSecond = numsArr[i + 1];
            let condensEl = elArrFirst + elArrSecond;
            condensArr.push(condensEl);
        }

        numsArr = condensArr;

    }

    console.log(numsArr[0]);

}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
