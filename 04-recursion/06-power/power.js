function power(base, exponent) {
    if (exponent < 2) {
        return base
    }
    return base * power(base, exponent - 1);
}

module.exports = power;
