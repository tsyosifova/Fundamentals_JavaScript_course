function addAndSubtract(num1, num2, num3) {
    let sum = (x, y) => x + y;
    let substract = (x, y) => x - y;

    let tempResult = sum(num1, num2);
    let finalResult = substract(tempResult, num3);

    console.log(finalResult);

}

addAndSubtract(23, 6, 10);