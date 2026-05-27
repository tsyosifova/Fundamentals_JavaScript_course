function triangleOfNumbers (endNum) {
   
    for (i = 1; i <= endNum; i++) {
    let nubers = ''; 

        for (j = 1; j<= i; j++){
           
            nubers += `${i} `
            
        }       

        console.log(nubers);
    }
            
}

triangleOfNumbers(3);