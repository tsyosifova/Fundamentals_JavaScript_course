function bombNumbers(numburs, bombPower) {
    let bombNum = bombPower.shift();
    let powerNumCunt = bombPower.shift();

    while (numburs.includes(bombNum)) {
        let i = numburs.indexOf(bombNum);
        let startInd = Math.max((i - powerNumCunt), 0);
        let endInd = Math.min((i + powerNumCunt), numburs.length - 1);
        let delleetetNum = endInd - startInd + 1;

        numburs.splice(startInd, delleetetNum);

    }

    let sum = 0;

    for (let num of numburs) {
        sum += Number(num);
    }

    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);