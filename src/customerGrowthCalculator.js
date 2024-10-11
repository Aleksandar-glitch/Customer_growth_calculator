// Function to calculate customer growth
function calculateCustomerGrowth(initialCustomers, growthRates, startDate) {
    let customers = [];
    let currentCustomers = initialCustomers;

    for (let i = 0; i < 60; i++) {  // 60 months in 5 years
        let growthRate = growthRates[i] !== undefined ? growthRates[i] : growthRates[growthRates.length - 1];
        currentCustomers *= (1 + growthRate / 100);
        customers.push({
            month: new Date(startDate.getFullYear(), startDate.getMonth() + i, 1),
            customers: Math.round(currentCustomers)
        });
    }
    return customers;
}

// Function to update growth rates
function updateGrowthRates(growthRates, month, newRate, futureMonths = false, yearsAhead = 0) {
    if (futureMonths) {
        // Update all future months
        for (let i = month; i < growthRates.length; i++) {
            if (yearsAhead && i >= 12 * yearsAhead) {
                break;  // Limit to a certain number of years if specified
            }
            growthRates[i] = newRate;
        }
    } else {
        // Update a single month
        growthRates[month] = newRate;
    }
}

module.exports = {
    calculateCustomerGrowth,
    updateGrowthRates
};
