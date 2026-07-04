function solve(arr) {
    let gradesMap = new Map;

    for(let entry of arr) {
        let [name, ...grades] = entry.split(' ');
        let gradesNum = grades.map(Number);

       if (!gradesMap.has(name)) {

        gradesMap.set(name, gradesNum);

       } else {
        let currGradesNum = gradesMap.get(name);

        let newGradesNum = currGradesNum.concat(gradesNum);        

        gradesMap.set(name, newGradesNum);
       }
    }

    let averageGradesMap = new Map;

    for(let [name, grades] of gradesMap.entries()) {
        
        let sum = 0;

        for (let grade of grades) {            
            sum += grade;
        }

        let averageGrades = sum / grades.length;
        
        averageGradesMap.set(name, averageGrades);
    }

    let sorted = Array.from(averageGradesMap.entries())
                .sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, average] of sorted) {

    console.log(`${name}: ${average.toFixed(2)}`);
    }   
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])