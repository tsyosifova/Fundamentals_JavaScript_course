function condenseArrayToNumber(numsArr){
    condensArr = [];

    while (condensArr.length = numsArr.length-1) {

        for (let i = 0; i < numsArr.lenght -1; i++) {
            elArrFirst = numsArr[i];
            elArrSecond = numsArr[i+1];
            condensEl = elArrFirst + elArrSecond;
            condensArr = push(condensEl);
        }
    }
    
    console.log(condensArr);

}

condenseArrayToNumber([2,10,3]);
//condenseArrayToNumber([5,0,4,1,2]);
//condenseArrayToNumber([1]);
