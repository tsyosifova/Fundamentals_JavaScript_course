function loadingBar(num) {
    let arrBar = [];

    //firstEl = `%`;
    //countFirstEl = num / 10;

    for (let i = 0; i < num /10; i++) {
        arrBar.push(`%`)
    }

    //console.log(arrBar);

    for (let i = 0; i < 10 - (num / 10); i++) {
        arrBar.push(`.`);
    }

    console.log(arrBar.join(''));

}

loadingBar(30);
//30% [%%%.......]
//Still loading...
