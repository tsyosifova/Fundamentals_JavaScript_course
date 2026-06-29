function storeProvision(currProductsArr, orderedProductsArr) {
    let productObj = {};
    let product = '';
    let quntity = 0;

    for (let i = 0; i < currProductsArr.length; i += 2) {

        product = currProductsArr[i];
        quntity = Number(currProductsArr[i + 1]);

        productObj[product] = quntity;

    }

    for (let i = 0; i < orderedProductsArr.length; i += 2) {

        product = orderedProductsArr[i];
        quntity = Number(orderedProductsArr[i + 1]);

        if (productObj[product] === undefined) {
            productObj[product] = quntity;
        } else {
            productObj[product] += quntity;
        }

    }

    let entries = Object.entries(productObj);//Масив от свойствата като масиви 

    for (let entry of entries) {
        let [key, value] = entry;//деструктурирам масива на всяко свойство на ключ и стойност
        //console.log(entry);
        console.log(`${key} -> ${value}`);//печатам чрез параметрите в искания формат
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);