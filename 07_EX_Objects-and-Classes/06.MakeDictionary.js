function makeDictionary(arr) {
    let dictionary = {};
    let dictionaryObj = {};
    let term = '';
    let definition = '';

    for (let dictionaryObjJSON of arr) {
        dictionaryObj = JSON.parse(dictionaryObjJSON);

        let entries = Object.entries(dictionaryObj);

        for (let entry of entries) {
            [term, definition] = entry;
        }

        dictionary[term] = definition;
    }

    

    console.log(dictionary);

}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);