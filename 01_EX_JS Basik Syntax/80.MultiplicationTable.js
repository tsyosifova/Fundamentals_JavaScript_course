function multiplicationTable (n) {
    //n X i = result i(1...10)
    for ( i = 1; i <= 10; i++) {
        let result = n * i;
        let print = `${n} X ${i} = ${result}`;
        console.log(print);
    }

}

multiplicationTable (2);