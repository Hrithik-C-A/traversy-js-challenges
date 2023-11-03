function validatePassword(password) {
    
    const hasRequiredLength = password.length >= 8;

    const hasUpperCase = (pass) => {
        // return password !== pass.toLowerCase();
        return /[A-Z]/.test(pass);
    }
    const hasLowerCase = (pass) => {
        // return password !== pass.toUpperCase();
        return /[a-z]/.test(pass);
    }

    const hasDigits = (pass) => {
        return /[0-9]/.test(pass);
    }

    if (hasRequiredLength && hasLowerCase(password) && hasUpperCase(password) && hasDigits(password)) {
        return true;
    } 

    return false;

}

module.exports = validatePassword;
