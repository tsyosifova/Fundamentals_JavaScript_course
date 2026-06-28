function storeProvision(currProductsArr, orderedProductsArr) {
    let allProductArr = [];
    let product = '';
    let quntity = 0;
    for (let i = 0; i < currProductsArr.length; i += 2) {
        product = currProductsArr[i];
        quntity = Number(currProductsArr[i + 1]);

        if (orderedProductsArr.includes(product)) {
            let indPr = orderedProductsArr.indexOf(product);
            quntityOrderd = Number(orderedProductsArr[indPr + 1]);
            quntity += quntityOrderd;
            orderedProductsArr.splice(indPr, 2);

            for (let j = 0; j < orderedProductsArr.length; j += 2) {
                productOrd 
            }

            //console.log(orderedProductsArr);
        }

        let productObg = {
            prod: product,
            qunt: quntity
        };

        console.log(`${productObg.prod} -> ${productObg.qunt}`);

        //console.log(currProductsArr[i]);
        //console.log(quntity);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);