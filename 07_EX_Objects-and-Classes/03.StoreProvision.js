function storeProvision(currProductsArr, orderedProductsArr) {
    let productObg = {};

    for (let i = 0; i < currProductsArr.length; i += 2) {
        product = currProductsArr[i];
        quntity = Number(currProductsArr[i + 1]);

        if (orderedProductsArr.includes(product)) {
            let indPr = orderedProductsArr.indexOf(product);
            quntityOrderd = Number(orderedProductsArr[indPr + 1]);
            quntity += quntityOrderd;
            orderedProductsArr.splice(indPr, 2);

            for (let j = 0; j < orderedProductsArr.length; j += 2) {
                let productOrd = orderedProductsArr[j];
            }
        }

        productObg = {
            prod: product,
            qunt: quntity
        };

        console.log(`${productObg.prod} -> ${productObg.qunt}`);

    }

    for (let i = 0; i < orderedProductsArr.length; i += 2) {
        let product = orderedProductsArr[i];
        let quntity = orderedProductsArr[i + 1];

        productObg = {
            prod: product,
            qunt: quntity
        };

        console.log(`${productObg.prod} -> ${productObg.qunt}`);
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