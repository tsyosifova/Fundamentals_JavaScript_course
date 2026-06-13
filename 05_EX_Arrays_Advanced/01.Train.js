function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let capacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command.includes('Add')) {
            command = command.split(' ');
            let passengers = Number(command[1]);

            wagons.push(passengers);

        } else {
            let passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {

                if (wagons[j] + passengers <= capacity) {

                    wagons[j] += passengers;

                    break;
                }

            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);