function solve(DataArr) {
    let countryTownObj = {};
    
    for (let travelStr of DataArr) {
        
        let [country, town, cost] = travelStr.split(' > ');
        cost = Number(cost);

        if (country in countryTownObj) {
            if (town in countryTownObj[country]) {
                if (cost < countryTownObj[country][town]) {
                    countryTownObj[country][town] = cost;
                }
            } else {
                countryTownObj[country][town] = cost;
            }
        } else {
            countryTownObj[country] = { [town]: cost };
        }


    }

    let sortedCounrys = Object.entries(countryTownObj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, townCostObj] of sortedCounrys) {
        let sortedTown = Object.entries(townCostObj).sort((a, b) => a[1] - b[1]);

        let result = [];

        for (let [town, cost] of sortedTown) {

            result.push(`${town} -> ${cost}`);
        }

        console.log(`${country} -> ${result.join(' ')}`);
    }

}



solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
