function solve(text) {
    let textArr = text.split(' ');

    let filtred = textArr.filter(word => word.startsWith('#') && word.length > 1);

    for (let specWord of filtred) {
        let newWord = specWord.substring(1);

        let patern = /^[A-Za-z]+$/;

        if (patern.test(newWord)) {

        console.log(newWord);

        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');