function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    let result = 0;

    for(elements of arr) {
        if (elements % 2 === 0) {
            evenSum += elements;
        } else {
            oddSum += elements;
        }
    }

    result = evenSum - oddSum;
    console.log(result);

}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);