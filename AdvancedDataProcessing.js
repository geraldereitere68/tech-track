/* 
Code Filename: AdvancedDataProcessing.js
Description: This code performs advanced data processing tasks by implementing various algorithms and techniques. It includes sorting, searching, data manipulation, and mathematical operations.
Author: [Your Name]
*/

// Sorting Algorithm - Bubble Sort
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Searching Algorithm - Binary Search
function binarySearch(arr, value) {
  var startIndex = 0,
    endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    var middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[middleIndex] === value) {
      return middleIndex;
    } else if (arr[middleIndex] < value) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
}

// Data Manipulation - Merge Two Arrays
function mergeArrays(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  return mergedArray;
}

// Mathematical Operations - Factorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Other Complex Functions...

// Usage Examples:
var unsortedArray = [5, 2, 8, 3, 1];
var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

var mergedArray = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log("Merged Array:", mergedArray);

var result = factorial(5);
console.log("Factorial of 5:", result);

var searchIndex = binarySearch(sortedArray, 3);
console.log("Index of 3:", searchIndex);

// More complex functions and operations can be added below...

// ...
// ...
// ...

// End of the code.