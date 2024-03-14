const readline = require('readline');

// Function to calculate age
function calculateAge(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter your birth date (YYYY-MM-DD): ', (birthDateInput) => {
        const birth = new Date(birthDateInput);
        const currentDate = new Date();
        
        // Calculate the difference in milliseconds
        let difference = currentDate - birth;
        
        // Convert the difference to days
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        // Calculate years
        const years = Math.floor(days / 365);
        
        // Calculate remaining days after subtracting the years
        const remainingDays = days % 365;
        
        // Calculate months from remaining days
        const months = Math.floor(remainingDays / 30); // Assuming 30 days in a month
        
        // Calculate remaining days after subtracting the months
        const remainingDaysAfterMonths = remainingDays % 30;
        
        rl.close();

        // Return the age as an object
        callback({
            years: years,
            months: months,
            days: remainingDaysAfterMonths
        });
    });
}

module.exports = calculateAge;
