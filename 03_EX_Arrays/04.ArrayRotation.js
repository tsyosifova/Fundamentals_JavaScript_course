function arrayRotation(arr, countRot){

for (let i = 1; i <= countRot; i++) {
    let firstElement = arr.shift(); //взима първия елемент
    arr.push(firstElement); //добавя го в края

}

console.log(arr.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);