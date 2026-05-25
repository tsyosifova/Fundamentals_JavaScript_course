function rounding(num, prec){

    if (prec >= 0 && prec <=15){
        console.log(parseFloat(num.toFixed(prec)));
    } else {
        console.log(parseFloat(num.toFixed(15)));
    }

}
rounding(10.5,3);