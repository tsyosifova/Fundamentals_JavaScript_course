function dayOfWeek(number) {
    let arr = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];
    
    let day = arr[number - 1];

    if(number <= 0 || number > 7) {
        console.log(`Invalid day!`);
    } else {
        console.log(day);
    }
    
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);