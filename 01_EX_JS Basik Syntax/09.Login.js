function login(input){
    let username = input[0];
    let password = username.split('').reverse().join('');
    let tryCount = 0;

    for (let i = 1; i<=input.length; i++){
        let curentPass = input[i];
        tryCount++;

        if (curentPass !== password && tryCount === 4){
            console.log(`User ${username} blocked!`);
            break;
        }

        if (curentPass === password) {
            console.log(`User ${username} logged in.`)
            break;
        } else {
            console.log(`Incorrect password. Try again.`)
        }

    }


}

login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
//login(['sunny','rainy','cloudy','sunny','not sunny']);