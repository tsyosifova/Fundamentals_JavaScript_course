function solve(arr) {
    let countMsg = Number(arr.shift());
    let starsPattern = /[star]/gi;
    let decryptPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let curMsg = 1; curMsg <= countMsg; curMsg++) {
        let curMessages = arr.shift();
        let machLettrs = curMessages.match(starsPattern);

        let lettersCount = (machLettrs || []).length;

        let decryptmessages = '';

        for (let symbol of curMessages) {
            let ascii = symbol.charCodeAt();
            let newAscii = ascii - lettersCount;
            let newSymbol = String.fromCharCode(newAscii);
            decryptmessages += newSymbol;
        }

        let decryptMach = decryptmessages.match(decryptPattern);

        if (decryptMach) {
            let name = decryptMach.groups.name;
            let type = decryptMach.groups.type;

            if (type === 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    let countAPlanets = attackedPlanets.length;
    let countDPlanets = destroyedPlanets.length;
    attackedPlanets.sort((a,b) => a.localeCompare(b));
    destroyedPlanets.sort((a,b) => a.localeCompare(b));

    console.log(`Attacked planets: ${countAPlanets}`);
    if (countAPlanets > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
    
    console.log(`Destroyed planets: ${countDPlanets}`);
    if (countDPlanets > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
}

solve(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);

solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);
