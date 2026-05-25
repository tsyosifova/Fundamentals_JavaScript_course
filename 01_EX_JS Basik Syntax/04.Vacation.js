function vacation(people, type, day){
let price = 0;
let total = 0;
if (type === `Students`) {
    if (day === `Friday`) {
        price = 8.45;
    } else if (day === `Saturday`){
        price = 9.80;
    } else if (day === `Sunday`){
        price = 10.46;
    }
} else if (type === `Business`) {
    if (day === `Friday`) {
        price = 10.90;
    } else if (day === `Saturday`){
        price = 15.60;
    } else if (day === `Sunday`){
        price = 16;
    }

} else if (type === `Regular`) {
    if (day === `Friday`) {
        price = 15;
    } else if (day === `Saturday`){
        price = 20;
    } else if (day === `Sunday`){
        price = 22.50;
    }

}

total = people * price;

if (type === `Students` && people >= 30) {
    total *= 0.85;
} else if (type === `Business` && people >= 100) {
    total = (people - 10) * price;
} else if (type === `Regular` && people >= 10 && people <= 20) {
    total *= 0.95;
}

console.log(`Total price: ${total.toFixed(2)}`);

}

vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");