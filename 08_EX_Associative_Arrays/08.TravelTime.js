function solve(DataArr) {
    let countryTowerObj = {};
    let townCostObj = {};
    for (let travelStr of DataArr) {
        //console.log(travelStr);
        let [country, town, cost] = travelStr.split(' > ');
        cost = Number(cost);

        if (town in townCostObj) {
            if (cost > townCostObj[town]) {
                townCostObj[town] = cost;
            }
        } else {
            townCostObj[town] = cost;
        }

        let entries = Object.entries(townCostObj).sort((a, b) => a[1] - b[1]);

       // console.log([country, town, cost]);
      //  console.log(townCostObj);  
            
    }

    
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])