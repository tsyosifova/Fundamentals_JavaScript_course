function solve(str) {
    let midInd = str.length / 2;
    let firsPart = str.substring(0, midInd).split('').reverse().join('');
    let secondPart = str.substring(midInd).split('').reverse().join('');

    console.log(firsPart);
    console.log(secondPart);
    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');