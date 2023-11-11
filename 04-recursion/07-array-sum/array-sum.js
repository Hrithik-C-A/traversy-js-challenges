function arraySum(arr) {

    if (arr.length === 0) {
        return 0;
    }

    const newArr = arr.slice(1);

    return arr[0] + arraySum(newArr);
}

module.exports = arraySum;
