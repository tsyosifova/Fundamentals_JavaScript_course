function solve(string) {
    let demonsArr = string.split(/\s*,\s*/).sort((a, b) => a.localeCompare(b));
    let demonsHealthDamage = {};
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /[-+]?\d+(\.\d+)?/g;
    let operatorPattern = /[*\/]/g;
    
    for (let demon of demonsArr) {

        let health = 0;
        let damage = 0;

        let healthSymbolsMatches = demon.match(healthPattern);
        let demonDigitsMatches = demon.match(damagePattern);

        if (healthSymbolsMatches) {

            for (let symbol of healthSymbolsMatches) {
                let ascii = symbol.charCodeAt();
                health += ascii;
            }
        }

        if (demonDigitsMatches) {
            for (let digit of demonDigitsMatches) {
                damage += Number(digit);
            }
        }

        let operatorMatches = demon.match(operatorPattern);

        if (operatorMatches) {
            for (let operator of operatorMatches) {
                
                if(operator === '*') {
                    damage *= 2;

                } else {
                    damage /= 2;
                }
            }
        }

        demonsHealthDamage[demon] = { health, damage };

    }
   
    let entries = Object.entries(demonsHealthDamage);
    //.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, infoObj] of entries) {

        console.log(`${name} - ${infoObj.health} health, ${infoObj.damage.toFixed(2)} damage`);
    }
    
}

solve('M3ph1st0**, Azazel');

solve(`M3ph-0.5s-0.5t0.0**`);

solve(`Gos/ho`);