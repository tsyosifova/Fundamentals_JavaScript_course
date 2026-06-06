function checkSingnOfMultp(numOne, numTwo, numThree) {
    let countNegativeNum = 0;

    if (numOne < 0) countNegativeNum++;
    
    if (numTwo < 0) countNegativeNum++;
    
    if (numThree < 0) countNegativeNum++;

    if (countNegativeNum === 1 || countNegativeNum === 3) {
        return `Negative`;
    } else {
        return `Positive`;
    }

}

let result = checkSingnOfMultp(-6, -12, 14);
console.log(result);
