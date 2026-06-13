function searchForANumber(arr1, arr2) {
    let [takenCount, deletedCount, searchedNun] = arr2;

    let newArr = arr1.slice(0, takenCount);

    newArr.splice(0, deletedCount);

    let searchedNunCount = newArr.filter(num => num === searchedNun).length;

    console.log(`Number ${searchedNun} occurs ${searchedNunCount} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);