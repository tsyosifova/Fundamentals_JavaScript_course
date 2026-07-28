function solve(arr) {
    let input = arr.shift();
    let totalPrice = 0;
    let income = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|\$%\.]*\<(?<product>\w+)\>[^|\$%\.]*\|(?<count>\d+)\|[^|\$%\.]*?(?<price>\d+(\.\d+)?)\$/;

    while (input !== `end of shift`) {
        let match = pattern.exec(input);

        if (match) {
            let customerName = match.groups.name;
            let productName = match.groups.product;
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);

            income += totalPrice;

            console.log(`${customerName}: ${productName} - ${totalPrice.toFixed(2)}`);
        }

        input = arr.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);

}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);