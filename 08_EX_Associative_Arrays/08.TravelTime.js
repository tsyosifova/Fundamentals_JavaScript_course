function solve(DataArr) {
    let countryTownObj = {};
    for (let travelStr of DataArr) {
        //console.log(travelStr);
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

    console.log(countryTownObj);

   let sortedCounrys = Object.entries(countryTownObj).sort((a, b) => a[0].localeCompare(b[0]));

    console.log(sortedCounrys);
    // for (let [country, Тук как да деструктурирам на town, cost] of entries) {
       
       
    //     console.log(`${country} -> ${town} -> ${cost}`);
    //}
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])