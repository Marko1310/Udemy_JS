'use strict';
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Create a function which takes in an arrazy 'arr' and logs a string with temperatures.

const temperatures = [12, 5, -5, 0, 4];

function printForecast(temp) {
  let string = [];
  for (let i = 0; i < temp.length; i++) {
    string = string + `...${temp[i]}\u2103 in ${i + 1} days`;
  }
  console.log(string);
}

printForecast(temperatures);
