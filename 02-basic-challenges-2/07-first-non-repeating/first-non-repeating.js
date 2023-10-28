function findFirstNonRepeatingCharacter(str) {
    const trackedElements = [];
    const repeatedElements = [];

    for (let i = 0; i < str.length; i++) {
        if (!trackedElements.includes(str[i])) {
            trackedElements.push(str[i]);
        } else {
            repeatedElements.push(str[i]);
        }
    }

    const nonRepeatedElements = trackedElements.filter( item => !repeatedElements.includes(item));

    if ((repeatedElements.length === 0 && trackedElements === nonRepeatedElements) || nonRepeatedElements.length === 0) {
        return null;
    } else {
        return nonRepeatedElements[0];
    }
}

module.exports = findFirstNonRepeatingCharacter;
