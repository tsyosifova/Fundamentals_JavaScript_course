function solve(arr) {
    let vipSet = new Set();
    let regSet = new Set();
 
    let index = 0;

    if (arr.includes('PARTY')) {
        index = arr.indexOf('PARTY');
    } else {
        index = arr.length;
    }

    for (let i = 0; i < index; i++) {
        let guest = arr[i];
        let startDigit = Number(guest[0]);
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (startDigit >= 0 && startDigit <= 9) {
            vipSet.add(guest);
        } else {
            regSet.add(guest);
        }
    }

    for (let i = index + 1; i < arr.length; i++) {
        let guest = arr[i];

        vipSet.delete(guest);
        regSet.delete(guest);
    }

    let countGuestNotInParty = vipSet.size + regSet.size;
    console.log(countGuestNotInParty);

    for (let key of vipSet) {
        console.log(key);
    }

    for (let key of regSet) {
        console.log(key);
    }
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);