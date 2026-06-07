function loadingBar(num) {
    let printBar = createArrBar(num);

    if (num > 0 && num < 100) {
        console.log(`${num}% [${printBar}]`);
        console.log(`Still loading...`)
    } else if (num === 100) {
        console.log(`${num}% Complete!`);
    }


    function createArrBar(num) {
        let arrBar = [];

        for (let i = 0; i < num / 10; i++) {
            arrBar.push(`%`)
        }

        for (let i = 0; i < 10 - (num / 10); i++) {
            arrBar.push(`.`);
        }

        return arrBar.join('');
    }

}

loadingBar(30);
//30% [%%%.......]
//Still loading...
