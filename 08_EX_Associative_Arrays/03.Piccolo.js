function solve(arr) {
    let set = new Set();

    for (let carInfo of arr) {
        let [direction, carNumber] = carInfo.split(', ');

        if (direction === 'IN') {
            set.add(carNumber);
        } else {
            set.delete(carNumber);
        }
     }

     if (set.size != 0) {
     
     let setArr = Array.from(set).sort((a, b) => a.localeCompare(b));
     console.log(setArr.join('\n'));
     
     } else {
        console.log(`Parking Lot is Empty`);
     }

}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);