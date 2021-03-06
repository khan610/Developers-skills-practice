// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: diffrence
// // between highest and lowers temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return into

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // --------------------------------------------

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// PROBLEM 2:
// Function should know recive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX
//     // value: Number(prompt("Degress celsius:")),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);

//   console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// console.log(amplitudeBug);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]} C ... ${data1[1]} C ... ${data1[2]} C ...`);

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str = `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};
printForecast(data1);
