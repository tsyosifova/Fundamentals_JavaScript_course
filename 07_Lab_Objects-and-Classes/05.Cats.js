function solve(arrDate) {

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow(name, age) {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

for (let catDate of arrDate) {

    let [name, age] = catDate.split(' ');
    
    let cat = new Cat(name, age);

    cat.meow(name, age);
    
}
}

solve(['Mellow 2', 'Tom 5']);