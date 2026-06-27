function printTowns(arr) {

    for (let townDate of arr) {

        [townName, latitude, longitude] = townDate.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let townobj = {
            town: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }

        console.log(townobj);
    }

}

printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);