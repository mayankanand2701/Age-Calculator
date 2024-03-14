# Age-Calculator
Age Calculator is a npm package that allows users to easily calculate their age in years, months, and days based on their birth date.

## Installation
To install my-age-calculator, you need to have Node.js installed on your system. Then, you can follow these steps : 

- Navigate to the directory where you want to use the package.
- Initialize npm by running ( in your terminal ) :
  ```javascript
  npm init
  ```
- Install the package by running ( in your terminal ) : 
  ```javascript
  npm install my-age-calculator  
  ```

## Usage

After installing the package, you can use it in your projects by requiring it.Write the below code under your index.js( or as your file name ) file.

```javascript
const calculateAge = require('my-age-calculator');

// Call the calculateAge method
calculateAge((age) => {
    console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
    // You can perform any other operation with the age object here as per requirement
});
```

Then run the below command ( in your terminal ) :
  ```javascript
  node index.js   
  ```
When you use this module, it prompts the user to enter their birth date in the format 'YYYY-MM-DD'. After receiving the input, it calculates the user's age in years, months, and days based on the provided birth date. Finally, it outputs the calculated age as a structured object containing the number of years, months, and days.

## License
This package is licensed under the Apache 2.0 License.
