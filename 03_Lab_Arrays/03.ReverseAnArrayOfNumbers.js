function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];

    for(let i = 0; i < num; i++) {

        elementsArr = arr[i];
        newArr[i] = elementsArr;
        
    }

        
    let reversArr = newArr.reverse();
    console.log(reversArr.join(' '));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40]);