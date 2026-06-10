function triplesOfLatinLetters(n) {
    number = Number(n);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (i = 0; i < number; i++) {
        let result = '' + alphabet[i];

        for (j = 0; j < number; j++) {
            let secondResult = result + alphabet[j];

            for (k = 0; k < number; k++) {
                let turthResult = secondResult + alphabet[k];

                console.log(turthResult);

            }

        }

    }

}

triplesOfLatinLetters('3');