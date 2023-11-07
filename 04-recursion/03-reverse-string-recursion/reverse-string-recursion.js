function reverseString(str) {
    if ( str === '') {
        return '';
    }
    return reverseString(str.substring(1)) + str[0];

    // return str === '' ? '' : reverseString(str.substring(1)) + str[0]
}

module.exports = reverseString;
