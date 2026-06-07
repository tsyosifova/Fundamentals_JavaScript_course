function findIsPalindrom(arr) {

    for (let num of arr) {

        let isPalindrom = numIsPalindrom(num);
        console.log(isPalindrom);

    }

    function numIsPalindrom(num) {
        let numAsStr = String(num);
        let revurseNumAsStr = numAsStr.split('').reverse().join('');

        return numAsStr === revurseNumAsStr;

    }

}

findIsPalindrom([123, 323, 421, 121]);
//findIsPalindrom([32, 2, 232, 1010]);