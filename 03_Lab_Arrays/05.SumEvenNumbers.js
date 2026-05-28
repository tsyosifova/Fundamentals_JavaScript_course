function sumEvenNumbers(arr) {
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let elements = arr[i];
        let elemAsNum = Number(elements);

        if(elemAsNum % 2 === 0) {
            evenSum += elemAsNum;
        }
    }

    console.log(evenSum);
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);