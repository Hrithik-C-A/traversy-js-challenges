function calculateTotalSalesWithTax(products, tax) {
    const salesAmountOfProducts = products.map(item => item.price * item.quantity);
    const totalSalesAmount = salesAmountOfProducts.reduce((total, num) => total + num, 0);
    const taxRate = totalSalesAmount * (tax/100);
    const totalSalesAmountWithTax = Number(totalSalesAmount) + Number(taxRate);
    return parseFloat(totalSalesAmountWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
