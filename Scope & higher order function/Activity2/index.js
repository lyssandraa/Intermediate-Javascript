// declare an array with five numbers //

let arrNums = [7, 8, 11, 55, 88];

// use .map to iterate and multiply by 3 //

let multipliedNums = arrNums.map(function (num) {
  return num * 3;
});

// log original and new array to console //

console.log("Original numbers:", arrNums);
console.log("Multiplied numbers:", multipliedNums);
