function sumDigits(num) {
    let numStr = String(num);
    let sum = 0;

    for (let charr of numStr) {
        let digit = Number(charr);

        sum += digit;
    }

    console.log(sum);
}

sumDigits(245678);