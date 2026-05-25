function sumOfOddNumbers(totalNum){
    let printetNum = 1;
    let curentNum = 1;
    let sum = 0
    
    while (printetNum <= totalNum){
       
        if (curentNum % 2 != 0) {
            console.log(curentNum);
            printetNum++;
            sum += curentNum;
        }

       curentNum++;
       
    }

        console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);