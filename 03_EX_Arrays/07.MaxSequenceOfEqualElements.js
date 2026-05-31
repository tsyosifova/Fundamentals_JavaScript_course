function maxSequenceOfEqualElements(arr) {
    result = [];
    let bestCount = 1;
    let bestEqualEl = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        let countEgualEl = 1;

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (currEl !== nextEl) {
                break;
            }

            countEgualEl++;
        }

        if (countEgualEl > bestCount) {
            bestCount = countEgualEl;
            bestEqualEl = currEl;
        }
    }

    for (let k = 0; k < bestCount; k++) {
        result.push(bestEqualEl);
    }

    console.log(result.join(' '));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

