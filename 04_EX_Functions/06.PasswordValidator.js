function passwordValidator(password) {
    let isValidLength = chechIsValidLength(password);
    let isAlfabetNumeric = chechIsAlfabetNumeric(password);
    let isHas2digits = chechIsHas2digits(password);

    if (isValidLength && isAlfabetNumeric && isHas2digits) {
        console.log(`Password is valid`)
    }

    function chechIsValidLength(password) {

        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }

    function chechIsAlfabetNumeric(password) {
        let pattern = /^\w+$/;

        if (pattern.test(password)) {
            return true;
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }
    }

    function chechIsHas2digits(passwordValidator) {
        let pattern = /\d{2,}/;

        if (pattern.test(password)) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
    }

}

passwordValidator('logIn');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');