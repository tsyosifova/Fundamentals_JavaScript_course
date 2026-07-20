function solve(string) {
    let demonsArr = string.split(/\s*,\s/).sort((a, b) => a.localeCompare(b));
    let demonsHealthDamage = {};
    let healthPattern = /[^0-9+\-*\/.]/g;
    //let damagePattern = //;
    let health = 0;
    let damage = 0;

    for (let demon of demonsArr) {

        let healthSymbols = demon.match(healthPattern);

        for (let symbol of healthSymbols) {
            let ascii = symbol.charCodeAt();
            health += ascii; 
        }

        console.log(health);
    }


   //console.log(health);

}

solve('M3ph1st0**, Azazel')