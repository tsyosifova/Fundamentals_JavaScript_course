function solve(arr) {
    let companyEmployees = {};

    for (let companyData of arr) {
        let [company, employeeId] = companyData.split(" -> ");

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {
                companyEmployees[company].push(employeeId);
            }
        } else {
            companyEmployees[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeArr] of entries) {
        console.log(`${company}`);

        for (let employeeId of employeeArr) {
            console.log(`-- ${employeeId}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);