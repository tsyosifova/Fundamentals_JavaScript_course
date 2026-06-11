function lastKNumbersSequence(n, k) {

    let result = [1];

    for(let i = 1; i < n; i++) {
            let startEl = Math.max(0,i - k);

            let prevThreeEl = result.slice(startEl, i);

            let sum = 0;

            for (let number of prevThreeEl) {
                sum += number; 
            }

            result.push(sum);

    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);