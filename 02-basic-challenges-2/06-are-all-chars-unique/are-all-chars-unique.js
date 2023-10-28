function areAllCharactersUnique(str) {
    const trackedElements = [];
    const repeatedElements = [];

    for (let i = 0; i < str.length; i++) {
        if (!trackedElements.includes(str[i])) {
            trackedElements.push(str[i]);
        } else {
            repeatedElements.push(str[i]);
        }
    }

    if (trackedElements.includes(repeatedElements[0])) {
        return false
    } else {
        return true
    }
}

module.exports = areAllCharactersUnique;
