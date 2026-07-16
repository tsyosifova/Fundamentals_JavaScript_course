function solve(input) {
    let regExpr = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let maches = input.matchAll(regExpr);
    
    let result = [];

    for (mach of maches) {

        result.push(mach[0]);

    }

    console.log(result.join(' '));


    
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");