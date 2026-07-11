function solve(arr) {
    let [str1, str2, str3] = arr;
    let newString = str1 + str2;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let str3Ind = 0;

    for (let letter of newString) {

        if (vowels.includes(letter)) {

            let newletter = str3[str3Ind].toUpperCase();

            newString = newString.replace(letter, newletter);

            str3Ind++;

            if (str3Ind >= str3.length) {
                str3Ind = 0;
            }

        }

    }

    console.log(`Your generated password is ${newString.split('').reverse().join('')}`);

}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);