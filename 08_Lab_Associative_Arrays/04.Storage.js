function solve(arr) {
    let storageMap = new Map();

    for(let elString of arr) {
        let [item, quantity] = elString.split(' ');
        quantity = Number(quantity);

        if (!storageMap.has(item)) {
            storageMap.set(item, quantity);

        } else {
            let currQuantity = storageMap.get(item);
            let newQuantity = currQuantity + quantity;

            storageMap.set(item, newQuantity);
        }
    }

    for (let [item, quantity] of storageMap.entries()) {
        console.log(`${item} -> ${quantity}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);