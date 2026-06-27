function printEmployees(arr) {

    for (let emplyoeeName of arr) {
        
        let emplyoeeNumber = emplyoeeName.length;
        
        let employeeObj = {
            name: emplyoeeName,
            number: emplyoeeNumber 
        }

        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.number}`);

    }
}

printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);