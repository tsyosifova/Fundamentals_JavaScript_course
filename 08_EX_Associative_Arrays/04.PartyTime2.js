function solve(arr) {
    let vipGuest = [];
    let regGuest = [];
 
    let index = arr.indexOf('PARTY');

    for (let i = 0; i < index; i++) {
        let guest = arr[i];
        let startDigit = Number(guest[0]);
        
        if (startDigit >= 0 && startDigit <= 9) {
            vipGuest.push(guest);
        } else {
            regGuest.push(guest);
        }
    }

    for (let i = index + 1; i < arr.length; i++) {
        let guest = arr[i];

        if(vipGuest.includes(guest)) {
            let j = vipGuest.indexOf(guest);

            vipGuest.splice(j,1);
        }

        if(regGuest.includes(guest)){
            let k = regGuest.indexOf(guest);

            regGuest.splice(k,1);
        } 
    }

    let countGuestNotInParty = vipGuest.length + regGuest.length;
    console.log(countGuestNotInParty);
    console.log(vipGuest.join('\n'));
    console.log(regGuest.join('\n'));
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

solve([
    '7IK9Yo0h',
    '7IK9Yo0h',
    'PARTY',
    '7IK9Yo0h'
]);