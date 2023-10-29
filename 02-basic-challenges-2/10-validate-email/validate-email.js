function validateEmail(email) {

    if (email.indexOf('@') === -1) {
        return false;
    }

    const [localPart, domainPart] = email.split('@');
    if ( localPart.length === 0 || domainPart.length < 3) {
        return false;
    }

    const domainExtension = email.split('.');
    if (domainExtension.length < 2 || domainExtension[domainExtension.length - 1].length < 2) {
        return false;
    } 

    return true;


    // const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    // return regex.test(email);

}

module.exports = validateEmail;
