function repeetStringVersTwo (string, countRepeet){
    let result = '';

    for(let i = 0; i < countRepeet; i++) {
        result += string;
    }

    //console.log(result);
    return result;

} 

console.log(repeetStringVersTwo("abc", 3));
repeetStringVersTwo("abc", 3)