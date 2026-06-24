function convertToObject(jsonDate) {
    let ObjDate = JSON.parse(jsonDate);
    let entries = Object.entries(ObjDate);

    for (let entry of entries) {
        let [key, value] = entry;
        //console.log(entry);
        console.log(`${key}: ${value}`);
    }
    
    //console.log(ObjDate1);
    //console.log(ObjDate);
    //console.log(entries);
    //sconsole.log(ent)
    
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');