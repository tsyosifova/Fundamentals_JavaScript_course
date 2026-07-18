function solve(strArr) {
    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<ptice>\d+(\.\d+)?)!(?<qty>\d+)/;

    let command = strArr.shift();
    let furniture = [];
    let totalPrice = 0;

    while (command !== 'Purchase') {
        let furnitureMatch = command.match(pattern);

        if (furnitureMatch) {
            let name = furnitureMatch.groups.name;
            let ptice = Number(furnitureMatch.groups.ptice);
            let qty = Number(furnitureMatch.groups.qty);

            furniture.push(name);
            totalPrice += ptice * qty;
        }

        command = strArr.shift();
    }

    console.log(`Bought furniture:`);

    if (furniture.length > 0) {
    console.log(furniture.join('\n'));
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

solve(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);