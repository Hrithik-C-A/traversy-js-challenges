function findMissingLetter(arr) {
    const arrayOfUnicode = arr.map(item => item.charCodeAt()).sort(function(a, b){return a-b});

    const actualSum = arrayOfUnicode.reduce((acc, sum) => acc + sum, 0);
    
    let expectedSum = 0;
    let missingLetter;
    
    for (let i = arrayOfUnicode[0]; i <= arrayOfUnicode[arrayOfUnicode.length - 1]; i++) {
        expectedSum+= i;
    }
    missingLetter = String.fromCharCode(Number(expectedSum - actualSum));

    return missingLetter;
}

module.exports = findMissingLetter;
