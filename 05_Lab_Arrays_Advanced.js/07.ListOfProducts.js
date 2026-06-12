function listOfProducts(arrProducts) {

    let result = arrProducts
        .sort()
        .map((pr, i) => `${i + 1}.${pr}`);

    console.log(result.join('\n'));

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
//listOfProducts(['Watermelon', 'Banana', 'Apples']);