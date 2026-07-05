function solve(string) {
    let keyMatQty = { shards: 0, fragments: 0, motes: 0 };
    let junkMatQty = {};
    let matLegendItem = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    let infoArr = string.split(' ');

    for (let i = 0; i < infoArr.length; i += 2) {
        let qty = Number(infoArr[i]);
        let mat = infoArr[i + 1].toLowerCase();

        if (mat in keyMatQty) {
            keyMatQty[mat] += qty;

            if (keyMatQty[mat] >= 250) {
                console.log(`${matLegendItem[mat]} obtained!`);
                keyMatQty[mat] -= 250;
                break;
            }
        } else {
            if (mat in junkMatQty) {

                junkMatQty[mat] += qty;
            } else {

                junkMatQty[mat] = qty;
            }
        }
    }

    let keyEntries = Object.entries(keyMatQty).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let junkEntries = Object.entries(junkMatQty).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [mat, qty] of keyEntries) {
        console.log(`${mat}: ${qty}`);
    }

    for (let [mat, qty] of junkEntries) {
        console.log(`${mat}: ${qty}`);
    }
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// Valanyr obtained!
// fragments: 5
// shards: 5
// motes: 3
// leathers: 6
// stones: 5
