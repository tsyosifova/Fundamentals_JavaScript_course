function guineaPig(arr) {
    let foodQtyGr = Number(arr[0]) * 1000;
    let hayQtyGr = Number(arr[1]) * 1000;
    let coverQtyGr = Number(arr[2]) * 1000;
    let weightGg = Number(arr[3]) * 1000;

    for (let day = 1; day <= 30; day++) {

        foodQtyGr -= 300;

        if (day % 2 === 0) {
            hayQtyGr -= 0.05 * foodQtyGr;
        }

        if (day % 3 === 0) {
            coverQtyGr -= (1 / 3) * weightGg;
        }

        if (foodQtyGr <= 0 || hayQtyGr <= 0 || coverQtyGr <= 0) {

            console.log("Merry must go to the pet store!");
            return;
        }

    }

    let excessFood = foodQtyGr / 1000;
    let excessHay = hayQtyGr / 1000;
    let excessCover = coverQtyGr / 1000;

    console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`);

}

guineaPig(["10",
    "5",
    "5.2",
    "1"]);

guineaPig(["1",
    "1.5",
    "3",
    "1.5"]);

guineaPig(["9",
    "5",
    "5.2",
    "1"])