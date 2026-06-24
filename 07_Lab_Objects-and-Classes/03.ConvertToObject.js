function convertToObject(jsonDate) {
    let ObjDate = JSON.parse(jsonDate);//from JASON to JS object
    let entries = Object.entries(ObjDate);//Масив от свойствата като масиви 

    //обхождам масива със свойствата (масив от ключ и стойност)
    for (let entry of entries) {
        let [key, value] = entry;//деструктурирам масива на всяко свойство на ключ и стойност
        //console.log(entry);
        console.log(`${key}: ${value}`);//печатам чрез параметрите в искания формат
    }
        
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');