/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
//const arr = [3,7,6,5,1];
function findLargestElement(numbers) {
    var max = numbers[0];
    for(let i=1;i<numbers.length;i++) {
        if(numbers[i]>max) {
            max = numbers[i];
        }
    }
    return max;
}
//console.log(findLargestElement(arr));
module.exports = findLargestElement;