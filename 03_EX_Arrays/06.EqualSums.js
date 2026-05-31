function equalSums(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            let leftNum = arr[j];
            leftSum += leftNum;
        }

        for (let k = i + 1; k < arr.length; k++) {
            let rightNum = arr[k];
            rightSum += rightNum;
        }

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }

    console.log('no');

}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


