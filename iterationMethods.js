//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const numbersGreaterOrEqual = [];
const resultOfGreater = numbersGreaterOrEqual.push(
  numbers.filter((number) => number >= 25)
);
console.log(numbersGreaterOrEqual);

const numbersDivisibleByFive = [];
const resultsOfDivisible = numbersDivisibleByFive.push(
  numbers.filter((number) => number % 5 == 0)
);

console.log(numbersDivisibleByFive);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

//const numbers = [10, 13, 20, 25, 38, 35, 40];

// no need for a empty array

const mappingSquared = numbers.map((number) => number * number);

console.log(mappingSquared);

const mapingDouble = numbers.map((number) => number * 2);

console.log(mapingDouble);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//const numbers = [10, 13, 20, 25, 38, 35, 40];

const FilterAndMapGreaterThan = numbers
  .filter((number) => number >= 20)
  .map((number) => number * number);

console.log(FilterAndMapGreaterThan);

const FilterAndMapDivisible = numbers
  .filter((number) => number % 5 === 0)
  .map((number) => number * 3);

console.log(FilterAndMapDivisible);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/

/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
//didnt understand the question
/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const temperaturez = [
  122, 125, 119, 124, 128, 130, 121, 120, 127, 129, 123, 126, 124, 122, 118,
  119, 121, 128, 130, 136, 127, 126, 125, 122, 123, 119, 120, 128, 129, 127,
  126,
];
const fahrenheitToCelsius = temperaturez.map((temp) => (temp - 32) * (5 / 9));

console.log(fahrenheitToCelsius);
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

const temperatures = [72, 85, 90, 60, 100, 78];
const threshold = 80;
const hottestDays = (temperatures, threshold) =>
  temperatures.filter((temp) => temp > threshold);

console.log(hottestDays(temperatures, threshold));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
