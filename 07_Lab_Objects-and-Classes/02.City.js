function solve (city) {

    let keys = Object.keys(city);

    for (let key of keys) {
        //console.log(key);
        let value = city[key];
        console.log(value);

        //console.log(`${key} -> ${value}`);

    }

}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});