function firstAndLastKNumbers(input) {
    let k = input.shift();
    
    let furstKEl = input.slice(0,k);
    let lastKEl = input.slice(input.length - k);
    
    
    // console.log(k);
    //console.log(input);
    console.log(furstKEl.join(' '));
    console.log(lastKEl.join(' '));
}

firstAndLastKNumbers([2,
    7, 8, 9]);
firstAndLastKNumbers([3,
     6, 7, 8, 9])
