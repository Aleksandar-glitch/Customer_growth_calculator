const { calculateCustomerGrowth } = require('./customerGrowthCalculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCalculator() {
    rl.question('Enter the initial number of customers: ', (initial) => {
        const initialCustomers = parseFloat(initial);

        rl.question('Enter the start date (YYYY-MM-DD): ', (date) => {
            const startDate = new Date(date);

            rl.question('Enter the monthly growth rate (comma-separated for 5 years, e.g., 1.5,2,...): ', (growthRatesInput) => {
                let growthRates = growthRatesInput.split(',').map(Number);

                if (growthRates.length < 60) {
                    const lastRate = growthRates[growthRates.length - 1];
                    while (growthRates.length < 60) {
                        growthRates.push(lastRate);
                    }
                }

                const customers = calculateCustomerGrowth(initialCustomers, growthRates, startDate);
                console.log('Customer growth projection for 5 years:');
                customers.forEach((monthData, index) => {
                    console.log(`Month ${index + 1} (${monthData.month.toLocaleDateString()}): ${monthData.customers} customers`);
                });

                rl.close();
            });
        });
    });
}

startCalculator();
