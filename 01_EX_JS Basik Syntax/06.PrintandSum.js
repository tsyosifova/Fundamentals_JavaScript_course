function printAndSum(startNum, endNum){
    let sum = 0;
    for(i=startNum; i<=endNum; i++){
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);