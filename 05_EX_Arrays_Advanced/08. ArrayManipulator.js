function arrayManipulator(numArr, commandsArr) {
    for (let command of commandsArr) {

        command = command.split(' ');

        let action = command.shift();

        command = command.map(Number);

        //console.log(action);
        //console.log(command);

        if (action === 'add') {
            let ind = command.shift();
            let el = command.shift();

            numArr.splice(ind, 0, el);

            //console.log(numArr);

        } else if (action === 'addMany') {
            let ind = command.shift();
            let els = command;

            numArr.splice(ind, 0, ...els);

            //console.log(numArr);

        } else if (action === 'contains') {
            let el = command.shift();

            console.log(numArr.indexOf(el));

        } else if (action === 'remove') {
            let ind = command.shift();

            numArr.splice(ind, 1);

            //console.log(numArr);

        } else if (action === 'shift') {
            let ind = command.shift();

            for (let i = 0; i < ind; i++) {
                let el = numArr.shift();
                numArr.push(el);
            }

        } else if (action === 'sumPairs') {
            let sumPairsArr = [];

            for (let i = 0; i < numArr.length; i += 2) {
                let curEl = numArr[i];
                let secondEl = numArr[i + 1];

                if (secondEl !== undefined) {

                    sumPairsArr.push(curEl + secondEl);

                } else {

                    sumPairsArr.push(curEl);

                }
            }

            numArr = sumPairsArr;

        } else if (action === 'print') {

            console.log(`[ ${numArr.join(', ')} ]`);
        }

    }

}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);