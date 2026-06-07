function findIsPalindrom(arr) {

    for (let num of arr) {

        let result = numIsPalindrom(num);
        console.log(result);

    }

    function numIsPalindrom(num) {
        let numAsStr = String(num);
        let revurseNumAsStr = numAsStr.split('').reverse().join('');

        let isPalindrom = numAsStr === revurseNumAsStr;

        return isPalindrom;

    }

}

findIsPalindrom([123, 323, 421, 121]);
//findIsPalindrom([32, 2, 232, 1010]);