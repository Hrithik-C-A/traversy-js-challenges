function findMissingLetter(arr) {
    const unicodeArr = arr.map(item => item.charCodeAt());

    const actualSum = unicodeArr.reduce((total, num) => total + num, 0);
    const expectedSum = ((unicodeArr.length + 1)/2)*(unicodeArr[0] + unicodeArr[unicodeArr.length - 1]);
    
    const missingLetter = (expectedSum - actualSum);

    return String.fromCharCode(missingLetter);
}

module.exports = findMissingLetter;
