const assert = require('chai').assert;
const { calculateCustomerGrowth, updateGrowthRates } = require('../src/customerGrowthCalculator');

describe('Customer Growth Calculator', () => {
    it('should calculate the correct number of customers for 5 years', () => {
        const initialCustomers = 1000;
        const growthRates = [2, 2, 2, 2, 2];  // 2% growth rate for 5 months
        const startDate = new Date('2024-01-01');

        const result = calculateCustomerGrowth(initialCustomers, growthRates, startDate);
        assert.lengthOf(result, 60);  // Expecting 60 months
        assert.isAbove(result[0].customers, initialCustomers);  // Customers should increase
    });

    it('should update the growth rates correctly', () => {
        let growthRates = Array(60).fill(1); // 1% growth rate for all 60 months
        updateGrowthRates(growthRates, 3, 5); // Update 4th month to 5%

        assert.equal(growthRates[3], 5);  // The 4th month should now have 5% rate
    });
});
