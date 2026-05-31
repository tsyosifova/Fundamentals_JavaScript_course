function addAndSubtract(arr){
    let newArr = [];
    let elArrSum = 0;
    let elNewArrSum = 0;

    for (let i = 0; i < arr.length; i++){
        let curel = Number(arr[i]);
        let newEl = 0;
        if(curel % 2 === 0) {
            newEl = curel + i;
        } else {
            newEl = curel - i;
        }

        newArr.push(newEl);
        elArrSum += curel;
        elNewArrSum += newEl;

    }

    console.log(newArr);
    console.log(elArrSum);
    console.log(elNewArrSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
//addAndSubtract([-5, 11, 3, 0, 2]);