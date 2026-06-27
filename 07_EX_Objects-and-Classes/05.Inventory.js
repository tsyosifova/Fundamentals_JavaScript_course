function inventory(arr) {
    heroes = [];

    for (let heroesDate of arr) {
        [heroeName, heroeLevel, heroeItems] = heroesDate.split(' / ');

        heroeLevel = Number(heroeLevel);

        let heroeObj = {
            name: heroeName,
            level: heroeLevel,
            items: heroeItems
        };

        heroes.push(heroeObj);

        heroes.sort((a, b) => a.level - b.level);
    }

    for (let heroeObj of heroes) {

        console.log(`Hero: ${heroeObj.name}`);
        console.log(`level => ${heroeObj.level}`);
        console.log(`items => ${heroeObj.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])