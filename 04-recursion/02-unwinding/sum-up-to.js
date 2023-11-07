function sumUpTo(n) {
    if (n === 1) {
        return 1;
    }

    if ( n < 1) {
        return 0
    }

    return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
