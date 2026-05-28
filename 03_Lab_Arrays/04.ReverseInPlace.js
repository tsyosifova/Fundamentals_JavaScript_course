function reverseInPlace(arr) {
   for (let i = 0; i < arr.length/2; i++) {
    //firsEl = arr[arr.length - 1];
    //secundEl = arr[arr.length - 1-1];
    currentEl = arr[i];
    reversEl = arr[arr.length - 1 - i];
    
    arr[i] = reversEl;
    arr[arr.length - 1 - i] = currentEl;

    //console.log(arr.join(' '));

    }

    console.log(arr.join(' '));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);