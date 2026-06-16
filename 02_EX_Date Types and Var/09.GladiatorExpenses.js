function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrakesCount = 0;

    for(let currfights = 1; currfights <= lostFights; currfights++) {
        if (currfights % 2 === 0) {
            expenses += helmetPrice;
        }
        if (currfights % 3 === 0) {
            expenses += swordPrice;
        }
        if (currfights % 2 === 0 && currfights % 3 === 0) {
            expenses += shieldPrice;
            shieldBrakesCount++            
        }

        if (shieldBrakesCount % 2 === 0 && shieldBrakesCount !== 0) {
            expenses += armorPrice;
            shieldBrakesCount = 0;
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
);