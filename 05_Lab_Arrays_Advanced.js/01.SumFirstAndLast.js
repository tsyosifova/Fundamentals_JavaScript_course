function sumFirstAndLast(arr) {

    arr = arr.map(Number);

    let firstEl = arr.shift();
    let lastEl = arr.pop();

    console.log(firstEl + lastEl);

}

//sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);