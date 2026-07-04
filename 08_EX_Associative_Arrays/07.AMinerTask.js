function solve(arr) {
    let resourceQunts = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qunt = Number(arr[i + 1]);

        if (resource in resourceQunts) {
            resourceQunts[resource] += qunt;

        } else {
            resourceQunts[resource] = qunt;
        }
    }

    for (let [resource, qunt] of Object.entries(resourceQunts)) {
        
        console.log(`${resource} -> ${qunt}`);
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);