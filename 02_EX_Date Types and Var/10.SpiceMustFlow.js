function spiceMustFlow(yield) {
    let daysWork = 0;
    let totalYield = 0;

    while (yield >= 100) {

        let currYield = yield - 26;
        totalYield += currYield;
        
        daysWork++;

        yield -= 10;

    }

    if (totalYield >= 26) {
        totalYield -= 26;
    } else {
        totalYield;
    }

    console.log(daysWork);
    console.log(totalYield);
}

spiceMustFlow(111);
spiceMustFlow(450);