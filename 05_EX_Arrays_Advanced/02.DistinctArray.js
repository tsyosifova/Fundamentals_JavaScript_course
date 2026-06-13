function distinctArray(arr) {
    let uniquearr = [];

    for (let el of arr) {

        if (!uniquearr.includes(el)) {

            uniquearr.push(el);

        }
    }
    
    console.log(uniquearr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);