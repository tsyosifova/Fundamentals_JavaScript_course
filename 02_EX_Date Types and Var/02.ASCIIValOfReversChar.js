function asciiValOfReversChar(char1, char2, char3) {

    console.log(`${char3}${char2}${char1}`);

    ascii1 = char1.charCodeAt();
    ascii2 = char2.charCodeAt();
    ascii3 = char3.charCodeAt();

    console.log(`${ascii3} ${ascii2} ${ascii1}`);
    
}

asciiValOfReversChar('a', 'b', 'c');