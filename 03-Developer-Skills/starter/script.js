// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1.) Calculate the difference between max and min temperatures
// 2.) How to compute max and min
// 3.) Whats sensor error

// -- How to ignore errors
// -- Find max value
// -- Find min value
// -- Subtract max and min

function removeError(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'error') {
      arr.splice(i, 1);
    }
  }
}
removeError(temperatures);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
};

calcTempAmplitude(temperatures);

// const measureKelvin = function () {
//   const measurment = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   console.log(measurment);
//   console.table(measurment);

//   const kelvin = measurment.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());
