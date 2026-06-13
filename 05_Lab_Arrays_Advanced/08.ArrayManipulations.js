function arrayManipulations(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let commandPart of input) {

        commandPart = commandPart.split(' ');

        let command = commandPart.shift();

        commandPart = commandPart.map(Number);

        if (command === 'Add') {
            let number = commandPart[0];

            arr.push(number);

        } else if (command === 'Remove') {
            let number = commandPart[0];

            arr = arr.filter(el => el !== number);

        } else if (command === 'RemoveAt') {
            let index = commandPart[0];

            arr.splice(index, 1);

        } else if (command === 'Insert') {
            let number = commandPart[0];
            let index = commandPart[1];

            arr.splice(index, 0, number);

        }

        //console.log(command);
    }

    console.log(arr.join(' '));
    //console.log(input);

}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);