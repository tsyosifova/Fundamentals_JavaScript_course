function printAndSum(startNum, endNum){
    let sum = 0;
    let numbers = '';

    for(i=startNum; i<=endNum; i++){
        numbers += `${i} `;
        sum += i;
    }
    
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);