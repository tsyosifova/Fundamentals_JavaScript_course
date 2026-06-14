function houseParty(guestsArr) {
    let result = [];

    for (let guest of guestsArr) {
        let guestArr = [];
        guestArr = guest.split(' ');

        let name = guestArr.shift();

        if (!guestArr.includes('not')) {

            if (!result.includes(name)) {

                result.push(name);

            } else {

                console.log(`${name} is already in the list!`);

            }

        } else {

            if (result.includes(name)) {
                let ind = result.indexOf(name);

                result.splice(ind, 1);

            } else {

                console.log(`${name} is not in the list!`);
            }

        }

    }
    console.log(result.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])